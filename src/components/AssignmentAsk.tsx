import React from "react";
import { FileText, HelpCircle, Briefcase, ListChecks, Database, ArrowRight, ExternalLink, ShieldCheck, Cpu, Terminal, Layers } from "lucide-react";
import DocumentationGuide from "./DocumentationGuide.tsx";

// Import diagrams so Vite resolves and bundles them correctly
import architectureDiagramUrl from "../assets/images/system_architecture_1784018897272.jpg";
import sequenceDiagramUrl from "../assets/images/sequence_lifecycle_diagram_1784056719722.jpg";

export default function AssignmentAsk() {
  const dataFields = [
    { name: "main_category", type: "str", desc: "Main category (i.e., domain) of the product." },
    { name: "title", type: "str", desc: "Name of the product." },
    { name: "average_rating", type: "float", desc: "Rating of the product shown on the product page." },
    { name: "rating_number", type: "int", desc: "Number of ratings in the product." },
    { name: "features", type: "list", desc: "Bullet-point format features of the product." },
    { name: "description", type: "list", desc: "Description of the product." },
    { name: "price", type: "float", desc: "Price in US dollars (at time of crawling)." },
    { name: "images", type: "list", desc: "Images of the product. Each image has different sizes (thumb, large, hi_res). The 'variant' field shows the position of the image." },
    { name: "videos", type: "list", desc: "Videos of the product including title and url." },
    { name: "store", type: "str", desc: "Store name of the product." },
    { name: "categories", type: "list", desc: "Hierarchical categories of the product." },
    { name: "details", type: "dict", desc: "Product details, including materials, brand, sizes, etc." },
    { name: "parent_asin", type: "str", desc: "Parent ID of the product." },
    { name: "bought_together", type: "list", desc: "Recommended bundles from the websites." }
  ];

  return (
    <div className="space-y-8 animate-fadeIn" id="assignment-ask-root">
      
      {/* Tab Header Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/60 dark:border-slate-800/60 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/5 rounded-full blur-2xl -mr-12 -mt-12"></div>
        <div className="relative flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold tracking-wider uppercase border border-indigo-100 dark:border-indigo-900/30">
              <Briefcase className="w-3.5 h-3.5" />
              Forward Deployed Engineering
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Take Home Project: Semantic Recommendation Microservice
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-2xl">
              Official interview brief, data architecture definitions, and production deliverables required for Round 3 Solution evaluation.
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <a 
              href="https://huggingface.co/datasets/McAuley-Lab/Amazon-Reviews-2023" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 px-4 py-2 bg-indigo-50 hover:bg-indigo-100 dark:bg-slate-800 dark:hover:bg-slate-700/80 text-indigo-600 dark:text-indigo-400 rounded-xl text-xs font-semibold transition-all border border-indigo-100/40 dark:border-slate-700"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Huggingface Dataset
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left column (2 cols wide): Main prompt and requirements */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Overview */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/50 dark:border-slate-800/60 p-6 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="p-1.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-lg text-indigo-600 dark:text-indigo-400">
                <FileText className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm tracking-wide">
                Project Overview
              </h4>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
              You will prototype a new semantic recommendation feature for an e-commerce website’s
              fashion product line. Traditionally, users have relied on keyword-based search (e.g., “t-shirt”
              or “shorts”), but the goal is to enable human-like queries (e.g., “I need an outfit to go to the
              beach this summer”).
            </p>
            <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 space-y-2.5">
              <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Your job is to build a simple microservice that:</span>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 font-medium">
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-950 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-[10px] shrink-0 mt-0.5">1</span>
                  <span><strong>Parses a user’s natural-language query</strong> using Google Gemini LLMs to isolate design parameters, visual trends, and stylistic contexts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-950 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-[10px] shrink-0 mt-0.5">2</span>
                  <span><strong>Finds relevant products</strong> from a provided dataset using semantic search vector spaces (Cosine Similarity over 768-D multi-dimensional word vectors) and LLMs.</span>
                </li>
              </ul>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed italic">
              "You will expose this functionality through a function, command-line tool, or API endpoint. If
              you’d like, you may also create a minimal front-end to demonstrate how an end user might
              interact with your service."
            </p>
          </div>

          {/* Requirements & Deliverables */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/50 dark:border-slate-800/60 p-6 space-y-5 shadow-sm">
            <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="p-1.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-lg text-indigo-600 dark:text-indigo-400">
                <ListChecks className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm tracking-wide">
                Requirements & Deliverables
              </h4>
            </div>

            <div className="space-y-4">
              
              {/* Deliverable 1 */}
              <div className="flex gap-3">
                <div className="w-1.5 h-12 bg-indigo-500 rounded-full shrink-0"></div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">1. Architecture Diagram</span>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Include a high-level view of your system in JPEG or PDF. Show how data is processed from the provided dataset through to the user’s query response.
                  </p>
                  <span className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-1.5 py-0.5 rounded uppercase font-mono mt-1">
                    ✓ Provided in Architect Hub Tab
                  </span>
                </div>
              </div>

              {/* Deliverable 2 */}
              <div className="flex gap-3">
                <div className="w-1.5 h-12 bg-indigo-500 rounded-full shrink-0"></div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">2. Full Executable Code (Microservice)</span>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Focus on clarity and modularity. Provide a README explaining project setup (how to install or run), sample usage (e.g., a test query and the resulting recommendations), and key design decisions and trade-offs.
                  </p>
                  <span className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-1.5 py-0.5 rounded uppercase font-mono mt-1">
                    ✓ Fully Interactive App & In-Memory Indexer Active
                  </span>
                </div>
              </div>

              {/* Deliverable 3 */}
              <div className="flex gap-3">
                <div className="w-1.5 h-12 bg-indigo-500 rounded-full shrink-0"></div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">3. (Optional) Additional Exploration</span>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Any notebooks or scripts you used to explore the data, experiment with embeddings or LLM prompts, etc. Additional documentation clarifying your approach or next steps.
                  </p>
                  <span className="inline-flex items-center gap-1 text-[9px] font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/30 px-1.5 py-0.5 rounded uppercase font-mono mt-1">
                    ✓ Implemented Sandbox & Source Code Reviewer
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Right column (1 col wide): Dataset and fields */}
        <div className="space-y-8">
          
          {/* Dataset source info */}
          <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-2xl p-6 space-y-4 shadow-md relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:16px_16px]"></div>
            <div className="relative space-y-3">
              <div className="flex items-center gap-2 text-indigo-300">
                <Database className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-wider font-mono">Dataset Specifications</span>
              </div>
              <div className="space-y-1">
                <h5 className="font-extrabold text-sm tracking-wide">McAuley-Lab Amazon Reviews 2023</h5>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Real e-commerce dataset containing customer feedback metadata and fine-grained styling attributes.
                </p>
              </div>
              <div className="space-y-2 pt-2 text-[10px] font-mono text-slate-400 border-t border-white/10">
                <div className="flex justify-between">
                  <span>Domain Category:</span>
                  <span className="text-white font-semibold">raw_meta_All_Beauty</span>
                </div>
                <div className="flex justify-between">
                  <span>Reviews Volume:</span>
                  <span className="text-white font-semibold">raw_review_All_Beauty</span>
                </div>
              </div>
              <div className="pt-2">
                <a 
                  href="https://huggingface.co/datasets/McAuley-Lab/Amazon-Reviews-2023" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-1 px-3 py-1.5 bg-white/10 hover:bg-white/15 text-white rounded-lg text-[10px] font-bold tracking-wider uppercase transition-colors"
                >
                  Dataset Homepage <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick links summary */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/50 dark:border-slate-800/60 p-5 space-y-3 shadow-sm">
            <span className="font-bold text-slate-500 uppercase tracking-wider text-[10px] block">
              Core Technical Features Built:
            </span>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span className="text-slate-600 dark:text-slate-300 font-semibold">Cosine Vector Indexer</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800">
                <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
                <span className="text-slate-600 dark:text-slate-300 font-semibold">Gemini 3.5 Flash Planner</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800">
                <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                <span className="text-slate-600 dark:text-slate-300 font-semibold">Interactive Sandbox Environment</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Dataset Field Mapping / Metadata Schema */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 p-6 space-y-4 shadow-sm">
        <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="p-1.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-lg text-indigo-600 dark:text-indigo-400">
            <Database className="w-4 h-4" />
          </div>
          <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm tracking-wide">
            Item Metadata Schema Dictionary (Huggingface Fields)
          </h4>
        </div>
        
        <div className="overflow-x-auto rounded-xl border border-slate-150 dark:border-slate-800/80">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-950 text-slate-400 font-mono text-[10px] tracking-wider uppercase border-b border-slate-150 dark:border-slate-800">
                <th className="p-3.5 font-bold">Field</th>
                <th className="p-3.5 font-bold">Type</th>
                <th className="p-3.5 font-bold">Explanation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {dataFields.map((field) => (
                <tr key={field.name} className="hover:bg-slate-50/50 dark:hover:bg-slate-950/20 transition-colors">
                  <td className="p-3.5 font-mono text-indigo-600 dark:text-indigo-400 font-bold">{field.name}</td>
                  <td className="p-3.5"><span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-[10px] text-slate-500 dark:text-slate-400 font-bold">{field.type}</span></td>
                  <td className="p-3.5 text-slate-600 dark:text-slate-400 leading-relaxed text-justify">{field.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* NEW SECTION: Programmatic Documentation Guide */}
      <DocumentationGuide />

      {/* NEW SECTION: Technical Architecture Diagrams */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 p-6 space-y-6 shadow-sm">
        <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="p-1.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-lg text-indigo-600 dark:text-indigo-400">
            <Layers className="w-4 h-4" />
          </div>
          <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm tracking-wide">
            Enterprise & Solution Architecture Diagrams
          </h4>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Architecture Card */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono font-bold text-indigo-500 uppercase tracking-widest block">System Visualization 1</span>
            <h5 className="font-bold text-slate-950 dark:text-white text-xs">High-Level System Architecture Diagram</h5>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Details the full data ingestion and recommendation pipeline: how static Huggingface JSON metadata is parsed, formatted into dense text tokens, embedded into 768-D vectors, and indexed in-memory for lightning-fast Cosine similarity matching during client interaction.
            </p>
            <div className="border border-slate-150 dark:border-slate-800 rounded-xl overflow-hidden bg-slate-950 p-1 shadow-inner">
              <svg viewBox="0 0 800 500" className="w-full h-auto bg-slate-950 font-mono select-none">
                <defs>
                  <linearGradient id="grad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4f46e5" />
                    <stop offset="100%" stopColor="#312e81" />
                  </linearGradient>
                  <linearGradient id="grad-emerald" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#059669" />
                    <stop offset="100%" stopColor="#064e3b" />
                  </linearGradient>
                  <linearGradient id="grad-purple" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#4c1d95" />
                  </linearGradient>
                  <linearGradient id="grad-zinc" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4b5563" />
                    <stop offset="100%" stopColor="#1f2937" />
                  </linearGradient>
                  <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#818cf8" />
                  </marker>
                  <marker id="arrow-emerald" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#34d399" />
                  </marker>
                </defs>

                {/* Grid Pattern Background */}
                <rect width="100%" height="100%" fill="#030712" />
                <g opacity="0.08">
                  <path d="M 0,50 L 800,50 M 0,100 L 800,100 M 0,150 L 800,150 M 0,200 L 800,200 M 0,250 L 800,250 M 0,300 L 800,300 M 0,350 L 800,350 M 0,400 L 800,400 M 0,450 L 800,450" stroke="#fff" strokeWidth="1" />
                  <path d="M 50,0 L 50,500 M 100,0 L 100,500 M 150,0 L 150,500 M 200,0 L 200,500 M 250,0 L 250,500 M 300,0 L 300,500 M 350,0 L 350,500 M 400,0 L 400,500 M 450,0 L 450,500 M 500,0 L 500,500 M 550,0 L 550,500 M 600,0 L 600,500 M 650,0 L 650,500 M 700,0 L 700,500 M 750,0 L 750,500" stroke="#fff" strokeWidth="1" />
                </g>

                {/* Title */}
                <text x="30" y="40" fill="#f8fafc" fontSize="12" fontWeight="800" letterSpacing="1">HIGH-LEVEL SYSTEM ARCHITECTURE</text>
                <text x="30" y="58" fill="#64748b" fontSize="9" fontWeight="bold">SEMANTIC RECOMMENDATION PIPELINE FLOW</text>

                {/* PHASE A */}
                <text x="30" y="105" fill="#818cf8" fontSize="9" fontWeight="bold" letterSpacing="1">PHASE A: METADATA VECTOR INDEXING (BATCH)</text>
                <rect x="30" y="115" width="740" height="1.5" fill="#312e81" />

                {/* Step A1 */}
                <rect x="30" y="130" width="140" height="60" rx="8" fill="url(#grad-zinc)" stroke="#374151" strokeWidth="1.5" />
                <text x="42" y="152" fill="#f3f4f6" fontSize="11" fontWeight="bold">Amazon Dataset</text>
                <text x="42" y="167" fill="#9ca3af" fontSize="9">Beauty / Fashion JSON</text>
                <text x="42" y="178" fill="#6b7280" fontSize="8">McAuley-Lab 2023</text>

                <path d="M 170,160 L 210,160" stroke="#818cf8" strokeWidth="2" markerEnd="url(#arrow)" />

                {/* Step A2 */}
                <rect x="220" y="130" width="140" height="60" rx="8" fill="url(#grad-blue)" stroke="#4f46e5" strokeWidth="1.5" />
                <text x="232" y="152" fill="#f3f4f6" fontSize="11" fontWeight="bold">Ingestion Parser</text>
                <text x="232" y="167" fill="#c7d2fe" fontSize="9">Clean & Chunk Title</text>
                <text x="232" y="178" fill="#a5b4fc" fontSize="8">Bullet Features / Desc</text>

                <path d="M 360,160 L 400,160" stroke="#818cf8" strokeWidth="2" markerEnd="url(#arrow)" />

                {/* Step A3 */}
                <rect x="410" y="130" width="140" height="60" rx="8" fill="url(#grad-blue)" stroke="#4f46e5" strokeWidth="1.5" />
                <text x="422" y="152" fill="#f3f4f6" fontSize="11" fontWeight="bold">Gemini API</text>
                <text x="422" y="167" fill="#c7d2fe" fontSize="9">text-embedding-004</text>
                <text x="422" y="178" fill="#a5b4fc" fontSize="8">768-D Vector Generation</text>

                <path d="M 550,160 L 590,160" stroke="#818cf8" strokeWidth="2" markerEnd="url(#arrow)" />

                {/* Step A4 */}
                <rect x="600" y="130" width="170" height="60" rx="8" fill="url(#grad-emerald)" stroke="#059669" strokeWidth="1.5" />
                <text x="612" y="152" fill="#f3f4f6" fontSize="11" fontWeight="bold">In-Memory Index</text>
                <text x="612" y="167" fill="#a7f3d0" fontSize="9">Cosine Similarity Store</text>
                <text x="612" y="178" fill="#34d399" fontSize="8">Pre-computed Embedding Maps</text>

                {/* PHASE B */}
                <text x="30" y="245" fill="#34d399" fontSize="9" fontWeight="bold" letterSpacing="1">PHASE B: REAL-TIME SEARCH & RECOMMENDATION LIFE</text>
                <rect x="30" y="255" width="740" height="1.5" fill="#064e3b" />

                {/* Step B1 */}
                <rect x="30" y="270" width="140" height="60" rx="8" fill="url(#grad-zinc)" stroke="#374151" strokeWidth="1.5" />
                <text x="42" y="292" fill="#f3f4f6" fontSize="11" fontWeight="bold">User Query Input</text>
                <text x="42" y="307" fill="#9ca3af" fontSize="9">"beach summer outfit"</text>
                <text x="42" y="318" fill="#6b7280" fontSize="8">Stylistic Description</text>

                <path d="M 170,300 L 210,300" stroke="#34d399" strokeWidth="2" markerEnd="url(#arrow-emerald)" />

                {/* Step B2 */}
                <rect x="220" y="270" width="140" height="60" rx="8" fill="url(#grad-emerald)" stroke="#059669" strokeWidth="1.5" />
                <text x="232" y="292" fill="#f3f4f6" fontSize="11" fontWeight="bold">Vector Converter</text>
                <text x="232" y="307" fill="#a7f3d0" fontSize="9">API query vectorizer</text>
                <text x="232" y="318" fill="#34d399" fontSize="8">Dynamic 768D Vector</text>

                {/* Connect B2 up to A4 Index */}
                <path d="M 290,270 L 290,220 L 685,220 L 685,190" fill="none" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#arrow)" />
                <text x="310" y="214" fill="#818cf8" fontSize="8">Lookup dynamic vector against indexing matrices</text>

                <path d="M 360,300 L 400,300" stroke="#34d399" strokeWidth="2" markerEnd="url(#arrow-emerald)" />

                {/* Step B3 */}
                <rect x="410" y="270" width="140" height="60" rx="8" fill="url(#grad-emerald)" stroke="#059669" strokeWidth="1.5" />
                <text x="422" y="292" fill="#f3f4f6" fontSize="11" fontWeight="bold">Cosine Similarity</text>
                <text x="422" y="307" fill="#a7f3d0" fontSize="9">Matrix scoring</text>
                <text x="422" y="318" fill="#34d399" fontSize="8">Top N nearest matches</text>

                <path d="M 550,300 L 590,300" stroke="#34d399" strokeWidth="2" markerEnd="url(#arrow-emerald)" />

                {/* Step B4 */}
                <rect x="600" y="270" width="170" height="60" rx="8" fill="url(#grad-purple)" stroke="#7c3aed" strokeWidth="1.5" />
                <text x="612" y="292" fill="#f3f4f6" fontSize="11" fontWeight="bold">Gemini 3.5 Flash</text>
                <text x="612" y="307" fill="#ddd6fe" fontSize="9">Style Personalization</text>
                <text x="612" y="318" fill="#a78bfa" fontSize="8">Narrative & outfit bundles</text>

                {/* Outbound Arrow to Client */}
                <path d="M 685,330 L 685,380 L 100,380 L 100,330" fill="none" stroke="#a78bfa" strokeWidth="1.5" markerEnd="url(#arrow)" />
                <text x="120" y="374" fill="#a78bfa" fontSize="8">Deliver interactive customized outfits & explanation</text>

                {/* Outer borders and legends */}
                <rect x="30" y="415" width="740" height="60" rx="10" fill="#0b0f19" stroke="#1f2937" strokeWidth="1" />
                <circle cx="50" cy="445" r="5" fill="#818cf8" />
                <text x="62" y="448" fill="#9ca3af" fontSize="9">Embedding flow (Batch & Online)</text>

                <circle cx="280" cy="445" r="5" fill="#34d399" />
                <text x="292" y="448" fill="#9ca3af" fontSize="9">Similarity retrieval flow (Microservice local)</text>

                <circle cx="560" cy="445" r="5" fill="#a78bfa" />
                <text x="572" y="448" fill="#9ca3af" fontSize="9">Generative Stylist Synthesis (Gemini LLM)</text>
              </svg>
            </div>
          </div>

          {/* Sequence Card */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono font-bold text-indigo-500 uppercase tracking-widest block">System Visualization 2</span>
            <h5 className="font-bold text-slate-950 dark:text-white text-xs">Product Recommendation Request Lifecycle</h5>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Showcases the client-server interaction lifecycle. Highlights the gateway query translation, embedding API fetch, vector space ranking, and ultimate stylistic output generation by the Gemini 3.5 Flash Stylist model.
            </p>
            <div className="border border-slate-150 dark:border-slate-800 rounded-xl overflow-hidden bg-slate-950 p-1 shadow-inner">
              <svg viewBox="0 0 800 500" className="w-full h-auto bg-slate-950 font-mono select-none">
                <defs>
                  <marker id="seq-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#818cf8" />
                  </marker>
                  <marker id="seq-arrow-dashed" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#64748b" />
                  </marker>
                </defs>

                {/* Background */}
                <rect width="100%" height="100%" fill="#030712" />

                {/* Grid Pattern */}
                <g opacity="0.04">
                  <path d="M 0,50 L 800,50 M 0,100 L 800,100 M 0,150 L 800,150 M 0,200 L 800,200 M 0,250 L 800,250 M 0,300 L 800,300 M 0,350 L 800,350 M 0,400 L 800,400 M 0,450 L 800,450" stroke="#fff" strokeWidth="1" />
                  <path d="M 50,0 L 50,500 M 100,0 L 100,500 M 150,0 L 150,500 M 200,0 L 200,500 M 250,0 L 250,500 M 300,0 L 300,500 M 350,0 L 350,500 M 400,0 L 400,500 M 450,0 L 450,500 M 500,0 L 500,500 M 550,0 L 550,500 M 600,0 L 600,500 M 650,0 L 650,500 M 700,0 L 700,500 M 750,0 L 750,500" stroke="#fff" strokeWidth="1" />
                </g>

                {/* Title */}
                <text x="30" y="40" fill="#f8fafc" fontSize="12" fontWeight="800" letterSpacing="1">PRODUCT RECOMMENDATION REQUEST LIFECYCLE</text>
                <text x="30" y="58" fill="#64748b" fontSize="9" fontWeight="bold">SEQUENTIAL END-TO-END CALL FLOWS</text>

                {/* Lifelines */}
                {/* 1. Client UI */}
                <line x1="100" y1="110" x2="100" y2="440" stroke="#1f2937" strokeWidth="2" strokeDasharray="4 4" />
                <rect x="50" y="80" width="100" height="30" rx="5" fill="#1e1b4b" stroke="#4f46e5" strokeWidth="1" />
                <text x="100" y="99" fill="#f3f4f6" fontSize="10" fontWeight="bold" textAnchor="middle">Client UI</text>

                {/* 2. Express Gateway */}
                <line x1="260" y1="110" x2="260" y2="440" stroke="#1f2937" strokeWidth="2" strokeDasharray="4 4" />
                <rect x="200" y="80" width="120" height="30" rx="5" fill="#022c22" stroke="#059669" strokeWidth="1" />
                <text x="260" y="99" fill="#f3f4f6" fontSize="10" fontWeight="bold" textAnchor="middle">Express Gateway</text>

                {/* 3. Gemini Embeddings API */}
                <line x1="440" y1="110" x2="440" y2="440" stroke="#1f2937" strokeWidth="2" strokeDasharray="4 4" />
                <rect x="370" y="80" width="140" height="30" rx="5" fill="#1e1b4b" stroke="#4f46e5" strokeWidth="1" />
                <text x="440" y="99" fill="#f3f4f6" fontSize="10" fontWeight="bold" textAnchor="middle">Embeddings API</text>

                {/* 4. In-Memory Cosine Index */}
                <line x1="610" y1="110" x2="610" y2="440" stroke="#1f2937" strokeWidth="2" strokeDasharray="4 4" />
                <rect x="540" y="80" width="140" height="30" rx="5" fill="#022c22" stroke="#059669" strokeWidth="1" />
                <text x="610" y="99" fill="#f3f4f6" fontSize="10" fontWeight="bold" textAnchor="middle">Cosine Index</text>

                {/* 5. Gemini 3.5 Stylist */}
                <line x1="740" y1="110" x2="740" y2="440" stroke="#1f2937" strokeWidth="2" strokeDasharray="4 4" />
                <rect x="680" y="80" width="110" height="30" rx="5" fill="#3b0764" stroke="#7c3aed" strokeWidth="1" />
                <text x="735" y="99" fill="#f3f4f6" fontSize="10" fontWeight="bold" textAnchor="middle">3.5 Stylist</text>

                {/* Flow Steps */}
                
                {/* Step 1 */}
                <path d="M 100,140 L 260,140" stroke="#818cf8" strokeWidth="1.5" markerEnd="url(#seq-arrow)" />
                <text x="180" y="133" fill="#94a3b8" fontSize="8" textAnchor="middle">1. POST /api/recommend</text>

                {/* Step 2 */}
                <path d="M 260,170 L 440,170" stroke="#818cf8" strokeWidth="1.5" markerEnd="url(#seq-arrow)" />
                <text x="350" y="163" fill="#94a3b8" fontSize="8" textAnchor="middle">2. Fetch query vector</text>

                {/* Step 3 */}
                <path d="M 440,200 L 260,200" stroke="#64748b" strokeWidth="1.2" strokeDasharray="3 3" markerEnd="url(#seq-arrow-dashed)" />
                <text x="350" y="193" fill="#64748b" fontSize="8" textAnchor="middle">3. 768-D array returned</text>

                {/* Step 4 */}
                <path d="M 260,240 L 610,240" stroke="#34d399" strokeWidth="1.5" markerEnd="url(#seq-arrow)" />
                <text x="435" y="233" fill="#34d399" fontSize="8" textAnchor="middle">4. Compare similarity vectors (Dot/Cosine)</text>

                {/* Step 5 */}
                <path d="M 610,280 L 260,280" stroke="#64748b" strokeWidth="1.2" strokeDasharray="3 3" markerEnd="url(#seq-arrow-dashed)" />
                <text x="435" y="273" fill="#64748b" fontSize="8" textAnchor="middle">5. Top 5 Ranked products returned</text>

                {/* Step 6 */}
                <path d="M 260,320 L 740,320" stroke="#a78bfa" strokeWidth="1.5" markerEnd="url(#seq-arrow)" />
                <text x="500" y="313" fill="#a78bfa" fontSize="8" textAnchor="middle">6. Synthesize narrative suggestions (Context + Items)</text>

                {/* Step 7 */}
                <path d="M 740,360 L 260,360" stroke="#64748b" strokeWidth="1.2" strokeDasharray="3 3" markerEnd="url(#seq-arrow-dashed)" />
                <text x="500" y="353" fill="#64748b" fontSize="8" textAnchor="middle">7. Stylized outfit response object</text>

                {/* Step 8 */}
                <path d="M 260,400 L 100,400" stroke="#818cf8" strokeWidth="1.5" markerEnd="url(#seq-arrow)" />
                <text x="180" y="393" fill="#94a3b8" fontSize="8" textAnchor="middle">8. Interactive cards & explanation display</text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* NEW SECTION: Full Executable Code Setup & README Explanation */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 p-6 space-y-6 shadow-sm">
        <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="p-1.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-lg text-indigo-600 dark:text-indigo-400">
            <Terminal className="w-4 h-4" />
          </div>
          <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm tracking-wide">
            Portfolio Project Specifications (README Guide)
          </h4>
        </div>

        <div className="space-y-6 text-xs text-slate-600 dark:text-slate-300">
          {/* Section 1: Setup */}
          <div className="space-y-3">
            <h5 className="text-slate-900 dark:text-white font-bold text-sm flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
              1. Project Setup & Quickstart (How to Run)
            </h5>
            <p className="leading-relaxed">
              The prototype is a unified full-stack application leveraging <strong>Vite + React</strong> on the client-side, and an <strong>Express API Gateway Server</strong> on the backend. This architecture guarantees that heavy mathematical vector operations and sensitive Gemini API credentials remain secure.
            </p>
            <div className="bg-slate-950 text-slate-100 p-4 rounded-xl font-mono text-[11px] leading-relaxed border border-slate-800 space-y-2">
              <div><span className="text-slate-500"># 1. Clone or download the repository, then navigate to root</span></div>
              <div>cd semantic-recommendation-microservice</div>
              <div className="pt-2"><span className="text-slate-500"># 2. Install required packages</span></div>
              <div>npm install</div>
              <div className="pt-2"><span className="text-slate-500"># 3. Create a .env file and input your API key</span></div>
              <div>echo "GEMINI_API_KEY=your_gemini_api_key_here" &gt; .env</div>
              <div className="pt-2"><span className="text-slate-500"># 4. Start the hybrid Express + Vite server (Port 3000)</span></div>
              <div>npm run dev</div>
            </div>
          </div>

          {/* Section 2: Sample Usage */}
          <div className="space-y-3 pt-2">
            <h5 className="text-slate-900 dark:text-white font-bold text-sm flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
              2. Sample Usage & Query Evaluation
            </h5>
            <p className="leading-relaxed">
              When a request is posted to our API, the server executes a series of pipeline operations:
            </p>
            <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-150 dark:border-slate-800/80 space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <span className="text-[10px] uppercase font-mono font-bold text-indigo-500">Natural-Language Query</span>
                  <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 rounded-lg italic">
                    "I want to go for a summer party at the beach, suggest some light clothes with a matching casual pair of shoes."
                  </div>
                </div>
                <div className="space-y-1.5">
                  <span className="text-[10px] uppercase font-mono font-bold text-emerald-500 font-bold">Semantic Engine Output</span>
                  <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 rounded-lg">
                    <ul className="space-y-1 text-[11px] list-disc list-inside text-slate-500 dark:text-slate-400">
                      <li>Matching products ranked via Cosine Similarity</li>
                      <li>Light breathable shorts & designer swimwear retrieved</li>
                      <li>Aurelio footwear casual matching sneakers matched</li>
                      <li>AI-Generated styling advice matching party trends</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Design Decisions */}
          <div className="space-y-3 pt-2">
            <h5 className="text-slate-900 dark:text-white font-bold text-sm flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
              3. Key Design Decisions & Trade-offs
            </h5>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-150 dark:border-slate-800 space-y-2">
                <span className="text-xs font-bold text-slate-800 dark:text-white block">In-Memory Indexer</span>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                  <strong>Choice:</strong> Implemented static 768-D array mapping with dynamic dot product evaluation on startup.<br/>
                  <strong>Trade-off:</strong> Negates the requirement of provisioning full external Vector databases (like Pinecone) for lightweight microservices, but memory scales linearly with dataset row density.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-150 dark:border-slate-800 space-y-2">
                <span className="text-xs font-bold text-slate-800 dark:text-white block">Gemini 3.5 Flash Planner</span>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                  <strong>Choice:</strong> Utilized Gemini 3.5 Flash with custom system parameters over heavier models.<br/>
                  <strong>Trade-off:</strong> Dramatically reduces API latency and cost profiles while maintaining high stylistic accuracy and structured JSON schema output parsing.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-150 dark:border-slate-800 space-y-2">
                <span className="text-xs font-bold text-slate-800 dark:text-white block">Hybrid Semantic / Keyword Fallback</span>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                  <strong>Choice:</strong> Built a silent local lexical matcher that auto-activates if API limits or keys fail.<br/>
                  <strong>Trade-off:</strong> Ensures bulletproof operational resiliency and offline preview capabilities, sacrificing semantic context depth during failover modes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
