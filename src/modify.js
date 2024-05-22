// These are your event handlers
const clickCounterHandler = (event) => {
  event.target.dataset.clicks++

  if(event.target.dataset.clicks === '1') {
    event.target.textContent = `I've been clicked 1 time.`
  } else {
    event.target.textContent = `I've been clicked ${event.target.dataset.clicks} times!`
  }
};

const handleKeydown = (event) => {
  const key = document.querySelector("#keydown-tracker")
  key.textContent = `You pressed ${event.code}`
};

const clickCounterHandler2 = (event) => {
  event.target.dataset.clicks++
  if(event.target.dataset.clicks === '1') {
    event.target.textContent = `I've been clicked 1 time.`
  } else {
    event.target.textContent = `I've been clicked ${event.target.dataset.clicks} times!`
  }
};

// We've started this one for you
const handleDelegation = (event) => {
  const resultSpan = document.querySelector('#delegation-result');
  if(event.target.matches('button')) {
    resultSpan.textContent = event.target.textContent;
  }
};

const addNewRandomNumber = () => {
  const ul = document.querySelector("#random-numbers")
  const li = document.createElement("li")
  const Num = Math.floor(Math.random() * 100) + 1
  li.textContent = Num
  ul.append(li)
};


// Select the elements and attach your event handlers inside main
const main = () => {
  const delegationContainer = document.querySelector('#delegation');
  delegationContainer.addEventListener('click', handleDelegation);

  const click = document.querySelector("#click-button")
  click.addEventListener("click", clickCounterHandler)

  document.body.addEventListener("keydown", handleKeydown) 

  const click2 = document.querySelector("#inline-example")
  click2.addEventListener("click", clickCounterHandler2)

  const randomNum = document.querySelector("#add-random-num")
  randomNum.addEventListener("click", addNewRandomNumber)

  const removeButton = document.querySelector("#remove")
  removeButton.addEventListener("click", () => {
    delegationContainer.removeEventListener('click', handleDelegation)
  })
};

main();
