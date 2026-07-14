import { Product } from "./data/products.ts";
import { UserReview } from "./data/reviews.ts";

export type { UserReview };

export interface RecommendationResponse {
  query: string;
  filters: {
    budget?: string;
    main_category?: string;
  };
  execution_mode: "vector" | "keyword";
  recommendations: {
    product: Product;
    score: number;
  }[];
  explanation: string;
}

export type ActiveTab = "demo" | "architect" | "sandbox" | "repo" | "assignment";

export interface ArchitectDoc {
  executive_summary: {
    problem: string;
    solution: string;
    business_value: string[];
  };
  system_specifications: {
    embeddings_model: string;
    llm_model: string;
    vector_store: string;
    runtime: string;
  };
  api_schema: {
    endpoint: string;
    request_body: Record<string, string>;
    response_body: Record<string, string>;
  };
}
