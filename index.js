// code your solution here
function saturdayFun(Activity = "roller-skate"){
    return `This Saturday, I want to ${Activity}!`
}
function mondayWork(Activity = "go to the office"){
    return `This Monday, I will ${Activity}.`
}
function wrapAdjective(flair = "*"){
    return function (rotich="special"){
        return `You are ${flair}${rotich}${flair}!`
    }
}
    
