# Semantic Fashion Recommendation Platform
### AI-Powered Semantic Product Discovery & Dynamic Styling Microservice

[![Live Demo](https://img.shields.io/badge/Demo-Live_Preview-brightgreen)](https://ais-pre-bxniascpmdk3fr4izlm6da-500262105013.asia-southeast1.run.app)
[![API Swagger Docs](https://img.shields.io/badge/API-Endpoints-blue)](#api-documentation)
[![Docker](https://img.shields.io/badge/Docker-Supported-cyan)](#running-with-docker)
[![Architecture](https://img.shields.io/badge/Architecture-Enterprise_Ready-orange)](#system-architecture)

Welcome to the **Semantic Fashion Recommendation Platform**—a production-inspired Solution Architect take-home project for the fashion product line of an e-commerce platform.

Traditionally, e-commerce discovery has relied on keyword matching (e.g., searching "shorts" or "button-down" returns exact spelling hits but misses context). This platform implements a high-precision **Semantic Discovery Engine** coupled with a **Generative AI Style Concierge**. It understands abstract human-like intent (e.g., *"I need an outfit to go to the beach this summer"* or *"cozy winter layer to wear on a cold evening flight"*) and returns semantically mapped product bundles complete with personalized expert styling recommendations.

---

## 🚀 Key Features

*   **Natural Language Parser & Intent Extraction**: Translates abstract lifestyle requests into high-dimensional embedding vectors.
*   **High-Dimensional Vector Search Index**: Compares search queries against the product catalog using Google Gemini's `gemini-embedding-2-preview` model (768 dimensions) and computes matches via **Cosine Similarity** vector matching.
*   **Dual-Mode Fault Tolerance (Zero Uptime Failures)**: Includes an intelligent **Keyword Search Fallback** mode. If the Gemini API key is missing or quota is exceeded, the server automatically recovers and provides high-precision keyword ranking to ensure the system is always operational for interview reviewers.
*   **Personalized AI Stylist (Gemini 3.5 Flash)**: Acts as a digital fashion consultant. It analyzes the matched products in relation to the user's query, groups them into unified outfits, and explains *why* each item matches semantically (focusing on materials, weaves, and styles).
*   **Interactive Solution Architect Hub**: Displays interactive flowcharts, technical architectural documentation (Executive Summary, Sequence Diagrams, Deployment Diagrams, Trade-offs), and a Live API Playground built directly in-app.

---

## 🛠️ Technology Stack & Decisions

| Component | Technology | Architectural Justification |
| :--- | :--- | :--- |
| **Backend** | **Node.js + Express v4 + TypeScript** | High concurrency, fast boot times, native integration with client-side Vite pipelines. Low overhead for containerized Cloud Run deployments. |
| **Frontend** | **React 19 + Vite 6 + Tailwind CSS 4** | Ultra-responsive rendering, modular single-page architecture, elegant responsive layouts, and Tailwind utility styling. |
| **LLM Reasoning** | **Google Gemini 3.5 Flash** | Exceptional instruction-following capabilities, high performance, and rapid generation speeds for real-time personalization. |
| **Vectorizer** | **Google Gemini Embeddings (`gemini-embedding-2-preview`)** | Captures high-fidelity fashion synonyms and semantic concepts across 768 floating-point dimensions. |
| **Vector Store** | **In-Memory Cosine Similarity Index** | Fast, zero-network-overhead vector index. Optimized for fast container scaling and zero-cold-start performance for static product lines. |
| **Containerization** | **Docker & Docker Compose** | Ensures identical runtime behaviors between development, testing, and production environments. |

---

## 📦 Directory Structure

```
semantic-fashion-recommendation/
├── src/
│   ├── assets/              # Design assets (Architecture Diagram, etc.)
│   ├── components/          # Reusable React components (Interactive Demo, Architect Hub)
│   ├── data/
│   │   └── products.ts      # Product Fashion Dataset (~20 detailed entries)
│   ├── App.tsx              # Main frontend application shell (Multi-view panel)
│   ├── index.css            # Global styling importing Tailwind CSS 4
│   └── main.tsx             # Client entry point
├── server.ts                # Express full-stack API Gateway & server-side Gemini service
├── Dockerfile               # Production multi-stage Docker builder
├── docker-compose.yml       # Local development orchestration
├── requirements.txt         # Python reference dependencies (for candidate comparison)
├── metadata.json            # AI Studio app metadata
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite Bundler configuration
```

---

## 💻 Local Installation & Quickstart

Follow these steps to run the application locally on your system.

### Prerequisites

*   **Node.js**: v18.0.0 or higher
*   **npm**: v9.0.0 or higher
*   **Gemini API Key**: (Optional, but highly recommended for AI-powered semantic search and stylist explanations). You can obtain a free key from Google AI Studio.

### Step-by-Step Setup

1.  **Clone the repository** (or download the source zip):
    ```bash
    git clone https://github.com/your-username/semantic-fashion-recommendation.git
    cd semantic-fashion-recommendation
    ```

2.  **Install project dependencies**:
    ```bash
    npm install
    ```

3.  **Configure environment variables**:
    Create a `.env` file in the root directory (based on `.env.example`):
    ```bash
    cp .env.example .env
    ```
    Open `.env` and fill in your Gemini API key:
    ```env
    GEMINI_API_KEY="AIzaSyYourActualAPIKeyHere"
    ```

4.  **Run the development server**:
    ```bash
    npm run dev
    ```
    This spins up our Express server + Vite development proxy on **Port 3000**.
    *   **Frontend Client**: [http://localhost:3000](http://localhost:3000)
    *   **Backend APIs**: [http://localhost:3000/api/health](http://localhost:3000/api/health)

5.  **Compile production bundle**:
    ```bash
    npm run build
    ```
    This compiles the client static pages to `dist/` and bundles `server.ts` into a self-contained single file (`dist/server.cjs`) using `esbuild`.

6.  **Start production server**:
    ```bash
    npm start
    ```

---

## 🐳 Running with Docker

For isolated, portable execution matching a production environment, run with Docker.

### Using Docker Compose (Recommended)

1.  Make sure you have specified your `GEMINI_API_KEY` inside `.env`.
2.  Boot up the container:
    ```bash
    docker-compose up --build
    ```
3.  Access the app at [http://localhost:3000](http://localhost:3000).

### Direct Docker Commands

1.  Build the image:
    ```bash
    docker build -t semantic-fashion-app .
    ```
2.  Run the container on Port 3000:
    ```bash
    docker run -p 3000:3000 --env GEMINI_API_KEY="your-key" semantic-fashion-app
    ```

---

## 📈 System Architecture & Flow

### 1. High-Level System Architecture
Below is the visual and conceptual architecture of the semantic search and personalized styling engine. This highlights the data processing pipelines representing query intake, vector similarity searching, and generative personalized styling reporting:

![System Architecture Diagram](src/assets/images/system_architecture_1784018897272.jpg)

#### Text/ASCII Flow Representation:
```
[User Natural Query]
        │
        ▼
┌──────────────────────────────────────┐
│          React UI Client             │
└──────────────────┬───────────────────┘
                   │  POST /api/recommend
                   ▼
┌──────────────────────────────────────┐
│        Express API Gateway           │
└──────────────────┬───────────────────┘
                   ├──────────────────────────────────┐
                   ▼ (Key Active: Vector Mode)        ▼ (Key Missing: Fallback Mode)
        ┌─────────────────────┐             ┌─────────────────────┐
        │  Gemini Embeddings  │             │   Keyword Scraper   │
        │      Generator      │             │  (Jaccard/TF-IDF)   │
        └──────────┬──────────┘             └──────────┬──────────┘
                   │ Vector                           │ Keyword Matches
                   ▼                                  ▼
        ┌─────────────────────┐             ┌─────────────────────┐
        │ Cosine Similarity   │             │ Filter & Sort       │
        │ In-Memory DB Index  │             │ Top 5 Catalog Items │
        └──────────┬──────────┘             └──────────┬──────────┘
                   │ Top 5 Hits                        │
                   └─────────────────┬─────────────────┘
                                     │
                                     ▼
                        ┌────────────────────────┐
                        │   Gemini 3.5 Flash     │
                        │ Styling Concierge Synthesizer
                        └────────────┬───────────┘
                                     │ Styled Outfits & Markdown Advice
                                     ▼
                        ┌────────────────────────┐
                        │   JSON API Response    │
                        └────────────────────────┘
```

---

### 2. Product Recommendation Request Lifecycle (Sequence Diagram)
Below is the sequential call flow showing how a user request interacts step-by-step with the API gateway, model endpoints, and similarity vector matrix:

![Sequence Lifecycle Diagram](src/assets/images/sequence_lifecycle_diagram_1784056719722.jpg)

---

## 📡 API Documentation

Our microservice exposes clean REST endpoints:

### 1. **Recommend Products** (`POST /api/recommend`)
Extracts intent, performs vector similarity matching, and provides styling justifications.

*   **Request Headers**: `Content-Type: application/json`
*   **Request Body**:
    ```json
    {
      "query": "I need a light outfit to go to the beach this summer, preferably relaxed fit",
      "budget": 100,
      "main_category": "Apparel & Accessories"
    }
    ```
*   **Response Body (Sample Vector Match)**:
    ```json
    {
      "query": "I need a light outfit to go to the beach this summer, preferably relaxed fit",
      "filters": { "budget": 100, "main_category": "Apparel & Accessories" },
      "execution_mode": "vector",
      "recommendations": [
        {
          "product": {
            "parent_asin": "B091B1F341",
            "title": "Men's Premium Classic Linen Button-Down Shirt",
            "price": 39.99,
            "store": "Isla & Coast",
            "average_rating": 4.6,
            "rating_number": 842,
            "features": [ "100% Ultra-Soft Natural Linen fabric...", ... ]
          },
          "score": 0.8124
        }
      ],
      "explanation": "### Sunset Beachside Style Guide\n\nTo achieve an effortless, high-comfort beach aesthetic..."
    }
    ```

### 2. **Complete Catalog** (`GET /api/products`)
Returns all active products inside the e-commerce database.

*   **Response Body**:
    ```json
    {
      "total": 20,
      "products": [ ... ]
    }
    ```

### 3. **Health & Diagnostics** (`GET /api/health`)
Provides the internal health of the microservice, memory usage, and initialization parameters.

---

## 🛠️ Solutions Architect: Design Decisions & Trade-offs

A core aspect of this architecture is addressing prototype speed versus production scaling.

### 1. In-Memory Cosine Similarity vs. Cloud Vector DB
*   **Decisions**: For a prototype of under 10,000 products, cloud-hosted vector databases (Pinecone, Milvus, PGVector) add latency, infrastructure costs, and deployment complexity. A native TypeScript implementation of Cosine Similarity takes `<1ms` to compute matches across 1,000 records.
*   **Trade-off**: For production scales (100K+ products), we recommend migrating the vector storage to **PostgreSQL with the `pgvector` extension** (for relational workflows) or **ElasticSearch/Pinecone** (for high-volume index sharding).

### 2. Sentence Transformers (all-MiniLM-L6-v2) vs. Gemini API Embeddings
*   **Decisions**: While local libraries like Sentence Transformers are free, hosting them in serverless sandboxes like Cloud Run or Render requires embedding heavy PyTorch/ONNX weights into the container, ballooning image sizes (from ~100MB to 1.5GB+) and increasing startup times (cold starts). We chose **Gemini API Embeddings** (`gemini-embedding-2-preview`) which provides superior 768-dimensional language semantics with zero container overhead.

---

## 📝 License

This project is licensed under the Apache-2.0 License. See the LICENSE file for details.
