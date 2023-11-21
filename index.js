const detailsForm = document.getElementById("details");
const getdata = () => {
        return JSON.parse(localStorage.getItem("detailsU")) || [];
}
let entries = getdata();
const displayData = () => {
    console.log(getdata());
    const tableEntries = getdata().map(({ name, email, password, dob, accepted }) =>
    `<tr><td>${name}</td><td>${email}</td><td>${password}</td><td>${dob}</td><td>${accepted}</td></tr>`
    ).join("\n");

    document.getElementById("user-entries").innerHTML =
    `<table ><tr ><th>Name</th><th>Email</th><th>Password</th><th>Dob</th><th>Accepted terms?</th></tr>${tableEntries}</table>`;
};
const finalDetails = (event) => {
event.preventDefault();

const name = document.getElementById("username").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const dob = document.getElementById("dob").value;
const accepted = document.getElementById("accept").checked;
const entryData = { name, email, password, dob, accepted };
entries.push(entryData);
localStorage.setItem("detailsU", JSON.stringify(entries));
displayData();
};
detailsForm.addEventListener('submit', finalDetails);
displayData();
