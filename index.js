//DOM要素取得
const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");


// メソッド
async function getUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    return users;
}

async function listUsers() {
    const users = await getUsers();
    users.forEach(addList);
}

function addList(user) {
    const list = document.createElement("li");
    list.innerText = user.address.zipcode;
    lists.appendChild(list);
}

//　イベント
window.addEventListener("load", listUsers);
button.addEventListener("click", listUsers);