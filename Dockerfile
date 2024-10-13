# Stage 1: Build the application
FROM oven/bun:1.1.30 AS builder

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json bun.lockb ./

# Install dependencies
RUN bun install

# Copy all project files to the builder, including source code
COPY . .

# Build the Next.js application
RUN bun run build

# Stage 2: Create the production image
FROM oven/bun:1.1.30 AS runner

# Set the working directory
WORKDIR /app

# Copy everything except the 'src' folder from the builder stage
COPY --from=builder /app /app
RUN rm -rf /app/src

# Expose the port the app runs on
EXPOSE 3000

# Command to run the Next.js application
CMD ["bun", "start"]
