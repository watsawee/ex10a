FROM nginx:latest
COPY index.html /usr/share/ngin/html/
COPY height.jpeg /usr/share/ngin/html/
COPY inseam.png /usr/share/ngin/html/
COPY sizeCal.js /usr/share/ngin/html/
COPY validate.js /usr/share/ngin/html/
COPY info_btn.png /usr/share/ngin/html/