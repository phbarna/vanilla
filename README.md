## Used for testing tailwind in a Vanilla Environment.

Use 'npx serve' to start a local web werver

You need to build tailwind like the following when you add more tailwind functionality
npx tailwindcss build input.css -o output.css --watchs

## to build docker container do:
docker build -t myapp .

## to run docker container do:
docker run -d -p 1337:4000 myapp