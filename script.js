function ageFromYearsToMonths(){
    const yourYears = document.getElementById('age').value;
    const totalMonths = Number(yourYears) * 12
    return totalMonths
    
}
function showAgeInMonths(){
    const ageInMonths = document.getElementById('age-in-months').textContent = `You are ${ageFromYearsToMonths()} months old`
    return ageInMonths
}
document.getElementById('form').addEventListener('submit', function(stopReload){
    stopReload.preventDefault()
    showAgeInMonths()

    const yourName = document.getElementById('username').value
    

    const age = Number(document.getElementById('age').value)
    personalizedGreeting(yourName, age);
    motivationalQuote(age);
    adultOrNot(age)
});

//welcome message
function personalizedGreeting(yourName, age){
    const personalGreetings = document.getElementById('greetings');
    const theGreetings = [
        `We are now Running on emergency backup power`,
        `You Are AUTHORIZED to access this area`,
        `For You Sir Always`,
        `I know that's not your age`
    ];
    let personaGreet = '';
    if ( age <0 || age > 120) {
        personaGreet = theGreetings[3];
    } else if (age <18 ){
        personaGreet = theGreetings[0];
    } else if(age <=50){
        personaGreet = theGreetings[1];
    }else {
        personaGreet = theGreetings[2];
    }
     personalGreetings.textContent = `Hello ${yourName}, ${personaGreet}`
}

//adult or not
function adultOrNot(age){
    const childAdult = document.getElementById('adult-section');
    let adultContentAge = '';
    if (age < 18){
        adultContentAge = 'You are too young for Adult content'
    }else {
        adultContentAge = 'You can access adult content'
    }
    childAdult.textContent = adultContentAge;
}

//loop quote
function motivationalQuote(age){
    const theQuotes = [
        `Patience Is the key you'll get there eventually`,
        `Life is a blockbuster direct it with passion`,
        `Wisdom, is the director`,
        `You Should Not Exist`
    ];
    let whichQuote = '';
    if (age <0 || age > 120) {
        whichQuote = theQuotes[3];
    } else if (age <18 ){
        whichQuote = theQuotes[0];
    } else if(age <=50){
        whichQuote = theQuotes[1];
    }else {
        whichQuote = theQuotes[2];
    }
    const repeatFive = `${whichQuote}<br>`.repeat(5);
    document.getElementById('motivational-quote').innerHTML = repeatFive;
}