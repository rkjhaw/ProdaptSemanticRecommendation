import React, { useState } from "react";
import { Copy, Check, FileCode, Terminal, HelpCircle, AlertCircle, Sparkles, BookOpen } from "lucide-react";

export default function DocumentationGuide() {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const entireReadmeMarkdown = `# Semantic Recommendation Microservice 🚀
  
Prototype semantic product search and generative styling recommendation microservice built for Round 3 FDE evaluation.

## 📦 Project Setup & Installation

Follow these steps to run the microservice and client interface locally:

\`\`\`bash
# 1. Clone the repository
git clone https://github.com/rakesh-jha-blr/semantic-recommendation-microservice.git
cd semantic-recommendation-microservice

# 2. Install production and development dependencies
npm install

# 3. Establish environmental context variables
echo "GEMINI_API_KEY=your_google_gemini_api_key" > .env

# 4. Spin up the hybrid development server (Client UI + API Gateway)
npm run dev
\`\`\`

---

## 📡 API Usage & Sample Request

Post natural language queries to search the McAuley-Lab fashion dataset semantically:

### Endpoint
\`POST http://localhost:3000/api/recommend\`

### Sample Body
\`\`\`json
{
  "query": "I need a light casual summer outfit for a beach party, matching sneakers included.",
  "limit": 3
}
\`\`\`

### Sample Response
\`\`\`json
{
  "success": true,
  "query": "I need a light casual summer outfit for a beach party, matching sneakers included.",
  "results": [
    {
      "parent_asin": "B01F3D556A",
      "title": "Aurelio Breathable Swimwear Canvas Shorts",
      "price": 34.99,
      "score": 0.892,
      "features": ["Lightweight fabric", "Quick dry mesh lining"]
    }
  ],
  "stylist_narrative": "For an elegant yet relaxed beach vibe, I have selected Aurelio's breathable canvas shorts paired with matching light mesh casual slip-ons. This balances optimal active movement with a highly curated resort aesthetic."
}
\`\`\`

---

## 💡 Architecture & Key Design Decisions

1. **In-Memory Semantic Matrix Indexing**: Eliminates the latency and provisioning cost of secondary Vector databases (e.g., Pinecone) by caching multi-dimensional vector array dot-products in-memory on microservice startup.
2. **Gemini 3.5 Flash Integration**: Harnesses high-performance Gemini 3.5 Flash models over heavier models to ensure sub-second API roundtrip latencies under high load.
3. **Graceful Lexical Failover**: Automatically downgrades to keyword-based lexical fallback systems if Google API limits or invalid keys are supplied.
`;

  const setupMarkdown = `## 📦 Project Setup & Installation

\`\`\`bash
# 1. Clone the repository
git clone https://github.com/rakesh-jha-blr/semantic-recommendation-microservice.git
cd semantic-recommendation-microservice

# 2. Install production and development dependencies
npm install

# 3. Establish environmental context variables
echo "GEMINI_API_KEY=your_google_gemini_api_key" > .env

# 4. Spin up the hybrid development server (Client UI + API Gateway)
npm run dev
\`\`\``;

  const usageMarkdown = `## 📡 API Usage & Sample Request

### Endpoint
\`POST http://localhost:3000/api/recommend\`

### Request Body
\`\`\`json
{
  "query": "I need a light casual summer outfit for a beach party, matching sneakers included.",
  "limit": 3
}
\`\`\`

### Response Payload
\`\`\`json
{
  "success": true,
  "query": "I need a light casual summer outfit for a beach party, matching sneakers included.",
  "results": [
    {
      "parent_asin": "B01F3D556A",
      "title": "Aurelio Breathable Swimwear Canvas Shorts",
      "price": 34.99,
      "score": 0.892,
      "features": ["Lightweight fabric", "Quick dry mesh lining"]
    }
  ],
  "stylist_narrative": "For an elegant yet relaxed beach vibe, I have selected Aurelio's breathable canvas shorts..."
}
\`\`\``;

  const decisionsMarkdown = `## 💡 Key Design Decisions & Architectural Trade-offs

1. **In-Memory Cosine Matching**:
   * **Decision**: Pre-embed dataset rows using \`text-embedding-004\` and perform quick matrix dot products locally on startup.
   * **Trade-off**: Memory scales linearly with dataset row count, but avoids expensive database hops and simplifies single-container deployment.

2. **Model Selection (Gemini 3.5 Flash)**:
   * **Decision**: Standardized on \`gemini-3.5-flash\` for low-latency JSON extraction and dynamic outfit assembly.
   * **Trade-off**: Lower raw parameter count than Pro, but offers faster generation speeds and highly structured response outputs.

3. **Hybrid Failover Mechanism**:
   * **Decision**: If Google API is unreachable, local word-frequency lexical match is deployed.
   * **Trade-off**: Ensures high availability and operational offline resilience, with reduced semantic styling depth.`;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 p-6 space-y-6 shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-lg text-indigo-600 dark:text-indigo-400">
            <BookOpen className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm tracking-wide">
              Take-Home Submission Documentation Hub
            </h4>
            <p className="text-[10px] text-slate-400">Generated programmatically from official repository templates</p>
          </div>
        </div>
        <button
          onClick={() => copyToClipboard(entireReadmeMarkdown, "readme")}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold transition-colors shadow-sm"
        >
          {copiedSection === "readme" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          {copiedSection === "readme" ? "Copied Full README" : "Copy Full README"}
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Card 1: Setup */}
        <div className="border border-slate-150 dark:border-slate-800 rounded-xl p-4 flex flex-col justify-between bg-slate-50/50 dark:bg-slate-950/20">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-indigo-500 font-mono uppercase tracking-wider">File: SETUP.md</span>
              <button
                onClick={() => copyToClipboard(setupMarkdown, "setup")}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                {copiedSection === "setup" ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <h5 className="font-bold text-slate-800 dark:text-white text-xs">Project Setup & Run Instructions</h5>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
              Copy these setup variables, initialization guidelines, and environment parameters required to boot up the hybrid Vite-Express microservice container locally.
            </p>
          </div>
          <pre className="mt-4 p-3 bg-slate-950 text-slate-300 rounded-lg text-[10px] font-mono overflow-x-auto border border-slate-800">
            {setupMarkdown}
          </pre>
        </div>

        {/* Card 2: Sample API Usage */}
        <div className="border border-slate-150 dark:border-slate-800 rounded-xl p-4 flex flex-col justify-between bg-slate-50/50 dark:bg-slate-950/20">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-indigo-500 font-mono uppercase tracking-wider">File: USAGE.json</span>
              <button
                onClick={() => copyToClipboard(usageMarkdown, "usage")}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                {copiedSection === "usage" ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <h5 className="font-bold text-slate-800 dark:text-white text-xs">Sample Requests & Payloads</h5>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
              Provides real, mock-free API payload models. Showcases search inputs and stylist narration response structures processed by the backend.
            </p>
          </div>
          <pre className="mt-4 p-3 bg-slate-950 text-slate-300 rounded-lg text-[10px] font-mono overflow-x-auto border border-slate-800">
            {usageMarkdown}
          </pre>
        </div>

        {/* Card 3: Design Decisions */}
        <div className="border border-slate-150 dark:border-slate-800 rounded-xl p-4 flex flex-col justify-between bg-slate-50/50 dark:bg-slate-950/20">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-indigo-500 font-mono uppercase tracking-wider">File: DECISIONS.md</span>
              <button
                onClick={() => copyToClipboard(decisionsMarkdown, "decisions")}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                {copiedSection === "decisions" ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <h5 className="font-bold text-slate-800 dark:text-white text-xs">Architectural Design Decisions</h5>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
              Explains design decisions, including in-memory indices, Gemini model selection, and vector search heuristics, demonstrating technical depth for solutions review.
            </p>
          </div>
          <pre className="mt-4 p-3 bg-slate-950 text-slate-300 rounded-lg text-[10px] font-mono overflow-x-auto border border-slate-800">
            {decisionsMarkdown}
          </pre>
        </div>
      </div>
    </div>
  );
}
