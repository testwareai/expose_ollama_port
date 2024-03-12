const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// // Status route
// app.get("/status", (req, res) => {
//   res
//     .status(200)
//     .send({ status: "OK", message: "Server is running smoothly." });
// });

// Configure proxy middleware
const ollamaProxy = createProxyMiddleware({
  target: "http://localhost:11434", // Target host
  changeOrigin: true, // Needed for virtual hosted sites
  ws: true, // Proxy websockets
});

// Example: Forward all requests from /ollama to the ollama application
app.use("/", ollamaProxy);

// Alternatively, to proxy all incoming requests to the ollama app, use this:
// app.use(ollamaProxy);

app.listen(11435, "0.0.0.0", () => {
  console.log("Express server is running on port 11435");
});
