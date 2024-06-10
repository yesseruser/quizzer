const db = supabase.createClient(
    "https://mtjuyzexwsfhhidifrze.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10anV5emV4d3NmaGhpZGlmcnplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0Mjc3ODksImV4cCI6MjAzMzAwMzc4OX0.my7S9Xq0gTUxhiq0F7VOsnDFR-2B4uoG9r1qBrf8EzU"
)

let questions = [{text: "Oholera", options: ["Čitu fredy fasbér?", "Chitu freddy Fazbear", " i aint reading allthat", "TL;DR I am not reading all that."], correct: 0}];

PetiteVue.createApp({
    questions: questions,
})