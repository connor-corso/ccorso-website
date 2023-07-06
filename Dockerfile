# Help from here https://www.knowledgehut.com/blog/web-development/how-to-dockerize-react-app

#Stage 1
FROM node:20-alpine as builder
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent 
RUN npm install -g --silent
COPY . ./
RUN npm run build

#Stage 2
FROM nginx:stable-alpine
COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html


ENTRYPOINT ["nginx", "-g", "daemon off;"]