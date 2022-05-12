
function makeAdultNameList(inputA){
  let array = [];
  let result = "";
  array = inputA.filter(i => i.age >= 20);
  console.log(array);
  array.forEach(arr => {
      result +=`<li>${arr.name}</li>`;
  })
  return result;
  
}

function makeChildNameList(inputA){
  let array = [];
  let result = "";
  array = inputA.filter(i => i.age < 20);
  console.log(array);
  array.forEach(arr => {
      result +=`<li>${arr.name}</li>`;
  })
  return result;
}


var inputA = [{
name: "박태환",
age: 35
}, 
{
name: "유재석",
age: 49
},
{
name: "김강훈",
age: 12
},
{
name: "최태민",
age: 15
},
{
name: "이바람",
age: 52
},
{
name: "이지원",
age: 15
}]

export { inputA, makeAdultNameList, makeChildNameList }