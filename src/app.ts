let userInput: unknown;
let userName: string;


userInput = 5;
userInput = 'Max';

function generateError(message: string, code:number) {
  throw {message: message, errorCode: code};
}

const result = generateError('An error occured!', 500);
console.log(result);