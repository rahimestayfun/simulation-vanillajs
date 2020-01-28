document.getElementById('btn').addEventListener('click',addFunc);
let expenseTotal= document.querySelector('.total');
let total = 0;

function addFunc(e){
e.preventDefault();

let billNameInput = document.getElementById('name').value;
let billAmountInput = document.getElementById('amount').value;
total += +billAmountInput;
// console.log(total);
expenseTotal.innerText = total;

let newExpense = document.createElement('li');
let deleteButton = document.createElement('IMG');
deleteButton.setAttribute('src', './assets/trash_can.svg');
deleteButton.setAttribute('width','18px');
deleteButton.setAttribute('height','18px');

newExpense.innerHTML = `${billNameInput}: $<span>${billAmountInput}</span>`;


let expenseList = document.querySelector('.expense-list');
newExpense.append(deleteButton);
expenseList.append(newExpense);

deleteButton.addEventListener('click',function removeFunc(e){
    // console.log(total);
    let num = +e.target.previousSibling.innerText;
    total-= num;
    expenseTotal.innerText = total;
    e.target.parentNode.remove();
});

// console.log(expenseList)
};



