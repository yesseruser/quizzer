PetiteVue.createApp({
    questions: [{text: "", options: ["", "", "", ""], correct: 0}],
    addQuestion() {
        this.questions.push({text: "", options: ["", "", "", ""], correct: 0})
    }
}).mount()