const num =[5,8,4]// vetor com 3 elementos
num.push(1)//adiciona um elemento e o ()adiciona o numero
num.push(10)
num.sort()//coloca os numeros em ordem
console.log(`os numeros no vetor sao ${num}`)
console.log(`o vetor tem ${num.length} posicoes `)
console.log(`o primeiro valor do vetor é ${num[0]} `)

for (let pos=0;pos<num.length;pos++){
    console.log(num[pos])
}