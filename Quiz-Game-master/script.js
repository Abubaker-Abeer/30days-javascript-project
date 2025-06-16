const allQuestions = [
    { question: "Pakistan is a...", options: ["Country", "City", "Island", "Village"], correct: 1 },
    { question: "The capital of France is...", options: ["Berlin", "Madrid", "Paris", "Rome"], correct: 3 },
    { question: "The largest ocean in the world is...", options: ["Atlantic", "Indian", "Arctic", "Pacific"], correct: 4 },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"], correct: 2 },
    { question: "Which is the smallest continent by land area?", options: ["Africa", "Australia", "Europe", "South America"], correct: 2 },
    { question: "Which language has the most native speakers?", options: ["English", "Spanish", "Mandarin", "Hindi"], correct: 3 },
    { question: "Which country hosted the 2016 Summer Olympics?", options: ["China", "Brazil", "Japan", "Russia"], correct: 2 },
    { question: "The tallest mountain in the world is...", options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"], correct: 3 },
    { question: "The currency used in Japan is...", options: ["Yuan", "Dollar", "Euro", "Yen"], correct: 4 },
    { question: "The longest river in the world is...", options: ["Nile", "Amazon", "Yangtze", "Mississippi"], correct: 1 },
    { question: "The chemical symbol for water is...", options: ["HO", "OH", "H2O", "O2"], correct: 3 },
    { question: "What is the hardest natural substance on Earth?", options: ["Iron", "Gold", "Diamond", "Platinum"], correct: 3 },
    { question: "Which country has the largest population?", options: ["India", "USA", "China", "Russia"], correct: 3 },
    { question: "Which year did World War II end?", options: ["1945", "1939", "1918", "1950"], correct: 1 },
    { question: "What is the capital of Canada?", options: ["Toronto", "Vancouver", "Ottawa", "Montreal"], correct: 3 },
    { question: "Which organ pumps blood?", options: ["Lungs", "Heart", "Kidney", "Liver"], correct: 2 },
    { question: "How many continents are there?", options: ["5", "6", "7", "8"], correct: 3 },
    { question: "Who developed the theory of relativity?", options: ["Newton", "Einstein", "Galileo", "Curie"], correct: 2 },
    { question: "Land of the Rising Sun?", options: ["China", "Korea", "Japan", "Thailand"], correct: 3 },
    { question: "Largest planet in solar system?", options: ["Mars", "Earth", "Jupiter", "Saturn"], correct: 3 },
    { question: "What gas do plants absorb?", options: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"], correct: 3 },
    { question: "Which country is famous for pyramids?", options: ["Italy", "Peru", "Egypt", "India"], correct: 3 },
    { question: "Which animal is known as the King of the Jungle?", options: ["Tiger", "Elephant", "Lion", "Leopard"], correct: 3 },
    { question: "Which metal is liquid at room temperature?", options: ["Gold", "Mercury", "Aluminum", "Iron"], correct: 2 },
    { question: "Which bird can mimic human speech?", options: ["Sparrow", "Crow", "Parrot", "Eagle"], correct: 3 },
    { question: "Which desert is the largest in the world?", options: ["Sahara", "Gobi", "Arctic", "Kalahari"], correct: 1 },
    { question: "Which continent has the most countries?", options: ["Asia", "Africa", "Europe", "South America"], correct: 2 },
    { question: "What do bees collect from flowers?", options: ["Water", "Nectar", "Pollen", "Honey"], correct: 2 },
    { question: "Which month has 28 days?", options: ["February", "All", "June", "November"], correct: 2 },
    { question: "What is the boiling point of water?", options: ["90°C", "100°C", "110°C", "120°C"], correct: 2 },
    { question: "Which planet has rings?", options: ["Mars", "Saturn", "Venus", "Neptune"], correct: 2 },
    { question: "How many legs does a spider have?", options: ["6", "8", "10", "12"], correct: 2 },
    { question: "Which is the largest mammal?", options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"], correct: 2 },
    { question: "Which is the fastest land animal?", options: ["Lion", "Horse", "Cheetah", "Leopard"], correct: 3 },
    { question: "How many sides does a hexagon have?", options: ["5", "6", "7", "8"], correct: 2 },
    { question: "Which gas is essential for breathing?", options: ["Carbon Dioxide", "Nitrogen", "Oxygen", "Helium"], correct: 3 },
    { question: "Which instrument has black and white keys?", options: ["Guitar", "Flute", "Piano", "Drum"], correct: 3 },
    { question: "What color do you get by mixing red and blue?", options: ["Purple", "Orange", "Green", "Brown"], correct: 1 },
    { question: "How many hours are there in a day?", options: ["12", "24", "30", "48"], correct: 2 },
    { question: "What do we call a shape with 3 sides?", options: ["Square", "Triangle", "Rectangle", "Pentagon"], correct: 2 },
    { question: "Which part of the plant absorbs water?", options: ["Leaves", "Roots", "Stem", "Flower"], correct: 2 },
    { question: "How many bones are in the human body?", options: ["206", "201", "198", "210"], correct: 1 },
    { question: "What is the freezing point of water?", options: ["0°C", "32°C", "100°C", "10°C"], correct: 1 },
    { question: "Which continent is the coldest?", options: ["Asia", "Europe", "Antarctica", "North America"], correct: 3 },
    { question: "Which planet is closest to the sun?", options: ["Venus", "Mars", "Mercury", "Earth"], correct: 3 },
];

let questions = [];
let currentQuestion = 0;
let correctAnswers = 0;

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function startQuiz() {
    questions = shuffleArray([...allQuestions]).slice(0, 10);
    currentQuestion = 0;
    correctAnswers = 0;
    loadQuestion();
}

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsContainer = document.getElementById('options');
    const resultElement = document.getElementById('result');
    const nextButton = document.getElementById('next-btn');

    resultElement.innerHTML = "";
    nextButton.style.display = "none";
    document.getElementById('replay-btn').style.display = "none";
    optionsContainer.innerHTML = "";

    const current = questions[currentQuestion];
    questionElement.innerHTML = `${currentQuestion + 1}. ${current.question}`;

    current.options.forEach((Option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.innerHTML = `${index + 1}: ${Option}`;
        optionElement.onclick = () => checkAnswer(optionElement, index + 1);
        optionsContainer.appendChild(optionElement);
    });
}

function checkAnswer(element, option) {
    element.blur(); 

    const current = questions[currentQuestion];

    if (option === current.correct) {
        element.classList.add('correct');
        document.getElementById('result').innerHTML = "Correct!";
        correctAnswers++;
    } else {
        element.classList.add('incorrect');
        document.getElementById('result').innerHTML = `Incorrect! The correct answer is: ${current.options[current.correct - 1]}.`;
    }

    const options = document.getElementsByClassName('option');
    for (let i = 0; i < options.length; i++) {
        options[i].style.pointerEvents = 'none';
    }

    document.getElementById('next-btn').style.display = 'block';
}


function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const totalQuestions = questions.length;
    const scorePercentage = Math.round((correctAnswers / totalQuestions) * 100);
    document.getElementById('question').innerHTML = "Quiz Completed!";
const optionsContainer = document.getElementById('options');
optionsContainer.classList.add('final-score');
optionsContainer.innerHTML = `You answered ${correctAnswers} out of ${totalQuestions} questions correctly.<br>Your score: ${scorePercentage}%`;
    document.getElementById('result').innerHTML = "";
    document.getElementById('next-btn').style.display = "none";
    document.getElementById('replay-btn').style.display = "block";
}

function replayQuiz() {
    document.getElementById('options').classList.remove('final-score');

    startQuiz();
}

startQuiz();
