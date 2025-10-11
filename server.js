const express = require ("express");
const cors = require ("cors");
const OpenAI = require ("openai");

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: "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"
});



app.post("/api/debby", async (req, res) => {
 
  try {   const userMessage = req.body.message;

    const completion = await openai.chat.completions.create({
      model: "openai/gpt-4o", 

      messages: [
        
          { role: "system", content: "You are a sassy highschool debater who loves to argue and make witty remarks and when some says a statement also not to chatty." },
      { role: "user", content: userMessage }],
    });

    res.json({ reply: completion.choices[0].message.content });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error calling AI");
  }

  
});

app.listen(5000, ()=>console.log ("Server running on post 5000")); 
