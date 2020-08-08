FROM node:14.3.0-alpine3.11 as builder
WORKDIR /demo
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:latest
COPY ./nginx/vhost.nginx.conf /etc/nginx/conf.d/demo.conf
COPY --from=builder /demo/build /usr/share/nginx/html
RUN chmod 655 /usr/share/nginx/html
EXPOSE 80
CMD "nginx" "-g" "daemon off;"
