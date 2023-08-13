function executa(){
    if (verifyday()=='invalid'||verifymonth()=='invalid'||verifyyear()=='invalid'){
    }else{
        let input_day = parseInt(document.getElementById('input_day').value, 10);
        let input_month = parseInt(document.getElementById('input_month').value, 10)-1;
        let input_year = parseInt(document.getElementById('input_year').value, 10); 
        let diaInput = new Date(input_year,input_month,input_day)
        exactAge(diaInput)
    }

}

function altera(){

}

function exactAge(birthdate) {
    let startDate = new Date(new Date(birthdate).toISOString().substr(0, 10));
    const endingDate = new Date().toISOString().substr(0, 10); // YYYY-MM-DD
    let endDate = new Date(endingDate);
    if (startDate > endDate) {
      const swap = startDate;
      startDate = endDate;
      endDate = swap;
    }
    const startYear = startDate.getFullYear();
  
    // Leap years
    const february = (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0 ? 29 : 28;
    const daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    var yearDiff = endDate.getFullYear() - startYear;
    var monthDiff = endDate.getMonth() - startDate.getMonth();
    var dayDiff = endDate.getDate() - startDate.getDate();
  
    if (monthDiff < 0) {
      yearDiff--;
      monthDiff += 12;
    }
  
    if (dayDiff < 0) {
      if (monthDiff > 0) {
        monthDiff--;
      } else {
        yearDiff--;
        monthDiff = 11;
      }
      dayDiff += daysInMonth[startDate.getMonth()];
    }
    console.log(yearDiff)
    document.getElementById('year-display').innerHTML = yearDiff;
    document.getElementById('month-display').innerHTML = monthDiff;
    document.getElementById('days-display').innerHTML = dayDiff;
    return {
      years: yearDiff,
      months: monthDiff,
      days: dayDiff,
    };

  }


function verifyday(){
    let input_day = parseInt(document.getElementById('input_day').value, 10); 
    if (input_day < 1 || input_day > 31 || !Number.isInteger(input_day)) {
        invalidday();
        return 'invalid'
    }else{
        validday();
        return 'valid'  
    }
}

function verifymonth(){
    let input_month = parseInt(document.getElementById('input_month').value, 10); 
    if (input_month < 1 || input_month > 12 || !Number.isInteger(input_month)) {
        invalidmonth();
        return 'invalid'
    }else{
        validmonth();  
        return 'valid'
    }
}

function verifyyear(){
    let input_year = parseInt(document.getElementById('input_year').value, 10); 
    let anoAtual = new Date().getFullYear();
    if (input_year < 0 || input_year > anoAtual || !Number.isInteger(input_year)) {
        invalidyear();
        return 'invalid'
    }else{
        validyear();  
        return 'valid'
    }
}



function invalidday(){
    document.getElementById('day-title').style.color='#FF5959';
    document.getElementById('invalid-day').classList.remove('invalid-hidden');
    document.getElementById('input_day').classList.add('invalid-border');
}
function validday(){
    document.getElementById('day-title').style.color='#716F6F';
    document.getElementById('invalid-day').classList.add('invalid-hidden');
    document.getElementById('input_day').classList.remove('invalid-border');
}

function invalidmonth(){
    document.getElementById('month-title').style.color='#FF5959';
    document.getElementById('invalid-month').classList.remove('invalid-hidden');
    document.getElementById('input_month').classList.add('invalid-border');
}
function validmonth(){
    document.getElementById('month-title').style.color='#716F6F';
    document.getElementById('invalid-month').classList.add('invalid-hidden');
    document.getElementById('input_month').classList.remove('invalid-border');
}

function invalidyear(){
    document.getElementById('year-title').style.color='#FF5959';
    document.getElementById('invalid-year').classList.remove('invalid-hidden');
    document.getElementById('input_year').classList.add('invalid-border');
}
function validyear(){
    document.getElementById('year-title').style.color='#716F6F';
    document.getElementById('invalid-year').classList.add('invalid-hidden');
    document.getElementById('input_year').classList.remove('invalid-border');
}


