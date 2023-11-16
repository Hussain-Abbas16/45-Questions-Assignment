
function makeShirt (size: string = "Large", message: string = "I love TypeScript"): void

{

return console.log(`Size: ${size}, Message: '$ {message}'`);

}

// Large shirt with default message

 makeShirt(); 
//   Output: Size: Large, Message: 'I love TypeScript'

// Medium shirt with default message
 makeShirt("Medium"); 
 Output: Size: 'Medium'; 
 Message: 'I love TypeScript'

// Custom shirt with a different message and size 
makeShirt("Small", "Hello, TypeScript!");
 // Output: Size: Small, Message: 'Hello, TypeScript!'