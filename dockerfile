
FROM node
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ ./
EXPOSE 92
CMD ["npm", "start"]
