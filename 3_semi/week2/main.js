const memoContainer = document.getElementById("memo-container")
const addButton = document.getElementById("add-button")
const addText = document.getElementById("add-text")
let memos = ["abc", "cde"]
if (localStorage.memos) {
  const memosJson = localStorage.memos
  memos = JSON.parse(memosJson)
}
addButton.onclick = function() {
  //console.dir(addText.value)
  let text = addText.value
  memos.push(text)
  localStorage.memos = JSON.stringify(memos)
  //メモを消す
  memoContainer.textContent = ""
  for (let i = 0; i < memos.length; i++) {
    const text = memos[i]
    const div = document.createElement("div")
    div.textContent = text
    memoContainer.append(div)
    //console.log(memos)
  }
}

for (let i = 0; i < memos.length; i++) {
  const text = memos[i]
  const div = document.createElement("div")
  div.textContent = text
  memoContainer.append(div)
  //console.log(element)
}
