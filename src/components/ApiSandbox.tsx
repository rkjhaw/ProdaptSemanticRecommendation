import React, { useState } from "react";
import { Play, Clipboard, Check, HelpCircle, Code, Shield } from "lucide-react";

export const ApiSandbox: React.FC = () => {
  const [activeEndpoint, setActiveEndpoint] = useState<"recommend" | "products" | "health">("recommend");
  const [requestBody, setRequestBody] = useState(
    JSON.stringify(
      {
        query: "I want an elegant coastal summer look under 100 dollars",
        budget: 100,
        main_category: "Apparel"
      },
      null,
      2
    )
  );
  const [responseOutput, setResponseOutput] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

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

  const handleRun = async () => {
    setLoading(true);
    setResponseOutput(null);
    try {
      let res;
      if (activeEndpoint === "recommend") {
        const parsedBody = JSON.parse(requestBody);
        res = await fetch("/api/recommend", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(parsedBody)
        });
      } else if (activeEndpoint === "products") {
        res = await fetch("/api/products");
      } else {
        res = await fetch("/api/health");
      }

      const data = await res.json();
      setResponseOutput(data);
    } catch (err: any) {
      setResponseOutput({ error: err.message || "Failed to contact microservice." });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    const textToCopy = activeEndpoint === "recommend" ? requestBody : JSON.stringify(endpointSpecs[activeEndpoint], null, 2);
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6" id="api-sandbox-root">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Specifications & Parameters */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">
            API Endpoints Specifications
          </h3>

          <div className="space-y-3">
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
                  className={`w-full p-4 text-left border rounded-2xl transition-all ${
                    isSelected
                      ? "bg-indigo-50/20 dark:bg-indigo-950/10 border-indigo-500 ring-1 ring-indigo-500/10 shadow-sm"
                      : "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800/80 hover:border-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
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
                  <p className="mt-2 text-xs text-slate-400 leading-normal">{value.desc}</p>
                </button>
              );
            })}
          </div>

          {/* Endpoint Parameters Box */}
          {endpointSpecs[activeEndpoint].params.length > 0 && (
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-4 space-y-3">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                JSON Body Parameters
              </span>
              <div className="space-y-3">
                {endpointSpecs[activeEndpoint].params.map((p) => (
                  <div key={p.name} className="text-xs space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-slate-800 dark:text-slate-200">{p.name}</span>
                      <span className="text-[10px] text-indigo-500 bg-indigo-50 dark:bg-indigo-950/20 px-1.5 py-0.2 rounded font-semibold">{p.type}</span>
                    </div>
                    <p className="text-slate-400 leading-relaxed text-[11px]">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* API Playground Workspace */}
        <div className="lg:col-span-7 space-y-4">
          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">
            Interactive Playpen
          </h3>

          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm flex flex-col h-[550px]">
            {/* Playpen Toolbar */}
            <div className="bg-slate-50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800/80 px-5 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  {endpointSpecs[activeEndpoint].method} request
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={copyToClipboard}
                  className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-800 transition-colors"
                  title="Copy payload"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Clipboard className="w-4 h-4" />}
                </button>
                <button
                  onClick={handleRun}
                  disabled={loading}
                  className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-50 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  Run
                </button>
              </div>
            </div>

            {/* Split Screen Panel */}
            <div className="grid grid-cols-1 md:grid-cols-2 flex-1 min-h-0">
              {/* Input Workspace */}
              <div className="flex flex-col border-r border-slate-100 dark:border-slate-800">
                <div className="bg-slate-50/50 dark:bg-slate-950/30 px-4 py-2 border-b border-slate-100 dark:border-slate-800/80 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  {activeEndpoint === "recommend" ? "JSON Payload Input" : "Request Headers"}
                </div>
                {activeEndpoint === "recommend" ? (
                  <textarea
                    value={requestBody}
                    onChange={(e) => setRequestBody(e.target.value)}
                    className="flex-1 w-full p-4 font-mono text-xs text-slate-800 dark:text-slate-200 bg-slate-50/10 dark:bg-slate-950/10 focus:outline-none resize-none border-0"
                  />
                ) : (
                  <div className="p-4 font-mono text-xs text-slate-400 space-y-1.5 select-none bg-slate-50/5 dark:bg-slate-950/5">
                    <div>GET {endpointSpecs[activeEndpoint].path} HTTP/1.1</div>
                    <div>Host: localhost:3000</div>
                    <div>Accept: application/json</div>
                    <div>User-Agent: API-Sandbox/1.0</div>
                  </div>
                )}
              </div>

              {/* Output Workspace */}
              <div className="flex flex-col bg-slate-950 text-slate-200 overflow-hidden">
                <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Response Payload JSON
                </div>
                <div className="flex-1 p-4 overflow-y-auto font-mono text-xs select-all">
                  {loading ? (
                    <div className="h-full flex items-center justify-center gap-2 text-slate-500">
                      <span className="w-4 h-4 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin"></span>
                      <span>Awaiting Server Dispatch...</span>
                    </div>
                  ) : responseOutput ? (
                    <pre className="text-[11px] leading-relaxed whitespace-pre-wrap">
                      {JSON.stringify(responseOutput, null, 2)}
                    </pre>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center text-slate-600 px-6 space-y-2">
                      <Code className="w-8 h-8 text-slate-700" />
                      <div className="space-y-0.5">
                        <span className="font-bold text-slate-500">No Execution Run</span>
                        <p className="text-[10px] max-w-xs leading-normal">
                          Press the 'Run' button in the toolbar above to invoke this REST endpoint and inspect the output payload.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ApiSandbox;
