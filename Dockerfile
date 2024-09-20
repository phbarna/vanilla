# Use a Node.js base image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy your project files into the container
COPY . .

# Install dependencies (if any)
RUN npm install

# Expose the port that your server will run on - good practise.
EXPOSE 4000

# Run the server using npx
CMD ["npx", "serve", "-l", "4000"]