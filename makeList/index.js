import { inputA, makeAdultNameList, makeChildNameList } from "./makeNameList.js"

const adultsElement = document.querySelector('#adultlist')
const childsElement = document.querySelector('#childlist')

adultsElement.innerHTML = makeAdultNameList(inputA)
childsElement.innerHTML = makeChildNameList(inputA)