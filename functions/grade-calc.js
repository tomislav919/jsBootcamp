// Students score, total possible score
// 15/20 -> you got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let scoreCalc = function (studentScore, totalScore)
{
    let score = (studentScore / totalScore) * 100
    let grade = ''

    if (score > 100){
        return `You got an error, score is ${score}%`
    } else if (score >= 90){
        grade = 'A'
    } else if (score >= 80){
        grade = 'B'
    } else if (score >= 70){
        grade = 'C'
    } else if (score >= 60){
        grade = 'D'
    } else if (score >= 0 && score <= 59){
        grade = 'F'
    } else {
        return `You got an error, score is ${score}%`
    }

    return `You got an ${grade} (${score}%)!`
}

console.log(scoreCalc(20,20))
console.log(scoreCalc(15,20))
console.log(scoreCalc(0,20))
console.log(scoreCalc(12,20))
console.log(scoreCalc(23,20))
console.log(scoreCalc(-13,20))