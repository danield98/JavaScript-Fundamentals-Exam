function solve(inputLine) {
    let numbers = inputLine.split(` `)
        .map(x => Number(x))
    let average = numbers.reduce((previous, current) => previous + current, 0) / numbers.length;
    let filtered = numbers.filter(num => num > average);
    let sorted = filtered.sort((a, b) => b - a);
    let firstFive = sorted.slice(0, 5);
    
    if(firstFive.length === 0) {
       console.log(`No`);
    } else {
        console.log(firstFive.join(` `));
    }
}

solve('10 20 30 40 50');