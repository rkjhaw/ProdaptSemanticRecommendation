import React, { useState, useEffect } from "react";
import { ArchitectDoc } from "../types.ts";
import { BookOpen, Cpu, Layers, GitCommit, FileText, ArrowRight, Server, Shield, Sparkles, AlertTriangle, RefreshCw } from "lucide-react";

// Import images to allow Vite to resolve and bundle them correctly for production serving
import architectureDiagramUrl from "../assets/images/system_architecture_1784018897272.jpg";
import sequenceDiagramUrl from "../assets/images/sequence_lifecycle_diagram_1784056719722.jpg";

export const ArchitectHub: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<"architecture" | "sequence" | "tradeoffs" | "production">("architecture");
  const [docData, setDocData] = useState<ArchitectDoc | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoc = async () => {
      try {
        const response = await fetch("/api/docs/architect");
        const data = await response.json();
        setDocData(data);
      } catch (err) {
        console.error("Failed to load architectural data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDoc();
  }, []);

  return (
    <div className="space-y-8" id="architect-hub-root">
      {/* Sub-navigation Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 overflow-x-auto gap-2 pb-px scrollbar-none">
        <button
          onClick={() => setActiveSubTab("architecture")}
          className={`flex items-center gap-2 px-4 py-3 text-xs font-bold whitespace-nowrap border-b-2 transition-all duration-300 ${
            activeSubTab === "architecture"
              ? "border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400"
              : "border-transparent text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
          }`}
        >
          <Cpu className="w-4 h-4" /> System Architecture & Flow
        </button>
        <button
          onClick={() => setActiveSubTab("sequence")}
          className={`flex items-center gap-2 px-4 py-3 text-xs font-bold whitespace-nowrap border-b-2 transition-all duration-300 ${
            activeSubTab === "sequence"
              ? "border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400"
              : "border-transparent text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
          }`}
        >
          <GitCommit className="w-4 h-4" /> Sequence & Lifecycle
        </button>
        <button
          onClick={() => setActiveSubTab("tradeoffs")}
          className={`flex items-center gap-2 px-4 py-3 text-xs font-bold whitespace-nowrap border-b-2 transition-all duration-300 ${
            activeSubTab === "tradeoffs"
              ? "border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400"
              : "border-transparent text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
          }`}
        >
          <Layers className="w-4 h-4" /> Technical Design & Trade-offs
        </button>
        <button
          onClick={() => setActiveSubTab("production")}
          className={`flex items-center gap-2 px-4 py-3 text-xs font-bold whitespace-nowrap border-b-2 transition-all duration-300 ${
            activeSubTab === "production"
              ? "border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400"
              : "border-transparent text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
          }`}
        >
          <Server className="w-4 h-4" /> Production Scaling Roadmap
        </button>
      </div>

      {/* Tab Contents */}
      {activeSubTab === "architecture" && (
        <div className="space-y-8 animate-fade-in">
          {/* Executive Summary Card */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="md:col-span-4 space-y-4">
              <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">Executive Summary</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed text-justify">
                This microservice bridges the gap between structured databases and unstructured conversational queries, transforming how consumers navigate and combine items into styled wardrobe collections.
              </p>
            </div>
            
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t md:border-t-0 md:border-l border-slate-100 dark:border-slate-800 pt-6 md:pt-0 md:pl-8">
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">The Business Problem</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Traditional indexing matches spelling words (e.g. searching "shorts" only returns shorts). It cannot parse descriptive requirements (e.g. "I want to attend a summer resort dinner"). Customers leave when exact keywords are missing.
                </p>
              </div>
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">The Architectural Solution</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Using 768-D vector embeddings representing language models, descriptions and catalog features are mapped into a unified space. Cosine similarity indexes abstract concepts perfectly. Generative models then explain recommendations elegantly as unified styles.
                </p>
              </div>
            </div>
          </div>

          {/* High Resolution Architecture Diagram */}
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">High-Level System Architecture Diagram</h3>
              <p className="text-xs text-slate-400">Data pipelines representing query intake, vector searching, and generative personalized styling reporting.</p>
            </div>

            {/* Render generated jpg image */}
            <div className="border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center p-2 shadow-inner">
              <img
                src={architectureDiagramUrl}
                alt="System Architecture Diagram"
                className="w-full max-w-4xl object-contain h-auto rounded-xl border border-slate-800"
                onError={(e) => {
                  // Fallback if image doesn't display or is in wrong path
                  console.error("Diagram failed to load", e);
                }}
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-500 pt-4 border-t border-slate-50 dark:border-slate-800/50">
              <div className="space-y-1">
                <span className="font-bold text-slate-700 dark:text-slate-200">1. Client Request</span>
                <p className="leading-relaxed">React SPA issues query parameters to Express routing. The query is kept completely safe within a secure HTTPS network tunnel.</p>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-slate-700 dark:text-slate-200">2. High-Dimensional Indexing</span>
                <p className="leading-relaxed">The server generates vector embeddings on-the-fly and compares them against cached, pre-computed item indices via Cosine Similarity matrix math.</p>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-slate-700 dark:text-slate-200">3. Stylist Synthesizer</span>
                <p className="leading-relaxed">Top-ranked items are parsed by Gemini 3.5 Flash, which groups them into cohesive wardrobe sets, justifying fits and materials in markdown form.</p>
              </div>
            </div>
          </div>

          {/* Business KPIs box */}
          <div className="bg-indigo-50/20 dark:bg-indigo-950/10 border border-indigo-100/30 dark:border-indigo-900/20 rounded-3xl p-6 space-y-4">
            <h4 className="text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" /> Solutions Architect Brief: Core Value Metric Matrix
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
              <div className="bg-white dark:bg-slate-900 p-4 border border-slate-100 dark:border-slate-800 rounded-xl space-y-1.5">
                <span className="font-black text-slate-900 dark:text-white text-base">AOV Multiplication</span>
                <p className="text-slate-500 leading-relaxed">Suggesting coordinate item bundles (e.g. matching shirts, swim shorts, and sunglasses) leads to a estimated 18-24% increase in shopping bag sizing.</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-4 border border-slate-100 dark:border-slate-800 rounded-xl space-y-1.5">
                <span className="font-black text-slate-900 dark:text-white text-base">Search Dropoff Reductions</span>
                <p className="text-slate-500 leading-relaxed">Traditional keyword searches dump customers with '0 results'. Semantic matching maps descriptive adjectives into catalog features, lowering abandonment by up to 30%.</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-4 border border-slate-100 dark:border-slate-800 rounded-xl space-y-1.5">
                <span className="font-black text-slate-900 dark:text-white text-base">SaaS Customer Loyalty</span>
                <p className="text-slate-500 leading-relaxed">Providing high-touch personalized advice makes customers feel cared for and valued, elevating retention metrics and decreasing average customer acquisition costs (CAC).</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSubTab === "sequence" && (
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-8 animate-fade-in">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Product Recommendation Request Lifecycle</h3>
            <p className="text-xs text-slate-400">Step-by-step transaction flow detailing sequential call-chains and database lookups.</p>
          </div>

          {/* High Resolution Sequence Diagram Image */}
          <div className="border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center p-2 shadow-inner">
            <img
              src={sequenceDiagramUrl}
              alt="Sequence Lifecycle Diagram"
              className="w-full max-w-4xl object-contain h-auto rounded-xl border border-slate-800"
              onError={(e) => {
                console.error("Sequence diagram failed to load", e);
              }}
            />
          </div>

          <div className="relative border-l-2 border-indigo-150 dark:border-indigo-950 ml-4 pl-8 space-y-8">
            {/* Step 1 */}
            <div className="relative">
              <span className="absolute -left-12 top-0.5 w-8 h-8 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-900 flex items-center justify-center text-xs text-white font-bold">1</span>
              <div className="space-y-1.5">
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                  Client Dispatch Query
                  <span className="text-[10px] text-indigo-500 bg-indigo-50 dark:bg-indigo-950/30 px-2 py-0.5 rounded uppercase font-semibold">User Interface</span>
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed max-w-2xl">
                  User inputs a request into the browser. The React application packs the query along with filters (budget constraints and category domains) into an HTTP POST payload and dispatches it to `/api/recommend`.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <span className="absolute -left-12 top-0.5 w-8 h-8 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-900 flex items-center justify-center text-xs text-white font-bold">2</span>
              <div className="space-y-1.5">
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                  Intent Vectorization
                  <span className="text-[10px] text-cyan-500 bg-cyan-50 dark:bg-cyan-950/30 px-2 py-0.5 rounded uppercase font-semibold">Gemini Embedding API</span>
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed max-w-2xl">
                  Express API gateway receives request. It intercepts the user query and makes a server-to-server POST to Gemini's `gemini-embedding-2-preview` model. The model returns a 768-dimensional float array representing the abstract language vector of the search query.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <span className="absolute -left-12 top-0.5 w-8 h-8 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-900 flex items-center justify-center text-xs text-white font-bold">3</span>
              <div className="space-y-1.5">
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                  Cosine Similarity Matrix Search
                  <span className="text-[10px] text-amber-500 bg-amber-50 dark:bg-amber-950/30 px-2 py-0.5 rounded uppercase font-semibold">In-Memory Index</span>
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed max-w-2xl">
                  The microservice computes the Dot Product and Magnitudes of the query vector against all pre-cached, multi-dimensional product catalog embedding vectors in memory. Items are sorted based on their float cosine values. Hard limits (budget, category checks) are applied immediately to discard non-qualifying products.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <span className="absolute -left-12 top-0.5 w-8 h-8 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-900 flex items-center justify-center text-xs text-white font-bold">4</span>
              <div className="space-y-1.5">
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                  Stylist Recommendation Synthesis
                  <span className="text-[10px] text-violet-500 bg-violet-50 dark:bg-violet-950/30 px-2 py-0.5 rounded uppercase font-semibold">Gemini LLM Reasoning</span>
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed max-w-2xl">
                  The top 5 matched products are formatted into a highly structured JSON context block. The Express server initiates a generative call to `gemini-3.5-flash` using an optimized System Prompt instruct block. The LLM acts as an elite stylist, parsing features and writing personalized, markdown styling guides.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative">
              <span className="absolute -left-12 top-0.5 w-8 h-8 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-900 flex items-center justify-center text-xs text-white font-bold">5</span>
              <div className="space-y-1.5">
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                  Dispatch Payload to Client
                  <span className="text-[10px] text-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded uppercase font-semibold">JSON Output</span>
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed max-w-2xl">
                  The server formats the output array, scores, execution diagnostics, and styling markdown block, returning a clean HTTP 200 payload to the client. React captures the state, updates the UI nodes, and fires clean entrance animations for the buyer.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSubTab === "tradeoffs" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
          {/* Trade-off 1 */}
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-indigo-600 rounded-full"></span>
              In-Memory Store vs. Database Vector Extensions
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed text-justify">
              In small-to-medium datasets (under 10,000 SKUs), spin-up of managed vector instances (like Pinecone, Milvus, or AWS RDS PGVector) adds heavy networking hops, cold starts, and cost overlays. 
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2 text-xs">
              <div className="bg-emerald-50/30 dark:bg-emerald-950/10 border border-emerald-100/30 dark:border-emerald-900/10 p-3 rounded-xl space-y-1">
                <span className="font-bold text-emerald-700 dark:text-emerald-400">Pros of In-Memory:</span>
                <p className="text-slate-500 text-[11px] leading-relaxed">Fast matching (&lt;1ms), zero network hops, easy mock prototyping, completely self-contained in deployment containers.</p>
              </div>
              <div className="bg-rose-50/30 dark:bg-rose-950/10 border border-rose-100/30 dark:border-rose-900/10 p-3 rounded-xl space-y-1">
                <span className="font-bold text-rose-700 dark:text-rose-400">Cons & Limits:</span>
                <p className="text-slate-500 text-[11px] leading-relaxed">No data durability, memory consumption scales linearly with dataset sizing, requires re-indexing on container restarts.</p>
              </div>
            </div>
          </div>

          {/* Trade-off 2 */}
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-indigo-600 rounded-full"></span>
              Gemini API Embeddings vs. Local Sentence Transformers
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed text-justify">
              Python FastAPI stacks often rely on loading local ONNX models (e.g. `all-MiniLM-L6-v2`) to run embeddings locally. While it is free of API keys, it introduces heavy container burdens.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2 text-xs">
              <div className="bg-emerald-50/30 dark:bg-emerald-950/10 border border-emerald-100/30 dark:border-emerald-900/10 p-3 rounded-xl space-y-1">
                <span className="font-bold text-emerald-700 dark:text-emerald-400">Pros of API Embeddings:</span>
                <p className="text-slate-500 text-[11px] leading-relaxed">768 dimensions of language structure, zero container size inflation, fast bootups, offloads CPU weights to managed cloud.</p>
              </div>
              <div className="bg-rose-50/30 dark:bg-rose-950/10 border border-rose-100/30 dark:border-rose-900/10 p-3 rounded-xl space-y-1">
                <span className="font-bold text-rose-700 dark:text-rose-400">Cons & Limits:</span>
                <p className="text-slate-500 text-[11px] leading-relaxed">Requires external network calls, relies on network connectivity, subject to API rate quotas and secrets management.</p>
              </div>
            </div>
          </div>

          {/* Trade-off 3 */}
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4 md:col-span-2">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-indigo-600 rounded-full"></span>
              Client-Side Rendering (SPA) vs. Server-Side Rendering (SSR) for Microservices
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-slate-500">
              <div className="space-y-1">
                <span className="font-bold text-slate-800 dark:text-slate-200">Decisions</span>
                <p className="leading-relaxed">
                  We chose a full-stack SPA architecture where Vite serves a lightweight static frontend, and a secure Express gateway manages API tokens and interactions with the Gemini SDK. This decouples the shopper client from intensive model pipelines and prevents API key exposure to user browsers.
                </p>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-slate-800 dark:text-slate-200">Security Guardrails</span>
                <p className="leading-relaxed">
                  API Keys and secrets are strictly retained in the environment scope of the Express backend. The client has zero visbility over these variables. All interactions with Gemini are proxied through server-side controller paths to prevent direct browser execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSubTab === "production" && (
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-8 animate-fade-in">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Production Scaling Roadmap</h3>
            <p className="text-xs text-slate-400">Proposed transition guidelines to scale the microservice from prototype to millions of active products and queries.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phase 1 */}
            <div className="border border-slate-100 dark:border-slate-800 rounded-2xl p-5 space-y-4 relative overflow-hidden">
              <span className="absolute top-4 right-4 text-3xl font-black text-slate-100 dark:text-slate-950 select-none">P1</span>
              <div className="space-y-1">
                <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Phase 1 (Immediate)</div>
                <h4 className="font-bold text-slate-800 dark:text-slate-100">Relational Vectorization</h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed text-justify">
                Migrate our static dataset into a **PostgreSQL database with pgvector**. This maintains strict relational capabilities (inventories, prices, reviews) while index dimensions are calculated natively in SQL.
              </p>
              <div className="pt-2 border-t border-slate-50 dark:border-slate-800/50 space-y-1.5 text-[11px] text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                  <span>Store: PostgreSQL DB</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                  <span>Indexing: HNSW Vector Indexes</span>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="border border-slate-100 dark:border-slate-800 rounded-2xl p-5 space-y-4 relative overflow-hidden">
              <span className="absolute top-4 right-4 text-3xl font-black text-slate-100 dark:text-slate-950 select-none">P2</span>
              <div className="space-y-1">
                <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Phase 2 (Medium Term)</div>
                <h4 className="font-bold text-slate-800 dark:text-slate-100">Distributed Indexing</h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed text-justify">
                Transition to a managed, distributed vector store like **Pinecone or Elasticsearch** to host millions of item embeddings. Introduce **Redis Caching** on `/api/recommend` outputs to prevent duplicate prompt queries and save model fees.
              </p>
              <div className="pt-2 border-t border-slate-50 dark:border-slate-800/50 space-y-1.5 text-[11px] text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                  <span>Store: Pinecone Serverless</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                  <span>Caching: Redis TTL Caching</span>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="border border-slate-100 dark:border-slate-800 rounded-2xl p-5 space-y-4 relative overflow-hidden">
              <span className="absolute top-4 right-4 text-3xl font-black text-slate-100 dark:text-slate-950 select-none">P3</span>
              <div className="space-y-1">
                <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Phase 3 (Enterprise)</div>
                <h4 className="font-bold text-slate-800 dark:text-slate-100">Microservice Orchestration</h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed text-justify">
                Package the recommendation system as an independent, stateless microservice hosted on **Kubernetes (EKS/GKE)** or **Google Cloud Run**, autoscaling pods dynamically based on CPU bounds. Maintain asynchronous index synchronizations via **Apache Kafka** pipelines when inventory stock triggers updates.
              </p>
              <div className="pt-2 border-t border-slate-50 dark:border-slate-800/50 space-y-1.5 text-[11px] text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                  <span>Hosts: Kubernetes (K8s) Pods</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                  <span>Events: Kafka Message Stream</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ArchitectHub;
