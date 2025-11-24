const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 8080;

// 1️⃣ Serve static files from 'public'
app.use(express.static(path.join(__dirname, "public")));

// 2️⃣ API endpoint
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Node.js Web App!" });
});

// 3️⃣ Catch-all route for SPA
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
