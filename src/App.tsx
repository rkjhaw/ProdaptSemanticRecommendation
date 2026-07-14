import { useState, useEffect } from "react";
import { ActiveTab } from "./types.ts";
import DiscoveryDemo from "./components/DiscoveryDemo.tsx";
import ArchitectHub from "./components/ArchitectHub.tsx";
import ApiSandbox from "./components/ApiSandbox.tsx";
import RepoViewer from "./components/RepoViewer.tsx";
import AssignmentAsk from "./components/AssignmentAsk.tsx";
import { Sparkles, Cpu, Layers, GitCommit, HardDrive, Shield, AlertTriangle, CheckCircle, RefreshCw, Download, HelpCircle, Briefcase } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("demo");
  const [healthStatus, setHealthStatus] = useState<any>(null);
  const [checkingHealth, setCheckingHealth] = useState(false);

  const fetchHealth = async () => {
    setCheckingHealth(true);
    try {
      const res = await fetch("/api/health");
      const data = await res.json();
      setHealthStatus(data);
    } catch (err) {
      console.error("Failed to fetch backend health status:", err);
      setHealthStatus({ status: "error", error: "Could not establish connection with microservice." });
    } finally {
      setCheckingHealth(false);
    }
  };

  useEffect(() => {
    fetchHealth();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors antialiased">
      {/* Upper Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800/60 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Logo & Platform Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 dark:bg-indigo-500 rounded-xl flex items-center justify-center text-white font-extrabold shadow-lg shadow-indigo-500/20 relative overflow-hidden group">
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div>
              <h1 className="text-sm font-extrabold text-slate-900 dark:text-white uppercase tracking-wider leading-tight">
                Prodapt & Rakesh
              </h1>
              <p className="text-[10px] text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase">
                Semantic Fashion Engine
              </p>
            </div>
          </div>

          {/* Nav Tabs */}
          <nav className="flex items-center gap-1 bg-slate-100/80 dark:bg-slate-950 p-1 rounded-xl border border-slate-200/50 dark:border-slate-800/60">
            <button
              onClick={() => setActiveTab("demo")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                activeTab === "demo"
                  ? "bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Demo Search
            </button>
            <button
              onClick={() => setActiveTab("architect")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                activeTab === "architect"
                  ? "bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              Architect Hub
            </button>
            <button
              onClick={() => setActiveTab("sandbox")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                activeTab === "sandbox"
                  ? "bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              API Sandbox
            </button>
            <button
              onClick={() => setActiveTab("repo")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                activeTab === "repo"
                  ? "bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
              }`}
            >
              <HardDrive className="w-3.5 h-3.5" />
              Repo Files
            </button>
            <button
              onClick={() => setActiveTab("assignment")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                activeTab === "assignment"
                  ? "bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              Assignment Ask
            </button>
          </nav>

          {/* Microservice Health Indicators */}
          <div className="flex items-center gap-2">
            {healthStatus ? (
              healthStatus.status === "healthy" ? (
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20 px-2.5 py-1 rounded-lg border border-emerald-200/50 dark:border-emerald-900/30">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                  SERVICE: ACTIVE
                </div>
              ) : (
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/20 px-2.5 py-1 rounded-lg border border-rose-200/50 dark:border-rose-900/30">
                  <span className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-ping"></span>
                  SERVICE: OFFLINE
                </div>
              )
            ) : (
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 bg-slate-50 dark:bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-800/50">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-pulse"></span>
                API CONNECTING...
              </div>
            )}

            <button
              onClick={fetchHealth}
              disabled={checkingHealth}
              className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
              title="Refresh Health diagnostics"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${checkingHealth ? "animate-spin" : ""}`} />
            </button>
          </div>

        </div>
      </header>

      {/* Main Container */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Welcome Callout */}
        <div className="mb-8 bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>

          <div className="relative space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-bold tracking-wider uppercase backdrop-blur-sm">
              <Shield className="w-3.5 h-3.5 text-indigo-300" />
              Rakesh Jha • Candidate Solution Portfolio • Solutions Architect Round 3
            </div>
            
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-black tracking-tight leading-tight">
                Semantic discovery for fashion and dynamic styling
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-normal">
                This microservice prototype demonstrates how 768-D multi-dimensional word vectors (Gemini Embeddings) can capture descriptive shopper intent, and style them into cohesive outfit recommendations with Generative AI (Gemini 3.5 Flash).
              </p>
            </div>

            {/* AI Engine Notification Bar */}
            {healthStatus && healthStatus.status === "healthy" && (
              <div className="p-3 bg-white/5 border border-white/10 rounded-2xl flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  {healthStatus.ai_status.has_gemini_api_key ? (
                    <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                      <CheckCircle className="w-4 h-4 fill-current text-slate-900" />
                      <span>Gemini API: Live (Precise Embedding Search)</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                      <AlertTriangle className="w-4 h-4 fill-current text-slate-900" />
                      <span>Gemini API: Key Missing (Running in Keyword Fallback)</span>
                    </div>
                  )}
                </div>
                
                {/* Export deliverable button help */}
                <div className="flex items-center gap-2 text-slate-300 font-medium">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>ZIP Export: Settings Menu</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tab Selection Renderer */}
        <div className="space-y-6">
          {activeTab === "demo" && <DiscoveryDemo />}
          {activeTab === "architect" && <ArchitectHub />}
          {activeTab === "sandbox" && <ApiSandbox />}
          {activeTab === "repo" && <RepoViewer />}
          {activeTab === "assignment" && <AssignmentAsk />}
        </div>

      </main>

      {/* Platform Footer */}
      <footer className="px-8 py-5 bg-slate-900 text-slate-400 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono tracking-widest border-t border-slate-800 mt-auto">
        <div className="flex flex-wrap gap-6 justify-center md:justify-start">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse"></span>
            EXPRESS GATEWAY: ONLINE
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span>
            INDEXER: IN_MEMORY_COSINE_768D
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span>
            MODEL: TEXT_EMBEDDING_004
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center text-slate-500">
          <span className="uppercase">Rakesh.Jha.BLR@gmail.com</span>
          <span className="uppercase hidden md:inline">|</span>
          <span className="uppercase">SOLUTIONS ARCHITECT PORTFOLIO</span>
        </div>
      </footer>
    </div>
  );
}
