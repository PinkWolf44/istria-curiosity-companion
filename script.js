const startButton =
    document.getElementById("start-exploring");

const exploreSection =
    document.getElementById("explore");


startButton.addEventListener("click", function () {

    exploreSection.classList.add("visible");

    exploreSection.scrollIntoView({
        behavior: "smooth"
    });

});


/* =========================
   GENERAL HELPERS
========================= */

function closeRabbitAnswers() {

    const answers =
        document.querySelectorAll(".rabbit-answer");

    answers.forEach(function (answer) {

        answer.classList.remove("visible");

    });

}


function closeAllTrails() {

    const trailPanels =
        document.querySelectorAll(".history-panel");

    const discoveryCards =
        document.querySelectorAll(".discovery-card");

    const rabbitGroups =
        document.querySelectorAll(".rabbit-holes");


    trailPanels.forEach(function (panel) {

        panel.classList.remove("visible");

    });


    discoveryCards.forEach(function (card) {

        card.classList.remove("visible");

    });


    rabbitGroups.forEach(function (group) {

        group.classList.remove("visible");

    });


    closeRabbitAnswers();


    const moreButtons =
        document.querySelectorAll(".discovery-more");

    moreButtons.forEach(function (button) {

        button.style.display = "inline-block";

    });

}


/* =========================
   HISTORY
========================= */

const historyCard =
    document.getElementById("history-card");

const historyPanel =
    document.getElementById("history-panel");


historyCard.addEventListener("click", function () {

    closeAllTrails();

    historyPanel.classList.add("visible");

    historyPanel.scrollIntoView({
        behavior: "smooth"
    });

});


const historyNext =
    document.getElementById("history-next");

const pulaDiscovery =
    document.getElementById("pula-discovery");


historyNext.addEventListener("click", function () {

    pulaDiscovery.classList.add("visible");

    pulaDiscovery.scrollIntoView({
        behavior: "smooth"
    });

});


const discoveryMore =
    document.getElementById("discovery-more");

const rabbitHoles =
    document.getElementById("rabbit-holes");


discoveryMore.addEventListener("click", function () {

    rabbitHoles.classList.add("visible");

    discoveryMore.style.display = "none";

});


const pulaImportanceButton =
    document.getElementById("pula-importance");

const arenaEventsButton =
    document.getElementById("arena-events");

const romanTraceButton =
    document.getElementById("roman-trace");


const pulaImportanceAnswer =
    document.getElementById("pula-importance-answer");

const arenaEventsAnswer =
    document.getElementById("arena-events-answer");

const romanTraceAnswer =
    document.getElementById("roman-trace-answer");


pulaImportanceButton.addEventListener("click", function () {

    closeRabbitAnswers();

    pulaImportanceAnswer.classList.add("visible");

    pulaImportanceAnswer.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});


arenaEventsButton.addEventListener("click", function () {

    closeRabbitAnswers();

    arenaEventsAnswer.classList.add("visible");

    arenaEventsAnswer.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});


romanTraceButton.addEventListener("click", function () {

    closeRabbitAnswers();

    romanTraceAnswer.classList.add("visible");

    romanTraceAnswer.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});


/* =========================
   NATURE
========================= */

const natureCard =
    document.getElementById("nature-card");

const naturePanel =
    document.getElementById("nature-panel");


natureCard.addEventListener("click", function () {

    closeAllTrails();

    naturePanel.classList.add("visible");

    naturePanel.scrollIntoView({
        behavior: "smooth"
    });

});


const natureNext =
    document.getElementById("nature-next");

const hoopoeDiscovery =
    document.getElementById("hoopoe-discovery");


natureNext.addEventListener("click", function () {

    hoopoeDiscovery.classList.add("visible");

    hoopoeDiscovery.scrollIntoView({
        behavior: "smooth"
    });

});


const natureMore =
    document.getElementById("nature-more");

const natureRabbitHoles =
    document.getElementById("nature-rabbit-holes");


natureMore.addEventListener("click", function () {

    natureRabbitHoles.classList.add("visible");

    natureMore.style.display = "none";

});


const hoopoeCrestButton =
    document.getElementById("hoopoe-crest");

const hoopoeFoodButton =
    document.getElementById("hoopoe-food");

const hoopoePaludButton =
    document.getElementById("hoopoe-palud");


const hoopoeCrestAnswer =
    document.getElementById("hoopoe-crest-answer");

const hoopoeFoodAnswer =
    document.getElementById("hoopoe-food-answer");

const hoopoePaludAnswer =
    document.getElementById("hoopoe-palud-answer");


hoopoeCrestButton.addEventListener("click", function () {

    closeRabbitAnswers();

    hoopoeCrestAnswer.classList.add("visible");

    hoopoeCrestAnswer.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});


hoopoeFoodButton.addEventListener("click", function () {

    closeRabbitAnswers();

    hoopoeFoodAnswer.classList.add("visible");

    hoopoeFoodAnswer.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});


hoopoePaludButton.addEventListener("click", function () {

    closeRabbitAnswers();

    hoopoePaludAnswer.classList.add("visible");

    hoopoePaludAnswer.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});


/* =========================
   FOOD
========================= */

const foodCard =
    document.getElementById("food-card");

const foodPanel =
    document.getElementById("food-panel");


foodCard.addEventListener("click", function () {

    closeAllTrails();

    foodPanel.classList.add("visible");

    foodPanel.scrollIntoView({
        behavior: "smooth"
    });

});


const foodNext =
    document.getElementById("food-next");

const truffleDiscovery =
    document.getElementById("truffle-discovery");


foodNext.addEventListener("click", function () {

    truffleDiscovery.classList.add("visible");

    truffleDiscovery.scrollIntoView({
        behavior: "smooth"
    });

});


const foodMore =
    document.getElementById("food-more");

const foodRabbitHoles =
    document.getElementById("food-rabbit-holes");


foodMore.addEventListener("click", function () {

    foodRabbitHoles.classList.add("visible");

    foodMore.style.display = "none";

});


const truffleUndergroundButton =
    document.getElementById("truffle-underground");

const truffleDogsButton =
    document.getElementById("truffle-dogs");

const istrianTrufflesButton =
    document.getElementById("istrian-truffles");


const truffleUndergroundAnswer =
    document.getElementById("truffle-underground-answer");

const truffleDogsAnswer =
    document.getElementById("truffle-dogs-answer");

const istrianTrufflesAnswer =
    document.getElementById("istrian-truffles-answer");


truffleUndergroundButton.addEventListener("click", function () {

    closeRabbitAnswers();

    truffleUndergroundAnswer.classList.add("visible");

    truffleUndergroundAnswer.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});


truffleDogsButton.addEventListener("click", function () {

    closeRabbitAnswers();

    truffleDogsAnswer.classList.add("visible");

    truffleDogsAnswer.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});


istrianTrufflesButton.addEventListener("click", function () {

    closeRabbitAnswers();

    istrianTrufflesAnswer.classList.add("visible");

    istrianTrufflesAnswer.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});


/* =========================
   SEA
========================= */

const seaCard =
    document.getElementById("sea-card");

const seaPanel =
    document.getElementById("sea-panel");


seaCard.addEventListener("click", function () {

    closeAllTrails();

    seaPanel.classList.add("visible");

    seaPanel.scrollIntoView({
        behavior: "smooth"
    });

});


const seaNext =
    document.getElementById("sea-next");

const jellyfishDiscovery =
    document.getElementById("jellyfish-discovery");


seaNext.addEventListener("click", function () {

    jellyfishDiscovery.classList.add("visible");

    jellyfishDiscovery.scrollIntoView({
        behavior: "smooth"
    });

});


const seaMore =
    document.getElementById("sea-more");

const seaRabbitHoles =
    document.getElementById("sea-rabbit-holes");


seaMore.addEventListener("click", function () {

    seaRabbitHoles.classList.add("visible");

    seaMore.style.display = "none";

});


const jellyfishStingButton =
    document.getElementById("jellyfish-sting");

const jellyfishBrainButton =
    document.getElementById("jellyfish-brain");

const adriaticJelliesButton =
    document.getElementById("adriatic-jellies");


const jellyfishStingAnswer =
    document.getElementById("jellyfish-sting-answer");

const jellyfishBrainAnswer =
    document.getElementById("jellyfish-brain-answer");

const adriaticJelliesAnswer =
    document.getElementById("adriatic-jellies-answer");


jellyfishStingButton.addEventListener("click", function () {

    closeRabbitAnswers();

    jellyfishStingAnswer.classList.add("visible");

    jellyfishStingAnswer.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});


jellyfishBrainButton.addEventListener("click", function () {

    closeRabbitAnswers();

    jellyfishBrainAnswer.classList.add("visible");

    jellyfishBrainAnswer.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});


adriaticJelliesButton.addEventListener("click", function () {

    closeRabbitAnswers();

    adriaticJelliesAnswer.classList.add("visible");

    adriaticJelliesAnswer.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("./service-worker.js")
            .then(function () {
                console.log("Mara service worker registered.");
            })
            .catch(function (error) {
                console.log("Service worker registration failed:", error);
            });
    });
}