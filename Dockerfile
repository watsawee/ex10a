FROM nginx:latest

WORKDIR /src
COPY ./index.html ./height.jpeg ./inseam.png ./info_btn.png ./sizeCal.js ./validate.js /usr/share/ngin/html/index.html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]