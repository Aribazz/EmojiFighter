let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")
let count = 0

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

function sortFruit() {
    for(let i = 0;i<fruit.length;i++){
        if(fruit[i] === "🍎"){
            count +=1
            console.log(count)
            appleShelf.textContent = appleShelf.textContent + "🍎"
        }else if(fruit[i] === "🍊"){
            count ++
            console.log(count)
            orangeShelf.textContent += "🍊"
        }
    }
}
sortFruit()
