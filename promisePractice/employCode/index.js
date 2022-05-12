const button = document.getElementById("buttonSubmit");
const input = document.getElementById("selectEmployeeCode");
const p = document.getElementById("employeeEmail");


function matching(datas){
  const employee = datas.Employees
  const finding = employee.find(data => data.employeeCode === input.value)
  p.innerHTML = finding.emailAddress;
  console.log(employee)
}

button.addEventListener("click", function(e){
  e.preventDefault();
  fetch("employ.json")
      .then(res => res.json())
      .then(matching)
})
