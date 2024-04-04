FROM nginx:latest
COPY index.html /usr/share/nginx/html
COPY height.png /usr/share/nginx/html
COPY info_btn.png /usr/share/nginx/html
COPY inseam.png /usr/share/nginx/html
COPY sizeCal.js /usr/share/nginx/html
COPY validate.js /usr/share/nginx/html