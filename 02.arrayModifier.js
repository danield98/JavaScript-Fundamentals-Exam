function solve(input) {
    let numbers = input.shift()
        .split(` `)
        .map(x => Number(x));

    for (const inputLine of input) {
       let inputElements = inputLine.split(` `);
       let command = inputElements[0];

       if(command === `end`) {
           break;
       }

       if(command === `swap`) {
           let firstIndex = Number(inputElements[1]);
           let secondIndex = Number(inputElements[2]);

           let temp = numbers[firstIndex];
           numbers[firstIndex] = numbers[secondIndex];
           numbers[secondIndex] = temp;
       } else if (command === `multiply`) {
        let firstIndex = Number(inputElements[1]);
        let secondIndex = Number(inputElements[2]);
        numbers[firstIndex] *= numbers[secondIndex];
       } else {
           numbers = numbers.map(num => num - 1);
       }
    }

    console.log(numbers.join(`, `));
}
solve([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);