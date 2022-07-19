//Declare button constants
const addBtn = document.querySelector('#addBtn');

//Create button click event
addBtn.addEventListener('click', () => {
//Creates this: <li>[text]</li>
function createListItem (text) {
    var li = document.createElement('li');
    const addInput = document.querySelector('#addInput').value;



    li.textContent = addInput;
    return li;
}

//Append each child element to the parent in a loop
function appendChildren (parent, children) {
    children.forEach(function (child) {
        parent.appendChild(child);
    });
}

    //Define the parent
    var myList = document.getElementById('myList');

    var li = document.createElement('li');

    //Define an array of child elements
    var items = [
        createListItem()
        
    ];

    addInput.value = "";
    appendChildren(myList, items);


});
