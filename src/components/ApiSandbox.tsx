import React, { useState, useEffect } from "react";
import {
  Play,
  Clipboard,
  Check,
  HelpCircle,
  Code,
  Sliders,
  DollarSign,
  Layers,
  Sparkles,
  Star,
  CheckCircle,
  RefreshCw,
  Database,
  Activity,
  SlidersHorizontal,
  ArrowRight,
  Info
} from "lucide-react";
import MarkdownRenderer from "./MarkdownRenderer.tsx";

export const ApiSandbox: React.FC = () => {
  const [activeEndpoint, setActiveEndpoint] = useState<"recommend" | "products" | "health">("recommend");
  const [inputMode, setInputMode] = useState<"form" | "json">("form");
  
  // Form values for POST /api/recommend
  const [formQuery, setFormQuery] = useState("blue tshirt and minimalist white sneakers");
  const [formBudget, setFormBudget] = useState(150);
  const [formCategory, setFormCategory] = useState("All");

  // Raw JSON state
  const [requestBody, setRequestBody] = useState("");

  const [responseOutput, setResponseOutput] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [outputTab, setOutputTab] = useState<"visual" | "json">("visual");

  const endpointSpecs = {
    recommend: {
      method: "POST",
      path: "/api/recommend",
      desc: "Executes abstract semantic search across catalog using high-dimensional cosine mappings and synthesizes a personalized styling commentary via Gemini 3.5 Flash.",
      params: [
        { name: "query", type: "string (Required)", desc: "Abstract natural language prompt describing styling goals." },
        { name: "budget", type: "number (Optional)", desc: "Filters results strictly below this price ceiling." },
        { name: "main_category", type: "string (Optional)", desc: "Trims matches within certain domain structures." }
      ]
    },
    products: {
      method: "GET",
      path: "/api/products",
      desc: "Fetches the full active fashion catalog inside our e-commerce dataset containing ratings, features, and metadata.",
      params: []
    },
    health: {
      method: "GET",
      path: "/api/health",
      desc: "Returns microservice diagnostic parameters, memory capacities, environment parameters, and Gemini API keys indicators.",
      params: []
    }
  };

  // Sync Form State to Raw JSON for developer visibility
  useEffect(() => {
    const payload: any = {
      query: formQuery
    };
    if (formBudget > 0) {
      payload.budget = formBudget;
    }
    if (formCategory !== "All") {
      payload.main_category = formCategory;
    }
    setRequestBody(JSON.stringify(payload, null, 2));
  }, [formQuery, formBudget, formCategory]);

  const starterQueries = [
    { query: "blue tshirt and minimalist white sneakers", label: "Blue Tee & Sneakers" },
    { query: "light breezy linen beachwear", label: "Linen Beachwear" },
    { query: "cozy winter wool wrap", label: "Winter Wool Coat" },
    { query: "professional executive double-breasted blazer", label: "Executive Blazer" }
  ];

  const handleRun = async () => {
    setLoading(true);
    setResponseOutput(null);
    try {
      let res;
      if (activeEndpoint === "recommend") {
        let payload;
        if (inputMode === "json") {
          payload = JSON.parse(requestBody);
        } else {
          payload = {
            query: formQuery,
            budget: formBudget > 0 ? formBudget : undefined,
            main_category: formCategory === "All" ? undefined : formCategory
          };
        }
        res = await fetch("/api/recommend", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
      } else if (activeEndpoint === "products") {
        res = await fetch("/api/products");
      } else {
        res = await fetch("/api/health");
      }

      const data = await res.json();
      setResponseOutput(data);
      // Automatically switch to visual tab on successful fetch if it has styling info
      if (activeEndpoint === "recommend" && data.recommendations) {
        setOutputTab("visual");
      } else {
        setOutputTab("json");
      }
    } catch (err: any) {
      setResponseOutput({ error: err.message || "Failed to contact microservice." });
      setOutputTab("json");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6" id="api-sandbox-root">
      {/* Introduction Callout */}
      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Activity className="w-4 h-4 text-indigo-500" />
            Interactive Microservice Tester
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Send live HTTP client payloads directly to the underlying Node.js API, compare search matching algorithms, and inspect JSON payloads side-by-side with formatted suggestions.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 bg-slate-50 dark:bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-200/50 dark:border-slate-800/50">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
          REST HOST: PORT 3000
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT COLUMN: Endpoints Specs & Input Settings */}
        <div className="lg:col-span-5 space-y-6">
          {/* Endpoint Selector */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
              API Endpoint Specification
            </h4>

            <div className="space-y-2">
              {Object.entries(endpointSpecs).map(([key, value]) => {
                const isSelected = activeEndpoint === key;
                const isPost = value.method === "POST";

                return (
                  <button
                    key={key}
                    onClick={() => {
                      setActiveEndpoint(key as any);
                      setResponseOutput(null);
                    }}
                    className={`w-full p-3.5 text-left border rounded-2xl transition-all duration-200 ${
                      isSelected
                        ? "bg-indigo-50/20 dark:bg-indigo-950/10 border-indigo-500 ring-1 ring-indigo-500/10 shadow-sm"
                        : "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800/80 hover:border-slate-200"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${
                            isPost ? "bg-indigo-600 text-white" : "bg-emerald-600 text-white"
                          }`}
                        >
                          {value.method}
                        </span>
                        <span className="font-mono text-xs font-bold text-slate-800 dark:text-slate-100">
                          {value.path}
                        </span>
                      </div>
                      {isSelected && <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>}
                    </div>
                    <p className="mt-2 text-xs text-slate-400 leading-normal">{value.desc}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Input Workspace Container */}
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm flex flex-col">
            {/* Header / Input Mode Toggles */}
            <div className="bg-slate-50 dark:bg-slate-950/50 border-b border-slate-100 dark:border-slate-800/80 px-4 py-3 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-indigo-500" />
                Configure Input Payload
              </span>

              {activeEndpoint === "recommend" && (
                <div className="flex bg-slate-200/50 dark:bg-slate-800 p-0.5 rounded-lg text-[10px] font-bold">
                  <button
                    onClick={() => setInputMode("form")}
                    className={`px-2.5 py-1 rounded-md transition-all ${
                      inputMode === "form"
                        ? "bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm"
                        : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-300"
                    }`}
                  >
                    Form Builder
                  </button>
                  <button
                    onClick={() => setInputMode("json")}
                    className={`px-2.5 py-1 rounded-md transition-all ${
                      inputMode === "json"
                        ? "bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm"
                        : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-300"
                    }`}
                  >
                    Raw JSON
                  </button>
                </div>
              )}
            </div>

            {/* Input Body Content */}
            <div className="p-4 space-y-4">
              {activeEndpoint !== "recommend" ? (
                <div className="p-4 bg-slate-50 dark:bg-slate-950/20 rounded-xl border border-dashed border-slate-200 dark:border-slate-800 text-center space-y-2 py-8">
                  <Info className="w-5 h-5 text-slate-400 mx-auto" />
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">No Parameters Required</p>
                  <p className="text-[11px] text-slate-400 leading-normal max-w-xs mx-auto">
                    This endpoint uses standard HTTP GET request headers. Just hit the "Run" trigger to fetch and inspect the payload.
                  </p>
                </div>
              ) : inputMode === "form" ? (
                <div className="space-y-4 animate-fade-in text-xs">
                  {/* Query */}
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-[10px] flex justify-between">
                      <span>Shopper Style Prompt (Query)</span>
                      <span className="text-indigo-500">Required</span>
                    </label>
                    <input
                      type="text"
                      value={formQuery}
                      onChange={(e) => setFormQuery(e.target.value)}
                      placeholder="e.g., lightweight linen beachwear..."
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 text-slate-800 dark:text-slate-100 text-xs font-medium"
                    />

                    {/* Starter suggestions */}
                    <div className="pt-1 space-y-1">
                      <span className="text-[10px] text-slate-400 block">Insert query starter templates:</span>
                      <div className="flex flex-wrap gap-1">
                        {starterQueries.map((item, idx) => (
                          <button
                            key={idx}
                            onClick={() => setFormQuery(item.query)}
                            className="px-2 py-0.5 bg-slate-50 hover:bg-indigo-50 dark:bg-slate-950 dark:hover:bg-indigo-950/30 text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 rounded text-[10px] border border-slate-200/50 dark:border-slate-800/80 font-medium"
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex justify-between items-center">
                      <label className="font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-[10px]">
                        Budget Ceiling Limit
                      </label>
                      <span className="text-indigo-600 dark:text-indigo-400 font-bold">${formBudget}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="range"
                        min="30"
                        max="200"
                        step="10"
                        value={formBudget}
                        onChange={(e) => setFormBudget(parseInt(e.target.value))}
                        className="flex-grow accent-indigo-600 cursor-pointer h-1 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none"
                      />
                      <input
                        type="number"
                        min="1"
                        value={formBudget}
                        onChange={(e) => setFormBudget(Math.max(1, parseInt(e.target.value) || 0))}
                        className="w-16 px-2 py-1 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-center text-xs font-bold text-slate-800 dark:text-slate-100"
                      />
                    </div>
                  </div>

                  {/* Category select dropdown */}
                  <div className="space-y-1.5 pt-1">
                    <label className="font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-[10px]">
                      Main Category Filter
                    </label>
                    <select
                      value={formCategory}
                      onChange={(e) => setFormCategory(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 text-slate-800 dark:text-slate-100 text-xs font-semibold"
                    >
                      <option value="All">All Categories</option>
                      <option value="Apparel & Accessories">Apparel & Accessories</option>
                      <option value="Shoes">Shoes & Footwear</option>
                      <option value="Bags & Leather Goods">Bags & Leather Goods</option>
                      <option value="All Beauty">Cosmetics & Beauty</option>
                    </select>
                  </div>
                </div>
              ) : (
                <div className="space-y-1.5 animate-fade-in">
                  <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase">
                    <span>JSON Payload Editor</span>
                    <span className="text-amber-500">Ensure Valid syntax</span>
                  </div>
                  <textarea
                    value={requestBody}
                    onChange={(e) => setRequestBody(e.target.value)}
                    className="w-full h-44 p-3 font-mono text-xs text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 resize-none"
                  />
                </div>
              )}

              {/* Action Trigger Button */}
              <button
                onClick={handleRun}
                disabled={loading || (activeEndpoint === "recommend" && inputMode === "form" && !formQuery.trim())}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-xl text-xs font-extrabold flex items-center justify-center gap-2 transition-all shadow-md shadow-indigo-500/10 hover:shadow-indigo-500/20 active:scale-[0.98]"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Executing Request...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Run API Call & Recommend Outputs</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Response & Beautiful Output Visualizer */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm flex flex-col min-h-[600px]">
            {/* Toolbar Header */}
            <div className="bg-slate-50 dark:bg-slate-950/50 border-b border-slate-100 dark:border-slate-800/80 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${loading ? "bg-amber-500 animate-pulse" : responseOutput ? "bg-emerald-500" : "bg-slate-300"}`}></span>
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                  {loading ? "FETCHING DATA..." : responseOutput ? "API SUCCESS" : "AWAITING ACTION"}
                </span>
              </div>

              {responseOutput && (
                <div className="flex gap-2">
                  <div className="flex bg-slate-200/50 dark:bg-slate-800 p-0.5 rounded-lg text-[10px] font-bold">
                    {activeEndpoint === "recommend" && responseOutput.recommendations && (
                      <button
                        onClick={() => setOutputTab("visual")}
                        className={`px-2.5 py-1 rounded-md transition-all ${
                          outputTab === "visual"
                            ? "bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm"
                            : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-300"
                        }`}
                      >
                        Visual Recommendations
                      </button>
                    )}
                    <button
                      onClick={() => setOutputTab("json")}
                      className={`px-2.5 py-1 rounded-md transition-all ${
                        outputTab === "json" || (activeEndpoint !== "recommend")
                          ? "bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm"
                          : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-300"
                      }`}
                    >
                      Raw Response JSON
                    </button>
                  </div>

                  <button
                    onClick={() => copyToClipboard(JSON.stringify(responseOutput, null, 2))}
                    className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-850 transition-colors"
                    title="Copy response body"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Clipboard className="w-4 h-4" />}
                  </button>
                </div>
              )}
            </div>

            {/* Split Screen Panel */}
            <div className="flex-grow p-5 overflow-y-auto max-h-[650px] min-h-[500px]">
              {loading ? (
                <div className="h-full flex flex-col items-center justify-center gap-3 py-24 text-slate-500">
                  <div className="relative">
                    <span className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin block"></span>
                    <Sparkles className="w-4 h-4 text-indigo-400 absolute top-3 left-3" />
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">Contacting Fashion Recommendation Microservice...</p>
                    <p className="text-[10px] text-slate-400">Computing embeddings and querying cosine matrix...</p>
                  </div>
                </div>
              ) : responseOutput ? (
                outputTab === "visual" && activeEndpoint === "recommend" && responseOutput.recommendations ? (
                  <div className="space-y-6 animate-fade-in">
                    {/* Algorithmic Execution Metric header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 bg-indigo-50/30 dark:bg-indigo-950/15 p-3 rounded-xl border border-indigo-100/30 dark:border-indigo-900/10 text-[10px] font-bold">
                      <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                        <Database className="w-3.5 h-3.5" />
                        <span>EXECUTION MODE:</span>
                        <span className={`px-2 py-0.5 rounded text-white ${responseOutput.execution_mode === "vector" ? "bg-emerald-600" : "bg-amber-600"}`}>
                          {responseOutput.execution_mode === "vector" ? "HIGH-DIMENSIONAL VECTOR MATCH" : "KEYWORD OVERLAP FALLBACK"}
                        </span>
                      </div>
                      <span className="text-slate-400 font-mono">Matched {responseOutput.recommendations.length} Items</span>
                    </div>

                    {/* Stylist Expert Narrative */}
                    <div className="bg-slate-50 dark:bg-slate-950/30 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-3">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                        Stylist Concierge Report (Markdown Output)
                      </span>
                      <div className="prose prose-indigo dark:prose-invert max-w-none">
                        <MarkdownRenderer content={responseOutput.explanation} />
                      </div>
                    </div>

                    {/* Suggested products cards */}
                    <div className="space-y-3">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                        Recommended Product Cards (Suggested Output)
                      </span>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {responseOutput.recommendations.map(({ product, score }: any) => (
                          <div
                            key={product.parent_asin}
                            className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 p-3 rounded-2xl hover:shadow-md transition-all flex flex-col justify-between"
                          >
                            <div className="space-y-2">
                              {/* Product Header */}
                              <div className="flex gap-3">
                                <img
                                  src={product.images?.[0]?.thumb || "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=150"}
                                  alt={product.title}
                                  className="w-14 h-14 object-cover rounded-lg bg-slate-50 border border-slate-100 dark:border-slate-800"
                                  referrerPolicy="no-referrer"
                                />
                                <div className="min-w-0 space-y-0.5">
                                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                                    {product.store}
                                  </span>
                                  <h5 className="text-xs font-bold text-slate-800 dark:text-slate-100 line-clamp-2 leading-snug">
                                    {product.title}
                                  </h5>
                                </div>
                              </div>

                              {/* Spec parameters */}
                              <div className="flex flex-wrap gap-1">
                                {product.categories.slice(0, 2).map((cat: string) => (
                                  <span key={cat} className="text-[9px] px-1.5 py-0.5 bg-slate-50 dark:bg-slate-950 text-slate-400 rounded">
                                    {cat}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Score, Rating, Price Footer */}
                            <div className="pt-3 mt-3 border-t border-slate-50 dark:border-slate-800/60 flex items-center justify-between text-xs font-bold">
                              <span className="text-slate-900 dark:text-white text-sm">
                                ${product.price.toFixed(2)}
                              </span>
                              
                              <div className="flex items-center gap-2">
                                <span className="text-[9px] bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 px-1.5 py-0.5 rounded">
                                  Score: {responseOutput.execution_mode === "vector" ? `${Math.round(score * 100)}%` : score.toFixed(2)}
                                </span>
                                <div className="flex items-center gap-0.5 text-amber-500 text-[10px]">
                                  <Star className="w-3 h-3 fill-current" />
                                  <span>{product.average_rating}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="animate-fade-in bg-slate-950 p-4 rounded-2xl text-slate-200 border border-slate-800 overflow-hidden relative">
                    <pre className="font-mono text-[11px] leading-relaxed whitespace-pre-wrap select-all">
                      {JSON.stringify(responseOutput, null, 2)}
                    </pre>
                  </div>
                )
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center text-slate-400 py-20 space-y-4">
                  <div className="w-12 h-12 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl flex items-center justify-center text-slate-400">
                    <Code className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="font-bold text-slate-700 dark:text-slate-200 text-sm">Awaiting Sandbox Query Execution</span>
                    <p className="text-xs text-slate-400 max-w-sm leading-normal mx-auto">
                      Adjust the input parameters inside the form in the left column, then trigger "Run API Call" to dispatch a client request and review recommended outputs.
                    </p>
                  </div>
                  <div className="pt-4 flex items-center gap-2 text-[10px] text-slate-400 font-mono">
                    <span className="flex items-center gap-1.5 bg-slate-100/50 dark:bg-slate-950 px-2 py-1 rounded">
                      METHOD: {endpointSpecs[activeEndpoint].method}
                    </span>
                    <span className="flex items-center gap-1.5 bg-slate-100/50 dark:bg-slate-950 px-2 py-1 rounded">
                      ROUTE: {endpointSpecs[activeEndpoint].path}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiSandbox;
