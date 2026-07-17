# --- Build Stage ---
FROM node:20-slim AS builder

WORKDIR /app

# Copy dependency manifests
COPY package*.json ./

# Install all dependencies (including devDependencies for esbuild and typescript)
RUN npm install

# Copy application source code
COPY . .

# Compile frontend static assets and bundle backend server
RUN npm run build

# --- Production Stage ---
FROM node:20-slim AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copy package manifests to install production dependencies only
COPY package*.json ./

# Install production dependencies only
RUN npm install --omit=dev

# Copy compiled assets and server bundle from the builder stage
COPY --from=builder /app/dist ./dist

# Expose microservice port
EXPOSE 3000

# Start Express full-stack application
CMD ["node", "dist/server.cjs"]
