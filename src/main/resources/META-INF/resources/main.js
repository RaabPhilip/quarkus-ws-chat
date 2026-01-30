let socket = null;
let userId = null;


function log(msg) {
    const ta = document.getElementById("messages");
    ta.value += msg + "\n";
    ta.scrollTop = ta.scrollHeight;
}

async function connect() {
    const wsUrl = document.getElementById("serverUrl").value;
    const httpBase = wsUrl.replace(/^ws/, "http").replace(/\/chat$/, "");

    await registerConnection(httpBase);
    await loadHistory(httpBase);
    openWebSocket(wsUrl);
}

async function registerConnection(baseUrl) {
    const res = await fetch(baseUrl + "/connections");
    userId = await res.text();
    document.getElementById("userId").value = userId;
    log("Connected as " + userId);
}

async function loadHistory(baseUrl) {
    const res = await fetch(baseUrl + "/messages");
    const history = await res.json();

    const ta = document.getElementById("messages");
    ta.value = "";

    history.forEach(m => {
        log(`[${m.timestamp}] ${m.userId}: ${m.text}`);
    });

    log("---- live messages ----");
}

function openWebSocket(wsUrl) {
    socket = new WebSocket(wsUrl);

    socket.onopen = () => log("WebSocket connected");

    socket.onmessage = e => {
        const m = JSON.parse(e.data);
        log(`[${m.timestamp}] ${m.userId}: ${m.text}`);
    };

    socket.onerror = () => log("WebSocket error");
}

function sendMessage() {
    const text = document.getElementById("messageText").value;
    if (!text || !socket) return;

    socket.send(JSON.stringify({
        userId: userId,
        text: text,
        timestamp: new Date().toISOString()
    }));

    document.getElementById("messageText").value = "";
}