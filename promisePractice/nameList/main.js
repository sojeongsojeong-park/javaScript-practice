const HOST_URL = "https://jsonplaceholder.typicode.com";

const tbody = document.querySelector("table tbody");

async function getUser(){

  let res = await fetch(`${HOST_URL}/users`);
  let datas = await res.json();

  let count = 1;
  for(let user of datas) {
    const tr = document.createElement("tr");
    const thNum = document.createElement("th")
    const textNum = document.createTextNode(count++);

    thNum.appendChild(textNum);
    tr.appendChild(thNum);

    tr.innerHTML += `<td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.company.name}</td>`
    
    tbody.appendChild(tr);
  }
}
getUser()

async function insertUser(data){
  const res = await fetch(`${HOST_URL}/users`, {
    method:'POST',
    body: JSON.stringify(data),
    headers:{
      'Content-type' : 'application/json; charset=UTF-8'
    }
  });
  const insertData = await res.json();

  if("id" in insertData) {
    const rows = tbody.getElementsByTagName("tr");
    const lastRowsNum = rows[rows.length - 1].querySelector("th").innerText;

      const tr = document.createElement("tr");
      const thNum = document.createElement("th");
      const textNum = document.createTextNode(Number(lastRowsNum) + 1);
      thNum.appendChild(textNum);
      tr.appendChild(thNum);

      const tdName = document.createElement("td");
      const textName = document.createTextNode(data.name);
      tdName.appendChild(textName);
      tr.appendChild(tdName);

      const tdEmail = document.createElement("td");
      const textEmail = document.createTextNode(data.email);
      tdEmail.appendChild(textEmail);
      tr.appendChild(tdEmail);

      const tdCompany = document.createElement("td");
      const textCompany = document.createTextNode(data.company);
      tdCompany.appendChild(textCompany);
      tr.appendChild(tdCompany);

      tbody.appendChild(tr);
  }
}

const addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const company = document.getElementById("company").value;

  insertUser({
    name: name,
    email: email,
    company: company,
  });
});

function deleteUser(deleteId){
  const rows = document.querySelectorAll("tBody tr");

  for(let row of rows) {
    const id = row.querySelector("th").innerText;
    if(id == deleteId) {
      tbody.removeChild(row);
    }
  }


}

const deleteBtn = document.getElementById("delete-btn");
deleteBtn.addEventListener("click", () => {
  const deleteId = document.getElementById("delete-id").value;
  deleteUser(deleteId);
})