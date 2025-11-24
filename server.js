const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 8080;

// Serve static files from public
app.use(express.static(path.join(__dirname, "public")));

// API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Node.js Web App!" });
});

// Serve index.html for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

