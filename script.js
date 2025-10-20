
fetch("https://your-backend-url.onrender.com/chat", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ message: userInput })
})
.then(res => res.json())
.then(data => {
  const reply = data.choices?.[0]?.message?.content || "No response.";
  displayMessage("AI", reply);
})
.catch(err => {
  console.error(err);
  displayMessage("AI", "Error connecting to AI server.");
});