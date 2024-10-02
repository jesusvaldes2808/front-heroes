FROM node:20-alpine3.20 AS build

RUN mkdir -p /app

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package.json /app

# Instalar las dependencias
#RUN npm set strict-ssl false
RUN npm config set strict-ssl false
RUN npm install

# Copiar el resto de la aplicación
COPY . /app

# Construir la aplicación Angular
RUN npm run build

# Etapa 2: Servir la aplicación con Nginx
FROM nginx:alpine

WORKDIR /usr/share/nginx

# Copiar los archivos construidos desde la etapa anterior
COPY --from=build /app/dist/heroes-app /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/nginx.conf

# Exponer el puerto 80
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
