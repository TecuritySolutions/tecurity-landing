// app/api/testApi.js

export async function GET(request: Request) {
  console.log("Request headers:", Object.fromEntries(request.headers));
  return new Response("Hello, world!");  
}