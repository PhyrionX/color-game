#https://store.docker.com/images/httpd
FROM nginx

ENV NGINX_PORT=8081
COPY ./dist/ /usr/share/nginx/html/
COPY ./default.conf /etc/nginx/conf.d/
RUN chmod +r -R /usr/share/nginx/html/
COPY auto-reload-nginx.sh /home/auto-reload-nginx.sh
RUN chmod +x -R /home/auto-reload-nginx.sh