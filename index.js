import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());

// Root endpoint
app.get("/", (req, res) => {
  res.send("Mutual Fund API is running 🚀");
});

// Funds API endpoint
app.get("/api/funds", (req, res) => {
  try {
    const data = fs.readFileSync("db.json");
    const funds = JSON.parse(data);
    res.json(funds);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to read data" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
