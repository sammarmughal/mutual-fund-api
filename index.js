import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());

// Example endpoint
app.get("/", (req, res) => {
  res.send("Mutual Fund API is running 🚀");
});

// Example: Fetch PSX market data
app.get("/api/funds", async (req, res) => {
  try {
    const response = await axios.get("https://psxterminal.com/api/market-data?market=REG");
    res.json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
