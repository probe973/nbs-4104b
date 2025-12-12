// assets/js/scripts.js

/**
 * ACCESSIBLE SOLUTION TOGGLE
 * Handles opening/closing the solution box and updating screen reader state.
 */
function toggleSolution(solutionId, btnElement) {
    const solutionElement = document.getElementById(solutionId);
    
    if (!solutionElement) return;

    // Check if currently hidden
    if (solutionElement.style.display === "none" || solutionElement.style.display === "") {
        // Show it
        solutionElement.style.display = "block";
        
        // Update button text and ARIA state
        if (btnElement) {
            btnElement.textContent = 'Hide Solution';
            btnElement.setAttribute("aria-expanded", "true");
        }
    } else {
        // Hide it
        solutionElement.style.display = "none";
        
        // Update button text and ARIA state
        if (btnElement) {
            btnElement.textContent = 'Show Solution';
            btnElement.setAttribute("aria-expanded", "false");
        }
    }
}

/**
 * ACCESSIBLE NUMERICAL CHECK
 * Updates visual classes AND aria-invalid state.
 */
function checkNumericalAnswer(id, correctAnswer, toleranceStr) {
    const inputElement = document.getElementById(`input-${id}`);
    const feedbackElement = document.getElementById(`feedback-${id}`);
    const userAnswer = parseFloat(inputElement.value);
    const correct = parseFloat(correctAnswer);
    const tolerance = parseFloat(toleranceStr);

    // Reset state
    feedbackElement.classList.remove('feedback-correct', 'feedback-incorrect');
    feedbackElement.textContent = ''; 
    inputElement.setAttribute('aria-invalid', 'false'); // Reset accessibility state

    if (isNaN(userAnswer)) {
        feedbackElement.textContent = 'Please enter a number.';
        feedbackElement.classList.add('feedback-incorrect');
        inputElement.setAttribute('aria-invalid', 'true'); // Flag error to screen reader
        return;
    }

    if (Math.abs(userAnswer - correct) <= tolerance) {
        feedbackElement.textContent = 'Correct!';
        feedbackElement.classList.add('feedback-correct');
        // valid state remains false (not invalid)
    } else {
        feedbackElement.textContent = 'Incorrect. Try again!';
        feedbackElement.classList.add('feedback-incorrect');
        inputElement.setAttribute('aria-invalid', 'true'); // Flag error to screen reader
    }
}

/**
 * ACCESSIBLE MULTIPLE CHOICE CHECK
 * Updates visual classes AND aria-invalid state on the selected radio button.
 */
function checkMultipleChoice(id, correctAnswer) {
    const formElement = document.getElementById(`form-${id}`);
    const feedbackElement = document.getElementById(`feedback-${id}`);
    const selectedOption = formElement.querySelector(`input[name="choice-${id}"]:checked`);
    
    // Clear previous states from ALL options in this group
    const allOptions = formElement.querySelectorAll(`input[name="choice-${id}"]`);
    allOptions.forEach(opt => {
        opt.setAttribute('aria-invalid', 'false');
    });

    feedbackElement.classList.remove('feedback-correct', 'feedback-incorrect');
    feedbackElement.textContent = ''; 

    if (!selectedOption) {
        feedbackElement.textContent = 'Please select an option.';
        feedbackElement.classList.add('feedback-incorrect');
        return;
    }

    if (selectedOption.value === correctAnswer) {
        feedbackElement.textContent = 'Correct!';
        feedbackElement.classList.add('feedback-correct');
    } else {
        feedbackElement.textContent = 'Incorrect. Try again!';
        feedbackElement.classList.add('feedback-incorrect');
        // ACCESSIBILITY: Mark the specific selected radio button as invalid
        selectedOption.setAttribute('aria-invalid', 'true');
    }
}

/**
 * ACCESSIBLE TABLE FILL CHECK
 * Updates visual classes AND sets aria-invalid on specific cells.
 */
function checkTableFill(id, answersString, toleranceStr) {
    const container = document.getElementById(`table-container-${id}`);
    const feedbackElement = document.getElementById(`feedback-${id}`);
    const inputs = container.querySelectorAll('input');
    
    const answers = answersString.split('||').map(s => parseFloat(s.trim()));
    const tolerance = parseFloat(toleranceStr || 0);

    feedbackElement.classList.remove('feedback-correct', 'feedback-incorrect');
    feedbackElement.textContent = '';
    
    let allCorrect = true;

    inputs.forEach((input, index) => {
        if (index >= answers.length) return;

        const userVal = parseFloat(input.value);
        const correctVal = answers[index];

        // Remove previous styling
        input.classList.remove('input-correct', 'input-incorrect');

        // Check logic
        if (!isNaN(userVal) && Math.abs(userVal - correctVal) <= tolerance) {
            input.classList.add('input-correct');
            // ACCESSIBILITY: Explicitly state this cell is valid
            input.setAttribute('aria-invalid', 'false');
        } else {
            input.classList.add('input-incorrect');
            allCorrect = false;
            // ACCESSIBILITY: Explicitly state this cell is invalid
            input.setAttribute('aria-invalid', 'true');
        }
    });

    if (allCorrect) {
        feedbackElement.textContent = 'Great job! All answers are correct.';
        feedbackElement.classList.add('feedback-correct');
    } else {
        feedbackElement.textContent = 'Some answers are incorrect. Check the red fields.';
        feedbackElement.classList.add('feedback-incorrect');
    }
}
