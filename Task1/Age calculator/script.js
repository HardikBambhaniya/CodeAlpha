const input = document.querySelector('#date');
const button = document.querySelector('#btn');
const output = document.querySelector('#output');

const calculateAge = () => {
    const birthDate = new Date(input.value);
    const today = new Date();
    
   if(birthDate > today){
    alert('Enter Valid Date');
    output.innerText = 'Find Your Age';
    return;
   }
   
   let yearDifference = today.getFullYear() - birthDate.getFullYear();
   let monthDifference = today.getMonth() - birthDate.getMonth();
   let dayDifference = today.getDate() - birthDate.getDate();

   // Adjust yearDifference if birth date has not occurred yet this year
   if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
       yearDifference--;
   }

   if (yearDifference < 1) {
       output.innerText = "Your age is less than a year";
   } else {
       output.innerText = `You are ${yearDifference} years old`;
   }
}

button.addEventListener('click', calculateAge);