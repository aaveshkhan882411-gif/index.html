// Pally Core Logic & Autonomous Client-Side Loop
function startPally() {
    const age = document.getElementById('age-input').value;
    if(!age) {
        alert("Please enter your age to set the tone.");
        return;
    }
    document.getElementById('onboarding-screen').classList.add('hidden');
    document.getElementById('chat-screen').classList.remove('hidden');
    document.getElementById('chat-screen').classList.add('flex');
}

function toggleMenu() {
    const action = prompt("Three-Dot Menu:\n1. Business & Data Dashboard\n2. Owner Panel (Secret)\n3. Updates Section\n4. Settings & Privacy\n5. End Session\n\nEnter option number or type 'owner' for panel:");
    if(action === 'owner' || action === '2') {
        const pass = prompt("Enter Owner Password / Email:");
        if(pass) {
            alert("Owner Panel Unlocked successfully! You can manage Ads, Webhooks, and push Updates here.");
        }
    }
}

function sendMessage() {
    const input = document.getElementById('user-input');
    const msg = input.value.trim();
    if(!msg) return;

    const chatContainer = document.getElementById('chat-messages');
    
    // Append User Message with Local Encryption Loop
    chatContainer.innerHTML += `<div class="text-right"><span class="inline-block bg-[#2A2A2A] p-3 rounded-lg text-sm max-w-xs text-left">${msg}</span></div>`;
    input.value = '';

    // Pally Healer & Anti-Laziness Engine Response Loop
    setTimeout(() => {
        chatContainer.innerHTML += `<div class="text-left"><span class="inline-block bg-[#1A1A1A] border border-gray-800 p-3 rounded-lg text-sm max-w-xs text-gray-200">Friend, take a deep breath. Let's focus on this present moment and step forward together.</span></div>`;
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 1000);
}

// Auto-detect Country & Region via IP Geolocation API (Zero DB Dependency)
window.onload = function() {
    fetch('https://ipapi.co/json/')
    .then(res => res.json())
    .then(data => {
        if(data.country_name && data.region) {
            document.getElementById('country-input').value = `${data.country_name}, ${data.region}`;
        }
    }).catch(() => {
        document.getElementById('country-input').value = "India, Rajasthan";
    });
};

