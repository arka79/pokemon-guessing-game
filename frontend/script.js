const image = document.getElementById('pokemon-image');
const buttons = document.querySelectorAll('.option-button');
let correctPokemon = "";

async function loadNewQuestion() {
    image.classList.remove('revealed');
    buttons.forEach(btn => {
        btn.disabled = false;
        btn.classList.remove('correct', 'wrong');
    });

    try {
        const response = await fetch('http://localhost:3000/api/new-pokemon');
        const data = await response.json();

        correctPokemon = data.name;
        image.src = data.image;

        data.options.forEach((optionName, index) => {
            buttons[index].innerText = optionName;
            buttons[index].onclick = () => checkAnswer(optionName, buttons[index]);
        });
    } catch (error) {
        console.error("Backend not reachable:", error);
    }
}

function checkAnswer(guess, btn) {
    buttons.forEach(b => b.disabled = true);
    
    image.classList.add('revealed');


    if (guess === correctPokemon) {
        btn.classList.add('correct');
    } else {
        btn.classList.add('wrong');
        // Highlight the right answer so the user learns
        buttons.forEach(b => {
            if(b.innerText.toLowerCase().trim() === correctPokemon.toLowerCase().trim()) b.classList.add('correct');
        });
    }

    // Wait 2.5 seconds and load next round
    setTimeout(loadNewQuestion, 2000);
}

// Initial Call
loadNewQuestion();