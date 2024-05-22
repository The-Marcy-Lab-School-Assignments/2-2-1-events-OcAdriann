const addByOne = () => {
    const button = document.querySelector("#add-one")
    const string = document.querySelector("#results")
    let result = Number(string.textContent)
    result += 1
    string.textContent = result
}
const button = document.querySelector("#add-one")
button.addEventListener("click", addByOne)