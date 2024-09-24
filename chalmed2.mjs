import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let berekenen

let geboortejaar = await userInput.question('Wat is je geboortejaar? ')

let toekomstjaar = await userInput.question('Welke jaar wilt u berekenen? ')

berekenen = toekomstjaar - geboortejaar 

console.log("In","",toekomstjaar ,"zal ik",+berekenen,"jaar oud zijn.")

