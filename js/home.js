const db = supabase.createClient(
    "https://mtjuyzexwsfhhidifrze.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10anV5emV4d3NmaGhpZGlmcnplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0Mjc3ODksImV4cCI6MjAzMzAwMzc4OX0.my7S9Xq0gTUxhiq0F7VOsnDFR-2B4uoG9r1qBrf8EzU"
)

PetiteVue.createApp({
    questions: [{text: "", options: ["", "", "", ""], correct: 0}],
    addQuestion() {
        this.questions.push({text: "", options: ["", "", "", ""], correct: 0})
    },
    async sendQuiz() {
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

        // Actual quiz creation
        const response = await db
        .from("quizzes")
        .insert({data: this.questions})
        .select();

        console.log(response);
    }
}).mount()