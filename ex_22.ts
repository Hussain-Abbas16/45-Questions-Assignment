// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

//function to create a fruit object
function fruitList(name: string, color: string, 
    taste: string) {
        return{
            name,
            color,
            taste,
        };
        }
    // craete an array
    const fruits = [
        fruitList("apple","red","sweet"),
        fruitList("orange","orange","citrusy"),
        fruitList("strawberry","red","sweet"),
        fruitList("chicku","brown","sweet"),
        
    ];
    
    //access an invalid index
    const invalidIndex = 10; // there are only 5
    console.log(`fruits at index ${invalidIndex}:`,fruits[invalidIndex]);
    
    // print the fruits
    fruits.forEach((fruit) => {
        console.log(`name: ${fruit.name}, color: ${fruit.color},taste: ${fruit.taste}`);
        
    });
    export{};
    