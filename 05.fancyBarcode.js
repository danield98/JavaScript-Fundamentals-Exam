function solve(input) {
    input.shift();

    let regex = /(@#+)([A-Z][A-Za-z\d]{4,}[A-Z])(@#+)/;

    input.forEach(line => {
        if (regex.test(line)) {
            let tokens = regex.exec(line);
            let barcode = tokens[2];
            let numbers = [...barcode]
                .filter(symbol => /\d/.test(symbol))
                .join(``);

            let productGroup = numbers === ``
                ? `00`
                : numbers;
                console.log(`Product group: ${productGroup}`);
        } else {
            console.log(`Invalid barcode`);
        }
    })
}

solve([3,
    `@#FreshFisH@#`,
    `@###Brea0D@###`,
    `@##Che4s6E@##`
])