# use an existing Image as base Alpine means stripped down version
FROM node:alpine as builder
# download and install dep copies other files 
WORKDIR '/app'
#puts file in named dir to keep it from installing in root
COPY ./package.json ./
#allows so we do not rebuild JSON for SRC code changes* 
RUN npm install

COPY ./ ./
## not needed with docker compose, but left it in for future ref
RUN npm run build 
#the the image what to do
FROM nginx
EXPOSE 80
COPY --from=builder /app/build usr/share/nginx/html