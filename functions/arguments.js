// Multiple arguments
let add = function (a, b, c)
{
    let result = a + b + c
    return result
}

let result = add(10, 1, 5)
console.log(result)

// Default arguments
let getScoreText = function (name = 'Anonymous', score = 0)
{
    return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

// Challange area

let getTip = function (total, tipPercent = .20)
{
    totalTip = total * tipPercent
    billWithTip = total + totalTip
    return 'Bill: ' + total + ' - tip: ' + totalTip + ' - Bill + tip: ' + billWithTip
}

console.log(getTip(100))
console.log(getTip(80, 0.30))
console.log(getTip(50, 0.15))


