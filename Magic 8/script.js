var magicAnswers = [
    "Not in 1000 years",
    "Not a chance",
    "Maybe",
    "Yes!",
    "Remember Rule #1",
    "Plese stop asking me questions!",
    "I think you should call of work today",
    "That sounds more like a you problem",
    "Just stop, ask me another question",
    "I said yes so stop asking questions!",
    "You should go bother someone who cares",
    "Of couse",
    "Ummmmmmmm, Only time will tell",
    "I cant seem to undertand what you said, please ask another question"];


function magicEight(){
    var randomAnswer = Math.floor(Math.random()*15)
    document.getElementById("answerLine").innerHTML = magicAnswers[randomAnswer];}