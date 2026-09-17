const LongVideos = [
    "https://youtu.be/kl95K2X7t9k", "https://youtu.be/6InBdkRmkb8", "https://youtu.be/eeIjtjFVWK0",
    "https://youtu.be/tmUwDRm3ApA", "https://youtu.be/O2buhvgpqfo", "https://youtu.be/h0s4uysCPEg",
    "https://youtu.be/tLG-NGqpOoE", "https://youtu.be/MiZN_2TLflg", "https://youtu.be/eLiN5Zp72tk",
    "https://youtu.be/j6Gp0B4n3hM", "https://youtu.be/kSmoBzCtYBk", "https://youtu.be/AO-XBPAJvWI",
    "https://youtu.be/iEe8R-nB_Zc", "https://youtu.be/TmvAe8cJLF4", "https://youtu.be/0dVrnkjMpUg",
    "https://youtu.be/aK8jE7uAzm4", "https://youtu.be/mL1_1Z9ftkU", "https://youtu.be/5PbNPrBe9ZU",
    "https://youtu.be/JPOs9lhG7mw", "https://youtu.be/eer6sf7VLOQ", "https://youtu.be/Qn5i9TiBLkA",
    "https://youtu.be/hOOZH7SqhwA", "https://youtu.be/oSXH_OEmfng", "https://youtu.be/70YhVBE0NA8"
];

const ShortVideos = [
    "https://youtube.com/shorts/EuprlrOMFkg", "https://youtube.com/shorts/GIdSZ29BUvw",
    "https://youtube.com/shorts/enBsYk3EfcY", "https://youtube.com/shorts/vxTOYYEGJgw",
    "https://youtube.com/shorts/kZDLCNyjlow", "https://youtube.com/shorts/pdoTLqNp6OA",
    "https://youtube.com/shorts/DDRStaGL93c", "https://youtube.com/shorts/_5_8GOCSeNs",
    "https://youtube.com/shorts/kKq9B8ACRPM", "https://youtube.com/shorts/FfLvj9hEoJM",
    "https://youtube.com/shorts/Cfqx8rfY2ug", "https://youtube.com/shorts/a6L7PhQK75o",
    "https://youtube.com/shorts/eTmogd_jraM", "https://youtube.com/shorts/4iW417dbZ0U",
    "https://youtube.com/shorts/0SVV48tcfko", "https://youtube.com/shorts/Lc9KwoIqNr4",
    "https://youtube.com/shorts/5_Z6jEzOFP0", "https://youtube.com/shorts/WtchmzkEQlM",
    "https://youtube.com/shorts/tCQtC7VLwcs", "https://youtube.com/shorts/3jW-W_8_1hk",
    "https://youtube.com/shorts/0-RIgysWhmo", "https://youtube.com/shorts/qPGGgSYiMnk",
    "https://youtube.com/shorts/0tvuwyfsueQ", "https://youtube.com/shorts/ChJ9ib7YXRU",
    "https://youtube.com/shorts/TciP98Tk0sQ", "https://youtube.com/shorts/CWkscBEyBhQ",
    "https://youtube.com/shorts/75bM2PtFteo", "https://youtube.com/shorts/DuXYDOuz5tk",
    "https://youtube.com/shorts/D0A4F3fj8ok", "https://youtube.com/shorts/fhrdwYKSjjo",
    "https://youtube.com/shorts/9wCOVIf_zmI", "https://youtube.com/shorts/8PMqyhZueJg",
    "https://youtube.com/shorts/sppzTpxwQYc"
];

function SwitchTab(tabId, event) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

function OpenRandomVideo() {
    const index = Math.floor(Math.random() * LongVideos.length);
    window.open(LongVideos[index], '_blank');
}

function OpenRandomShort() {
    const index = Math.floor(Math.random() * ShortVideos.length);
    window.open(ShortVideos[index], '_blank');
}

let Tasks = JSON.parse(localStorage.getItem('site_tasks')) || [
    { text: "Записать новое видео", completed: false }
];

function RenderTasks() {
    const list = document.getElementById('taskList');
    if (!list) return;
    list.innerHTML = '';
    Tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        li.innerHTML = `
            <div class="task-left" onclick="ToggleTask(${index})">
                <input type="checkbox" ${task.completed ? 'checked' : ''} style="pointer-events: none;">
                <span>${task.text}</span>
            </div>
            <button class="delete-btn" onclick="DeleteTask(${index})">✕</button>
        `;
        list.appendChild(li);
    });
    localStorage.setItem('site_tasks', JSON.stringify(Tasks));
}

function AddTask() {
    const input = document.getElementById('taskInput');
    if (!input || input.value.trim() === '') return;
    Tasks.push({ text: input.value.trim(), completed: false });
    input.value = '';
    RenderTasks();
}

function ToggleTask(index) {
    Tasks[index].completed = !Tasks[index].completed;
    RenderTasks();
}

function DeleteTask(index) {
    Tasks.splice(index, 1);
    RenderTasks();
}

RenderTasks();