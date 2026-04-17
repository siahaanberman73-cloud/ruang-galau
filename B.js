window.onload = function () {
    const data = JSON.parse(localStorage.getItem("curhat")) || [];
    const list = document.getElementById("list");

    data.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item.user + ": " + item.text;
        list.appendChild(li);
    });
};

function kirim() {
    const input = document.getElementById("input");
    const list = document.getElementById("list");
    const user = localStorage.getItem("user");

    if (input.value === "") return;

    const li = document.createElement("li");
    li.innerText = user + ": " + input.value;
    list.appendChild(li);

    let data = JSON.parse(localStorage.getItem("curhat")) || [];
    data.push({ user: user, text: input.value });
    localStorage.setItem("curhat", JSON.stringify(data));

    input.value = "";
}

function kirim() {
    const input = document.getElementById("input");
    const list = document.getElementById("list");
    const user = localStorage.getItem("user");

    if (input.value.trim() === "") {
        alert("Isi dulu curhatannya!");
        return;
    }

    // tampilkan ke layar
    const li = document.createElement("li");
    li.innerText = user + ": " + input.value;
    list.appendChild(li);

    // simpan ke storage
    let data = JSON.parse(localStorage.getItem("curhat")) || [];
    data.push({ user: user, text: input.value });
    localStorage.setItem("curhat", JSON.stringify(data));

    input.value = "";
}