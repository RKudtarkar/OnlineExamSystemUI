# # Use official node image as the base image
# FROM node:20.13.0-alpine as build

# ADD ./package.json /tmp/package.json
# RUN cd /tmp && npm install
# RUN mkdir -p /usr/local/app && cp -a /tmp/node_modules /usr/local/app/

# WORKDIR /usr/local/app

# # Add the source code from the app to the container
# COPY ./ /usr/local/app/

# # Generate the build of the application
# RUN npm run build

# # Stage 2: Serve app with nginx server
# # Use official nginx image as the base image
# FROM nginx:latest

# # Copy the build output to replace the default nginx contents.
# COPY --from=build /usr/local/app/dist/build/browser /usr/share/nginx/html

# # This line is IMPORTANT, we will breakdown it on a minute.
# COPY ./entrypoint.sh /usr/local/app/entrypoint.sh

# # Copy the nginx conf that we created to the container
# COPY ./nginx.conf  /etc/nginx/conf.d/default.conf

# # Expose ports
# EXPOSE 80 443 6006 4200

# RUN chmod +x /usr/local/app/entrypoint.sh
# ENTRYPOINT [ "/usr/local/app/entrypoint.sh" ]


# Use an official Nginx image to serve the Angular app
FROM nginx:alpine

# Copy the Angular build output to the Nginx server's directory
COPY ./dist/online-exam-system-ui /usr/share/nginx/html

# Expose the port that Nginx will serve the app on
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]

