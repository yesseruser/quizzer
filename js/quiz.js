const db = supabase.createClient(
    "https://mtjuyzexwsfhhidifrze.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10anV5emV4d3NmaGhpZGlmcnplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0Mjc3ODksImV4cCI6MjAzMzAwMzc4OX0.my7S9Xq0gTUxhiq0F7VOsnDFR-2B4uoG9r1qBrf8EzU"
)
const params = new URL(location.href).searchParams;

PetiteVue.createApp({
    async onMount() {
        let response = await db.from("quizzes").select("*").eq("id", params.get("id"))
        console.log(response);

        if (response === null || response.data === null || response.data.length === 0) {
            alert("No questions found in this quiz. Redirecting to home page.");
            location.href = "index.html";
        }

        this.questions = response.data[0].data;
        this.preview = params.get("preview") === "true";
    },
    
    copied: false,
    preview: false,
    questions: null,
    isFinished: false,

    copyLink() {
        const linkToCopy = location.href.split("&")[0];
        navigator.clipboard.writeText(linkToCopy);
        this.copied = true;
    },

    restart() {
        location.reload();
    },

    get correctCount() {
        if (this.questions === null ) {
            return 0;
        }

        let count = 0;
        for (const question of this.questions) {
            if (question.selected === question.correct) {
                count++;
            }
        }
        return count;
    }
}).mount();