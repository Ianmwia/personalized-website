function ageFromYearsToMonths(){
    const yourYears = document.getElementById('age').value;
    const totalMonths = Number(yourYears) * 12
    return totalMonths
    
}
function showAgeInMonths(){
    const ageInMonths = document.getElementById('age-in-months').textContent = `Your age in months is ${ageFromYearsToMonths()}`
    return ageInMonths
}
document.getElementById('form').addEventListener('submit', function(stopReload){
    stopReload.preventDefault()
    showAgeInMonths()
});