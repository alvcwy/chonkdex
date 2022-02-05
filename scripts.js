//run script after loading entire DOM
document.addEventListener('DOMContentLoaded', function(){

    //dark mode/light mode button
    let body = document.querySelector('body')
    let mode = document.querySelector('#mode')
    mode.addEventListener('click', function() {
        if (mode.innerHTML == 'Light mode') { //if in dark mode, switch to light mode
            body.style.backgroundColor = 'white';
            body.style.color = 'black';
            mode.innerHTML = 'Dark mode'
        }
        else if (mode.innerHTML == 'Dark mode'){ //switch from light to dark
            body.style.backgroundColor = 'black';
            body.style.color = 'white';
            mode.innerHTML = 'Light mode'
        }
    })

    //code for quiz page
    document.querySelector('#submit').addEventListener('click', function() {
        let input = document.querySelector('#answer');

        //if correct, update 'Who's that Pokemon?' image
        if (input.value === 'Chonk' || input.value === 'chonk' || input.value === 'Pikachu' || input.value === 'pikachu') {
            input.style.backgroundColor = 'green';
            document.querySelector('#hint').innerHTML = 'You did it!';
            document.querySelector('#fat').style.display = 'inline-block';
            document.querySelector('#mudkip').style.display = 'none';
            document.querySelector('#quiz').src = 'images/quiz_answer.png';
        }

        //if incorrect, give hint
        else {
            input.style.backgroundColor = 'red';
            document.querySelector('#hint').innerHTML = 'Hint: Gen 3 starter?';
            document.querySelector('#mudkip').style.visibility = 'visible';
        }
    })

})