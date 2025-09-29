
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


function getDebbyReply(message){
    const reply = `Debby says: ${message}`;
    addMessage(debbychat, reply, 'debby-mess');
}


}
);




