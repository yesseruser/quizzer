PetiteVue.createApp({
    questions: [{text: "", options: ["", "", "", ""], correct: 0}],
    addQuestion() {
        this.questions.push({text: "", options: ["", "", "", ""], correct: 0})
    },
    sendQuiz() {
        this.questions.forEach((question, i) => {
            if (question.text === "") {
                alert("Please enter text to question " + (i + 1));
                return;
            }
            
            question.options.forEach((option, i) => {
                if (option.text === "") {
                    alert("Please enter text to option " + (i + 1) + " of question " + (i + 1));
                    return;
                }
            });

            if (question.correct < 0 || question.correct > 3) {
                alert("Invalid correct answer of question " + (i + 1));
                return;
            }
        });
    }
}).mount()