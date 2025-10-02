# ---- Stage 1: Build the frontend ----
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source code and build
COPY . .
RUN npm run build


# ---- Stage 2: Run with Nginx ----
FROM nginx:alpine

# Copy built frontend files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Replace default Nginx config (optional, for SPA support)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
