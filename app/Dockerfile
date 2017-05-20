FROM nginx

MAINTAINER Daniele Belardi <dnl.dwfa@gmail.com>

RUN mkdir /var/run/nginx && \
    chown -R nginx:nginx /var/run/nginx && \
    chown -R nginx:nginx /var/cache/nginx

USER nginx

COPY nginx.conf /etc/nginx
COPY dist /usr/share/nginx/html/

EXPOSE 8080
