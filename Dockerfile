FROM nginx:1.10.1-alpine
COPY index.html /usr/share/nginx/html
COPY height.jpeg /usr/share/nginx/html
COPY info_btn.png /usr/share/nginx/html
COPY inseam.png /usr/share/nginx/html
COPY sizeCal.js /usr/share/nginx/html
COPY validate.js /usr/share/nginx/html
