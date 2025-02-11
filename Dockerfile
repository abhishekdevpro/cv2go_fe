# Build environment
FROM docker.io/library/node:20.3.0-alpine AS build

WORKDIR /app

# Install dependencies
COPY ./package.json ./package-lock.json* ./
RUN npm install

# Copy source code and build the application
COPY . ./
RUN npm run build

# Production environment
FROM node:20.0.0-alpine3.17 AS production

WORKDIR /app

# Copy only necessary files for production
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/package-lock.json* ./package-lock.json
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/node_modules ./node_modules

# Set environment variables (adjust as needed)
ENV NODE_ENV=production
ENV PORT=3000

# Expose the application port
EXPOSE 3000

# Health check (optional)
HEALTHCHECK CMD curl --fail http://localhost:3000/ || exit 1

# Start the Next.js application
CMD ["npm", "run", "start"]
