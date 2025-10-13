const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch"); 

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/debby", async (req, res) => {
  const userMessage = req.body.message;
  console.log("✅ Received from frontend:", userMessage);

  if (!userMessage) {
    console.log("⚠️ User message is empty!");
    return res.json({ reply: "Debby’s confused 😭 (no message received)" });
  }

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
"Authorization": "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",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "meituan/longcat-flash-chat:free",
        messages: [
          { role: "system", content: "You are a sassy high-school debater arguing with the user." },
          { role: "user", content: userMessage }
        ]
      })
    });

    const data = await response.json();
    console.log("📝 AI raw response:", data);

    // Adjust this according to actual API structure
    const reply = data.choices?.[0]?.message?.content || "Debby’s confused 😭";
    res.json({ reply });

  } catch (err) {
    console.error("❌ Error calling AI:", err);
    res.status(500).json({ reply: "Debby lost connection 😭" });
  }
});

app.listen(5000, () => console.log("✅ Server running on port 5000"));

  