import { readRecords } from "./solution.ts"

const records = await readRecords({ filePath: "./day1/data" })

const numbers = records.map(numbers => {
    return numbers.reduce((acc, number) => acc + number, 0)
})

const elfMostCaloriesHas = Math.max(...numbers)

const top3mostCalories = numbers.sort((a, b) => b - a).splice(0, 3).reduce((acc, number) => acc + number, 0)

console.log({
    top3mostCalories,
    elfMostCaloriesHas,
})
