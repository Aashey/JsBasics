// Immediately Invoked Function Expressions (IIFE)

(function chai() {
  console.log(`DB CONNECTED`);
})(); //! name IIFE

/*
 * 1)IIFE helps avoid global scope pollution
 * 2)IIFE helps create a new scope for the code within them which helps to exncapsulate funtionality and data.
 * 3)In summary, IIFEs are a powerful pattern in JavaScript that help manage scope,
 * encapsulate code, prevent global variable conflicts, and ensure that initialization
 * code is executed immediately. They provide a mechanism for writing cleaner, more modular, and maintainable code.
 */

((name) => {
  console.log(`Hello ${name}`);
})("Aam"); //! unnamed IIFE
