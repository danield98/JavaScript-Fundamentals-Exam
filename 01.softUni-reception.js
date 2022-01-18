function solve(input) {
    let [firstEmployee, secondEmployee, thirdEmployee, students] = input.slice().map(x => Number(x));
    let studentsPerHour = firstEmployee + secondEmployee + thirdEmployee;
    let hours = 0;
    let answeredStudents = 0;

    while (answeredStudents < students) {
        if (hours % 4 === 0 && hours !== 0) {
            hours++;
            continue;
        }
        answeredStudents += studentsPerHour;
        hours++;
    }

    if (hours % 4 === 0 && hours !== 0) {
        hours++;
    }
    console.log(`Time needed: ${hours}h.`);
}

solve([`1`, `2`, `3`, `45`]);