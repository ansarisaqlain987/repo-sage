# ----------------------------
# Stage 1: Install Dependencies
# ----------------------------
FROM node:18-alpine AS deps

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock to leverage Docker cache
COPY package.json yarn.lock ./

# Install all dependencies (including devDependencies)
RUN yarn install --frozen-lockfile

# ----------------------------
# Stage 2: Build the Next.js Application
# ----------------------------
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy dependencies from the deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy the rest of the application source code
COPY . .

# Build the Next.js application
RUN yarn build

# ----------------------------
# Stage 3: Production - Serve the Application
# ----------------------------
FROM node:18-alpine AS production

# Set NODE_ENV to production
ENV NODE_ENV=production

# Set working directory
WORKDIR /app

# Copy only necessary files from the builder stage
COPY --from=builder /app/package.json /app/yarn.lock ./
COPY --from=builder /app/.next ./.next

# Install only production dependencies
RUN yarn install --frozen-lockfile --production && yarn cache clean

# Create a non-root user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["yarn", "start"]
