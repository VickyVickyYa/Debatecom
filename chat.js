





   document.addEventListener('DOMContentLoaded', () => { const sendBtn=document.getElementById('sendBtn');
const userInput=document.getElementById('userInput');
const userchat=document.getElementById('userchat');
const debbychat =document.getElementById('Debby');

function addMessage(container, text, className) {
    const msgDiv = document.createElement("div");
    msgDiv.className = `mess ${className}`;
    msgDiv.innerText = text;
    container.appendChild(msgDiv);
    container.scrollTop = container.scrollHeight;
}

sendBtn.addEventListener("click", () => {
    const message = userInput.value.trim();
    if (!message) return;
   if (!message)return;
    userInput.value="";
    getDebbyReply (message);

});






async function getDebbyReply(message) {
    console.log("✉️ Sending to server:", message); // <-- Debug log

    try {
        const response = await fetch("http://localhost:5000/api/debby", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message })
        });

        const data = await response.json();
        console.log("📝 Server returned:", data); // <-- Debug log

        const reply = data.reply || "Debby’s confused 😭";
        addMessage(debbychat, reply, "debby-mess");

    } catch (error) {
        console.error("❌ Error talking to Debby:", error);
        addMessage(debbychat, "Error talking to Debby: " + error, "debby-mess");
        addMessage(debbychat, "Error: Debby lost connection.", "debby-mess");
    }
}

});
    
