function executar(fn) {
    if (typeof fn === "function")
        console.log(fn(2, 10));
}

function somar(a, b) {
    return a + b
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

executar(subtrair);
executar(somar);
executar(multiplicar)