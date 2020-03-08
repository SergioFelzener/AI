function EhPrimo(userInput) {
    var primo = 0;
    for (var cont = userInput; cont >= 1; cont--) {
        if (userInput % cont == 0) {
            primo++;
        }
    }
    if (primo == 2) {
        return "O número é primo";
    }
    else {
        return "O número não é primo";
    }
}
console.log(EhPrimo(673));
