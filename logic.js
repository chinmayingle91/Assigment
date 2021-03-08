//  Declare array of for appendig no. of elements
let = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Get element  
let getElement = document.getElementById('item');

// Add elements and added class to every element
arr.forEach((nodes, i) => {
    let newElement = document.createElement('div');
    getElement.appendChild(newElement);
    newElement.classList.add("grid-item-" + (i + 1));
    newElement.classList.add("box");
    newElement.innerHTML = nodes;
})

// Shuffles element
function shuffleElements() {
    for (let i = arr.length - 1; i > 0; i--) {
        getElement.appendChild(getElement.children[Math.floor(Math.random() * (i + 1))])
    }
}

//sort the elements
function sortElements() {
 [...getElement.children]
        .sort((a, b) => Number(a.innerText) > Number(b.innerText) ? 1 : -1)
        .forEach(node => getElement.appendChild(node));
}
