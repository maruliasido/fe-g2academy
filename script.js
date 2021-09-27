const section1 = document.querySelector("#registration");
const section2 = document.querySelector("#list-user");


// const person = [{
//     nama: namee,
//     username: username,
//     jenisKelamin: jk,
//     agama: agama,
//     hobi: [hobies]
// }]

const register = document.querySelector(".btn1");
register.addEventListener("click", function () {
    const namee = document.querySelector("#nama").value;
    const username = document.querySelector("#username").value;
    const jk = document.querySelector("[name='jk']:checked")?.value;
    const agama = document.querySelector("#agama").value;
    const hobies = document.querySelectorAll("[type='checkbox']:checked")?.values;

    section1.style.display = "none";
    section2.style.display = "block";

    let hobiSatuan;
    for (let i = 0; i < hobies.lengtd; i++) {
        hobiSatuan = hobies[i];
        console.log(hobiSatuan)
    }


    let person = []

    let orang = {
        nama: namee,
        username: username,
        jenisKelamin: jk,
        agama: agama,
        hobi: hobies[0]
    }

    person.push(orang)



    for (let i = 0; i < person.length; i++) {
        const user = person[i];
        document.querySelector("table>tbody").innerHTML += `
        <tr>
            <td>${i + 1}</td>
            <td>${user.nama}</td>
            <td>${user.username}</td>
            <td>${user.jenisKelamin}</td>
            <td>${user.agama}</td>
            <td>${user.hobiSatuan}</td>
        </tr>`
    }
    // person.push(orang)


})

const back = document.querySelector(".btn2");

back.addEventListener("click", function () {
    section1.style.display = "flex";
    section1.style.flexDirection = "column";
    section2.style.display = "none";
})



