FROM node:alpine AS dependencies
WORKDIR /app
COPY package.json ./

FROM node:alpine AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:alpine AS runner
WORKDIR /app
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "run", "start"]