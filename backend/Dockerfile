# Use Node.js v20 LTS as the base image
FROM node:20.17.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of your application code to the working directory
COPY . .

# Expose port 5000
EXPOSE 5000

# Start the backend service
CMD ["npm", "start"]
