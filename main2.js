//set de starting string to be empty(empty input)
let string = '';
let buttons = document.querySelectorAll('.button');
//after selecting all de buttons, then loop 2ru each of de buttons
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            //if '=' is clicked, de string will be equal to de calculated input using 'eval()'
            string = eval(string);
            //to display the string in de input box
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML === 'C'){
            //if C is clicked on, the string should be empty
            string = '';
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target);
            //string is now equal to de empty string + de clicked element
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
            }

        
    })
})