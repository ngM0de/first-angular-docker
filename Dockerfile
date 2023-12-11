FROM node:21-alpine3.18 AS build
WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN npm install
RUN npm run build

FROM nginx:latest
COPY --from=build /usr/local/app/dist/first-angular-docker-app/browser /usr/share/nginx/html
EXPOSE 80