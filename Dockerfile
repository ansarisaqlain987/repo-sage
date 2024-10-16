# Stage 1: Dependencies Install (Caching Dependencies Layer)
FROM oven/bun:1.1.30 AS deps

WORKDIR /app

# Copy only package.json and bun.lockb to install dependencies
COPY package.json bun.lockb ./
RUN bun install --no-save

# Stage 2: Build Application
FROM oven/bun:1.1.30 AS builder

WORKDIR /app

# Copy everything except unnecessary files (handled in .dockerignore)
COPY . .

# Ensure node_modules are symlinked from /app/node_modules (cached from deps)
COPY --from=deps /app/node_modules ./node_modules

# Build the Next.js app (outputs to `.next/`)
RUN bun --bun next build

# Stage 3: Production Image with Minimal Files
FROM oven/bun:1.1.30 AS runner

WORKDIR /app

# Copy only the essential files from the build stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json /app/bun.lockb ./
COPY --from=builder /app/node_modules ./node_modules

# Expose port 3000 for the application
EXPOSE 3000

# Start the application
CMD ["bun", "start"]
