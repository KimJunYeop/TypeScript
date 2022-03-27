"use strict";
let userInput;
let userName;
userInput = 5;
userInput = 'Max';
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
const result = generateError('An error occured!', 500);
console.log(result);
//# sourceMappingURL=app.js.map