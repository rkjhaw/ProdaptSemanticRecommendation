import React from "react";
import { FileText, HelpCircle, Briefcase, ListChecks, Database, ArrowRight, ExternalLink, ShieldCheck, Cpu } from "lucide-react";

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

    </div>
  );
}
