import React, { useState, useEffect } from "react";
import { Product } from "../data/products.ts";
import { RecommendationResponse, UserReview } from "../types.ts";
import { Search, Sparkles, Filter, DollarSign, Star, Compass, HelpCircle, CheckCircle, RefreshCw } from "lucide-react";
import MarkdownRenderer from "./MarkdownRenderer.tsx";

export const DiscoveryDemo: React.FC = () => {
  const [query, setQuery] = useState("");
  const [budget, setBudget] = useState(200);
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [result, setResult] = useState<RecommendationResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeProduct, setActiveProduct] = useState<string | null>(null);
  const [productReviews, setProductReviews] = useState<Record<string, UserReview[]>>({});
  const [loadingReviews, setLoadingReviews] = useState<string | null>(null);

  const fetchReviews = async (parent_asin: string) => {
    if (productReviews[parent_asin]) return;
    setLoadingReviews(parent_asin);
    try {
      const response = await fetch(`/api/reviews/${parent_asin}`);
      if (response.ok) {
        const data = await response.json();
        setProductReviews((prev) => ({ ...prev, [parent_asin]: data.reviews }));
      }
    } catch (err) {
      console.error("Failed to fetch product reviews:", err);
    } finally {
      setLoadingReviews(null);
    }
  };

  const samplePrompts = [
    {
      label: "Beach Getaway",
      icon: "🏖️",
      query: "I need a light, breezy outfit to go to the beach this summer, preferably in linen"
    },
    {
      label: "Boardroom Executive",
      icon: "💼",
      query: "A highly polished, crisp winter layer for an executive board meeting presentation"
    },
    {
      label: "Airport Comfort",
      icon: "✈️",
      query: "Warm, cozy travel layers for an overnight autumn flight with premium leather bag"
    },
    {
      label: "Arctic Run",
      icon: "🏃",
      query: "High-performance athletic gear to stay dry and insulated during a freezing morning jog"
    }
  ];

  const loadingSteps = [
    "Analyzing natural language intent...",
    "Querying Gemini high-dimensional embeddings (768 dimensions)...",
    "Calculating vector distance via Cosine Similarity matrix...",
    "Mapping fashion categories and applying budget boundaries...",
    "Synthesizing styled outfit combinations with Gemini 3.5 Flash..."
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (loading) {
      interval = setInterval(() => {
        setLoadingStep((prev) => (prev < loadingSteps.length - 1 ? prev + 1 : prev));
      }, 900);
    } else {
      setLoadingStep(0);
    }
    return () => clearInterval(interval);
  }, [loading]);

  const handleSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch("/api/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: searchQuery,
          budget: budget,
          main_category: category === "All" ? undefined : category
        })
      });

      if (!response.ok) {
        throw new Error(`Server returned HTTP error ${response.status}`);
      }

      const data: RecommendationResponse = await response.json();
      setResult(data);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const selectPrompt = (promptQuery: string) => {
    setQuery(promptQuery);
    handleSearch(promptQuery);
  };

  return (
    <div className="space-y-8" id="discovery-demo-root">
      {/* Search Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              Dynamic Intent-Based Query
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Stylist Search Engine
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Describe your specific outfit goals, seasonal layers, or destination occasions naturally.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative flex items-center">
            <div className="absolute left-4 text-slate-400 pointer-events-none">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch(query)}
              placeholder="e.g., I'm heading on a sailing trip, need polarized sunglasses and breezy shirt..."
              className="w-full pl-12 pr-28 py-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all"
            />
            <button
              onClick={() => handleSearch(query)}
              disabled={loading || !query.trim()}
              className="absolute right-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 disabled:hover:bg-indigo-600 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all duration-300 shadow-md shadow-indigo-500/10 active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Match
            </button>
          </div>

          {/* Rapid Suggestions */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 flex items-center gap-1">
              <Compass className="w-3.5 h-3.5" /> Quick Stylist Prompts
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {samplePrompts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => selectPrompt(p.query)}
                  className="flex items-start gap-3 p-3 text-left border border-slate-100 dark:border-slate-800/80 rounded-xl hover:border-indigo-100 dark:hover:border-indigo-950/50 hover:bg-indigo-50/20 dark:hover:bg-indigo-950/10 group transition-all"
                >
                  <span className="text-xl bg-slate-50 dark:bg-slate-950 p-2 rounded-lg group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950/30 transition-colors">
                    {p.icon}
                  </span>
                  <div className="space-y-0.5 min-w-0">
                    <div className="text-xs font-semibold text-slate-700 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {p.label}
                    </div>
                    <div className="text-[11px] text-slate-400 dark:text-slate-500 truncate">
                      {p.query}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Filtering Controls */}
          <div className="border-t border-slate-100 dark:border-slate-800 pt-5 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Category selection */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Filter Category
              </span>
              <div className="flex flex-wrap gap-1.5">
                {["All", "Apparel & Accessories", "Shoes", "Bags & Leather Goods"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      category === cat
                        ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm"
                        : "bg-slate-50 dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800/50"
                    }`}
                  >
                    {cat === "All" ? "All Domains" : cat.split(" & ")[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Slider */}
            <div className="space-y-2 min-w-[200px]">
              <div className="flex justify-between items-center text-xs font-semibold text-slate-400 dark:text-slate-500">
                <span className="flex items-center gap-1">
                  <DollarSign className="w-3.5 h-3.5" /> Max Price Limit
                </span>
                <span className="text-indigo-600 dark:text-indigo-400 font-bold">${budget}</span>
              </div>
              <input
                type="range"
                min="30"
                max="200"
                step="10"
                value={budget}
                onChange={(e) => setBudget(parseInt(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer h-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>$30</span>
                <span>$100</span>
                <span>$200+</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-4 bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/40 rounded-2xl text-center">
          <p className="text-sm font-semibold text-rose-700 dark:text-rose-400">{error}</p>
        </div>
      )}

      {/* Reassuring Loading Panel */}
      {loading && (
        <div className="bg-slate-900 dark:bg-slate-950 border border-slate-800 text-white rounded-3xl p-8 shadow-xl max-w-2xl mx-auto space-y-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
              <Sparkles className="w-4 h-4 text-indigo-400 absolute top-3 left-3" />
            </div>
            <div>
              <h4 className="font-bold text-slate-100">Styling Your Custom Matches</h4>
              <p className="text-xs text-slate-400">Processing vectors in high-dimensional space...</p>
            </div>
          </div>

          {/* Stepper list */}
          <div className="space-y-3">
            {loadingSteps.map((step, idx) => {
              const isCurrent = loadingStep === idx;
              const isCompleted = loadingStep > idx;

              return (
                <div
                  key={idx}
                  className={`flex items-center gap-3 text-xs transition-opacity ${
                    isCurrent ? "text-indigo-400 font-medium" : isCompleted ? "text-slate-500" : "text-slate-600"
                  }`}
                >
                  <div className="w-5 h-5 flex items-center justify-center rounded-full border border-current">
                    {isCompleted ? <span className="text-[10px]">✓</span> : <span>{idx + 1}</span>}
                  </div>
                  <span>{step}</span>
                  {isCurrent && <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-ping"></span>}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Matching Results and Recommendation Panel */}
      {result && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Matches List: 5 Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                Product Matches ({result.recommendations.length})
              </h3>

              {/* Execution Mode Badge */}
              {result.execution_mode === "vector" ? (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold border border-emerald-100 dark:border-emerald-900/30">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  AI Vector Match
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 text-[10px] font-bold border border-amber-100 dark:border-amber-900/30">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>
                  Keyword Fallback
                </span>
              )}
            </div>

            <div className="space-y-3">
              {result.recommendations.map(({ product, score }) => {
                const isActive = activeProduct === product.parent_asin;

                return (
                  <div
                    key={product.parent_asin}
                    className={`bg-white dark:bg-slate-900 border rounded-2xl p-4 transition-all ${
                      isActive
                        ? "border-indigo-500 ring-1 ring-indigo-500/10 shadow-md"
                        : "border-slate-100 dark:border-slate-800/80 hover:border-slate-200 shadow-sm"
                    }`}
                  >
                    <div className="flex gap-4">
                      {/* Product Thumbnail */}
                      <img
                        src={product.images[0]?.thumb || "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=150"}
                        alt={product.title}
                        className="w-20 h-20 object-cover rounded-xl bg-slate-50"
                        referrerPolicy="no-referrer"
                      />

                      {/* Product Overview */}
                      <div className="flex-1 min-w-0 space-y-1">
                        <div className="flex justify-between items-start gap-2">
                          <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                            {product.store}
                          </span>
                          {/* Similarity Badge */}
                          {score > 0 && (
                            <span className="text-[10px] font-bold text-slate-400 bg-slate-50 dark:bg-slate-950 px-1.5 py-0.5 rounded border border-slate-150 dark:border-slate-800">
                              Score: {result.execution_mode === "vector" ? `${Math.round(score * 100)}%` : score.toFixed(2)}
                            </span>
                          )}
                        </div>

                        <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 line-clamp-2 leading-snug">
                          {product.title}
                        </h4>

                        <div className="flex items-center justify-between pt-1">
                          <span className="text-base font-black text-slate-900 dark:text-white">
                            ${product.price.toFixed(2)}
                          </span>

                          <div className="flex items-center gap-1 text-[11px] font-semibold text-amber-500">
                            <Star className="w-3.5 h-3.5 fill-current" />
                            <span>{product.average_rating}</span>
                            <span className="text-slate-400">({product.rating_number})</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Expander Trigger */}
                    <div className="mt-3 pt-3 border-t border-slate-50 dark:border-slate-800/60 flex justify-between items-center">
                      <div className="flex flex-wrap gap-1">
                        {product.categories.slice(0, 2).map((cat) => (
                          <span key={cat} className="text-[10px] text-slate-400 bg-slate-50 dark:bg-slate-950 px-2 py-0.5 rounded">
                            {cat}
                          </span>
                        ))}
                      </div>
                      <button
                        onClick={() => {
                          const nextActive = isActive ? null : product.parent_asin;
                          setActiveProduct(nextActive);
                          if (nextActive) {
                            fetchReviews(nextActive);
                          }
                        }}
                        className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline font-semibold flex items-center gap-1"
                      >
                        {isActive ? "Collapse specs" : "Expand details"}
                      </button>
                    </div>

                    {/* Extended Specs Panel */}
                    {isActive && (
                      <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4 text-xs animate-fade-in">
                        {/* Features */}
                        <div className="space-y-1.5">
                          <span className="font-bold text-slate-500 uppercase tracking-wider text-[10px]">Bullet Features:</span>
                          <ul className="space-y-1 list-disc pl-4 text-slate-600 dark:text-slate-400">
                            {product.features.map((feat, idx) => (
                              <li key={idx} className="leading-relaxed">{feat}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Description */}
                        <div className="space-y-1">
                          <span className="font-bold text-slate-500 uppercase tracking-wider text-[10px]">Full Description:</span>
                          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-justify">{product.description[0]}</p>
                        </div>

                        {/* Technical Details Grid */}
                        <div className="space-y-1.5">
                          <span className="font-bold text-slate-500 uppercase tracking-wider text-[10px]">{product.main_category === "All Beauty" ? "Product Specifications:" : "Garment Details:"}</span>
                          <div className="grid grid-cols-2 gap-2 bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                            {Object.entries(product.details).map(([k, v]) => (
                              <div key={k} className="space-y-0.5">
                                <span className="text-[10px] text-slate-400 font-semibold uppercase">{k}</span>
                                <p className="text-slate-700 dark:text-slate-200 font-medium truncate">{v}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Amazon Customer Reviews Section */}
                        <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-slate-500 uppercase tracking-wider text-[10px]">
                              Amazon Customer Reviews ({productReviews[product.parent_asin]?.length || 0})
                            </span>
                            <span className="text-[9px] font-mono text-slate-400">McAuley-Lab / Amazon-Reviews-2023</span>
                          </div>

                          {loadingReviews === product.parent_asin ? (
                            <div className="flex items-center gap-1.5 text-slate-400 py-1 font-mono text-[10px]">
                              <RefreshCw className="w-3 h-3 animate-spin text-indigo-500" /> Loading reviews...
                            </div>
                          ) : productReviews[product.parent_asin]?.length ? (
                            <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
                              {productReviews[product.parent_asin].map((rev, rIdx) => (
                                <div key={rIdx} className="bg-slate-50 dark:bg-slate-950/40 p-3 rounded-xl border border-slate-100 dark:border-slate-800 space-y-1.5 text-xs">
                                  <div className="flex justify-between items-start gap-2">
                                    <div className="flex items-center gap-1">
                                      <div className="flex text-amber-400">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                          <Star key={i} className={`w-3 h-3 ${i < Math.floor(rev.rating) ? "fill-current" : "opacity-20"}`} />
                                        ))}
                                      </div>
                                      <span className="font-bold text-slate-700 dark:text-slate-200 line-clamp-1">{rev.title}</span>
                                    </div>
                                    <span className="text-[10px] text-slate-400 font-mono">
                                      {new Date(rev.timestamp).toLocaleDateString()}
                                    </span>
                                  </div>
                                  <p className="text-slate-600 dark:text-slate-400 italic leading-relaxed text-justify text-[11px]">
                                    "{rev.text}"
                                  </p>
                                  <div className="flex flex-wrap items-center justify-between gap-2 text-[9px] text-slate-400">
                                    <div className="flex items-center gap-1.5 font-semibold">
                                      <span className="text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-1.5 py-0.2 rounded uppercase tracking-wider">
                                        Verified Purchase
                                      </span>
                                      <span className="font-mono text-slate-400">UID: {rev.user_id.slice(0, 8)}...</span>
                                    </div>
                                    {rev.helpful_vote > 0 && (
                                      <span className="font-medium bg-slate-100 dark:bg-slate-900 px-1.5 py-0.2 rounded">
                                        👍 {rev.helpful_vote} people found this helpful
                                      </span>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="text-slate-400 italic text-[10px] bg-slate-50 dark:bg-slate-950/20 p-3 rounded-xl text-center">
                              No customer reviews indexed for this item.
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stylist Concierge Report: 7 Column */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">
              Stylist Concierge Report
            </h3>

            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden space-y-6">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
              
              <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold shadow-md">
                  AI
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-800 dark:text-slate-100 leading-tight flex items-center gap-1.5">
                    Prodapt & Rakesh AI Concierge
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
                  </h4>
                  <p className="text-xs text-slate-400">Personal Stylist Agent • Powered by Gemini 3.5 Flash</p>
                </div>
              </div>

              {/* Dynamic Styled Markdown Advice */}
              <div className="prose prose-slate max-w-none">
                <MarkdownRenderer content={result.explanation} />
              </div>

              {/* Outfit Bundle Summary Box */}
              <div className="bg-indigo-50/40 dark:bg-indigo-950/10 border border-indigo-100/30 dark:border-indigo-900/20 rounded-2xl p-4 space-y-3">
                <h5 className="text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" /> Outfit Bundle Summary
                </h5>
                <div className="flex flex-wrap gap-2">
                  {result.recommendations.map(({ product }) => (
                    <div
                      key={product.parent_asin}
                      className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 px-3 py-1.5 rounded-xl flex items-center gap-2"
                    >
                      <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                      <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200">
                        {product.title.split(" - ")[0].split(" (")[0].slice(0, 32)}...
                      </span>
                      <span className="text-[10px] font-black text-slate-400">
                        ${product.price}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="pt-2 border-t border-indigo-100/20 dark:border-indigo-900/10 flex justify-between items-center text-xs text-slate-500 dark:text-slate-400">
                  <span>Total Bundle Value ({result.recommendations.length} Items):</span>
                  <span className="font-black text-slate-800 dark:text-white text-sm">
                    ${result.recommendations.reduce((acc, curr) => acc + curr.product.price, 0).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Default placeholder: When no search has been run */}
      {!result && !loading && (
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-12 text-center max-w-lg mx-auto space-y-4">
          <div className="w-16 h-16 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-2xl flex items-center justify-center mx-auto text-indigo-600 dark:text-indigo-400">
            <Compass className="w-8 h-8" />
          </div>
          <div className="space-y-1.5">
            <h3 className="font-bold text-slate-800 dark:text-slate-100">Begin Discovery</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              Type your style requirements or click on one of our recommended stylist prompts above to retrieve semantically matched outfits.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
export default DiscoveryDemo;
