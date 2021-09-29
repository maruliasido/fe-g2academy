var id = "admin";
var password = "admin";

let users = [];
let indexData = "";


//pilih menu nav-bar
//remove class "selected" jika ada
//tambahkan class "selected" pada target kemidian
//higlihted navbar
const selectMenu = (selector) => {
    let menus = document.querySelectorAll(".menu");
    for (let i = 0; i < menus.length; i++) {
        const menu = menus[i];
        menu.classList.remove("selected");
    }

    document.querySelector(`[data-menu='${selector}']`)?.classList.add("selected");
    changeContent(selector);
}

//hapus dulu semua elemen menu yang punya attribut show
//select data-section-content sesuai dengan params selector
const changeContent = (selector) => {
    let menus = document.querySelectorAll("[data-section-content]");
    menus.forEach(menu => menu.classList.remove("show"));
    document.querySelector(`[data-section-content='${selector}']`)?.classList.add("show");
}

//tangkap attribut dari event yang di-klik
const addEvent = async () => {
    document.addEventListener("click", e => {
        if (e.target.getAttribute("data-menu")) {
            const dataMenu = e.target.getAttribute("data-menu");
            changeContent(dataMenu);
            // selectMenu(dataMenu);
        } else if (e.target.getAttribute("submit-user")) {
            saveData();
        } else if (e.target.getAttribute("login")) {
            aut();
        } else if (e.target.getAttribute("add-list")) {
            changeContent("register");
        } else if (e.target.getAttribute("update")) {
            updateData();
            changeContent("list-user")
        } else if (e.target.getAttribute("refresh")) {
            fetchAPI()
            changeContent("list-user")
        }

    })
}

const aut = async () => {
    var userId = document.querySelector("#username").value
    var passwordUser = document.querySelector("#password").value
    if (userId == id && password == passwordUser) {
        changeContent("list-user");
    } else {
        alert("password salah");
    }
}
const updateUserList = () => {

    document.querySelector("table>tbody").innerHTML = "";

    //insert element ke table
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        document.querySelector("table>tbody").innerHTML += `
        <tr>
            <td>${i + 1}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.address}</td>
            <td><input type="button"  value="Update" onclick="setIndex(${i})" index-edit="${i}"></td>
            <td><input type="button" value="Delete" onclick="deleteData(${i})" ></td>

        </tr>`
    }
}
const saveData = () => {
    const name = document.querySelector("#nama").value
    const username = document.querySelector("#username2").value
    const email = document.querySelector("#email").value
    const address = document.querySelector("#address").value
    users.push({
        name: name,
        username: username,
        email: email,
        address: address
    })

    updateUserList();
    changeContent("list-user");

}



let setIndex = (indexStr) => {
    changeContent("edit");
    indexData = indexStr;
}

const updateData = () => {
    let index = parseInt(indexData);
    const name = document.querySelector("#edit-nama").value
    const username = document.querySelector("#edit-username").value
    const email = document.querySelector("#edit-email").value
    const address = document.querySelector("#edit-address").value

    users.splice(index, 1, {
        name: name,
        username: username,
        email: email,
        address: address
    });
    updateUserList()
}

const deleteData = (indexStr) => {
    index = parseInt(indexStr)
    users.splice(index, 1);
    updateUserList()
    changeContent("list-user");


}

const fetchAPI = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => { users = json })
        .then(updateUserList())
}




fetchAPI()
addEvent();
