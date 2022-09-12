const minhaArray = ["Bahia", "Sport", "Palmeiras", "Flamengo", "Santa Cruz"];

let posicao = 1; 

for (let i = 0; i<minhaArray.length; i++){
    console.log(`${posicao} - ${minhaArray[i]}`)
    posicao++ 
}

console.log("--------")
for (let i = 0; i<minhaArray.length; i++){
    console.log(`${i + 1} - ${minhaArray[i]}`) 
}