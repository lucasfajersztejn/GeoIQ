FROM node:18.20.2 as builder

# Definir argumentos de construcción
ARG MONGODB_URI

# Establecer variables de entorno
ENV MONGODB_URI=$MONGODB_URI

# Copiar y construir la aplicación web
COPY ./web /opt/geoiqos-web
WORKDIR /opt/geoiqos-web
RUN npm ci
RUN npm run build

FROM node:18.20.2-alpine3.19

# Establecer variables de entorno en la segunda etapa
ENV MONGODB_URI=$MONGODB_URI

# Copiar la API y la aplicación web construida
COPY ./api /opt/geoiqos
WORKDIR /opt/geoiqos
COPY --from=builder /opt/geoiqos-web/dist /opt/geoiqos/web/build
RUN npm ci --only=production

# Exponer el puerto y definir el comando de inicio
EXPOSE 3000
CMD ["npm", "start"]

# FROM node:18.20.2 as builder

# ARG MONGODB_URI
# ENV MONGODB_URI $MONGODB_URI

# COPY ./web /opt/geoiqos-web
# WORKDIR /opt/geoiqos-web
# RUN npm ci
# RUN npm run build

# FROM node:18.20.2-alpine3.19

# COPY ./api /opt/geoiqos
# WORKDIR /opt/geoiqos
# COPY --from=builder /opt/geoiqos-web/dist /opt/geoiqos/web/build
# RUN npm ci --only=production

# EXPOSE 3000
# CMD ["npm", "start"]