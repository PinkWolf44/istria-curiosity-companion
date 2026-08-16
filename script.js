/* =========================================================
   MARA'S LITTLE FIELD GUIDE
   Main interaction script
========================================================= */


/* =========================================================
   BASIC HELPERS
========================================================= */


/*
    Shows an element and gently scrolls to it.
*/

function showAndScroll(element) {

    if (!element) {
        return;
    }

    element.classList.add("visible");

    setTimeout(function () {

        element.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);
}


/*
    Hides all main trail panels and discovery cards.

    This keeps Mara from opening History, Nature, Food
    and Sea on top of each other.
*/

function closeAllTrails() {

    const trailElements = document.querySelectorAll(
        ".history-panel, .discovery-card"
    );

    trailElements.forEach(function (element) {
        element.classList.remove("visible");
    });

}


/*
    Hides all rabbit-hole answers.

    This means only one answer is displayed at a time.
*/

function closeRabbitAnswers() {

    const answers = document.querySelectorAll(".rabbit-answer");

    answers.forEach(function (answer) {
        answer.classList.remove("visible");
    });

}


/*
    Hides all rabbit-hole button groups.
*/

function closeRabbitHoles() {

    const rabbitGroups = document.querySelectorAll(".rabbit-holes");

    rabbitGroups.forEach(function (group) {
        group.classList.remove("visible");
    });

}



/* =========================================================
   START EXPLORING
========================================================= */

const startButton =
    document.getElementById("start-exploring");

const exploreSection =
    document.getElementById("explore");


if (startButton && exploreSection) {

    startButton.addEventListener("click", function () {

        exploreSection.classList.add("visible");

        exploreSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

}



/* =========================================================
   MAIN CATEGORY CARDS
========================================================= */

const historyCard =
    document.getElementById("history-card");

const natureCard =
    document.getElementById("nature-card");

const foodCard =
    document.getElementById("food-card");

const seaCard =
    document.getElementById("sea-card");


const historyPanel =
    document.getElementById("history-panel");

const naturePanel =
    document.getElementById("nature-panel");

const foodPanel =
    document.getElementById("food-panel");

const seaPanel =
    document.getElementById("sea-panel");


if (historyCard) {

    historyCard.addEventListener("click", function () {

        closeAllTrails();
        closeRabbitAnswers();
        closeRabbitHoles();

        showAndScroll(historyPanel);

    });

}


if (natureCard) {

    natureCard.addEventListener("click", function () {

        closeAllTrails();
        closeRabbitAnswers();
        closeRabbitHoles();

        showAndScroll(naturePanel);

    });

}


if (foodCard) {

    foodCard.addEventListener("click", function () {

        closeAllTrails();
        closeRabbitAnswers();
        closeRabbitHoles();

        showAndScroll(foodPanel);

    });

}


if (seaCard) {

    seaCard.addEventListener("click", function () {

        closeAllTrails();
        closeRabbitAnswers();
        closeRabbitHoles();

        showAndScroll(seaPanel);

    });

}



/* =========================================================
   DISCOVERY CARDS
========================================================= */

const historyNext =
    document.getElementById("history-next");

const natureNext =
    document.getElementById("nature-next");

const foodNext =
    document.getElementById("food-next");

const seaNext =
    document.getElementById("sea-next");


const pulaDiscovery =
    document.getElementById("pula-discovery");

const hoopoeDiscovery =
    document.getElementById("hoopoe-discovery");

const truffleDiscovery =
    document.getElementById("truffle-discovery");

const jellyfishDiscovery =
    document.getElementById("jellyfish-discovery");



/* =========================================================
   MARA'S NOTEBOOK
========================================================= */


/*
    These are the four things Mara can currently collect.
*/

const discoveries = {

    pula: {
        notebookId: "notebook-pula",
        name: "Pula Arena"
    },

    hoopoe: {
        notebookId: "notebook-hoopoe",
        name: "Hoopoe"
    },

    truffle: {
        notebookId: "notebook-truffle",
        name: "Istrian Truffle"
    },

    jellyfish: {
        notebookId: "notebook-jellyfish",
        name: "Fried Egg Jellyfish"
    }

};


/*
    This is the name under which Mara saves progress
    inside the browser/device.
*/

const STORAGE_KEY = "mara-collected-discoveries";


/*
    Read saved discoveries from localStorage.
*/

function loadCollectedDiscoveries() {

    const saved =
        localStorage.getItem(STORAGE_KEY);

    if (!saved) {
        return [];
    }

    try {

        const parsed = JSON.parse(saved);

        if (Array.isArray(parsed)) {
            return parsed;
        }

        return [];

    } catch (error) {

        console.log(
            "Mara could not read notebook progress:",
            error
        );

        return [];
    }

}


/*
    The app's current notebook state.
*/

let collectedDiscoveries =
    loadCollectedDiscoveries();



/*
    Saves the current notebook state.
*/

function saveCollectedDiscoveries() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(collectedDiscoveries)
    );

}



/*
    Updates the notebook visually.
*/

function updateNotebook() {

    const progress =
        document.getElementById("notebook-progress");


    if (progress) {

        progress.textContent =
            collectedDiscoveries.length + " / 4";

    }


    Object.keys(discoveries).forEach(function (key) {

        const discovery =
            discoveries[key];

        const notebookItem =
            document.getElementById(
                discovery.notebookId
            );


        if (!notebookItem) {
            return;
        }


        const status =
            notebookItem.querySelector(
                ".notebook-status"
            );


        if (
            collectedDiscoveries.includes(key)
        ) {

            notebookItem.classList.add(
                "collected"
            );


            if (status) {
                status.textContent =
                    "Collected ✓";
            }

        } else {

            notebookItem.classList.remove(
                "collected"
            );


            if (status) {
                status.textContent =
                    "Not discovered yet";
            }

        }

    });

}



/*
    Adds a discovery to Mara's notebook.

    It will only be added once.
*/

function collectDiscovery(key) {

    if (!discoveries[key]) {
        return;
    }


    if (
        !collectedDiscoveries.includes(key)
    ) {

        collectedDiscoveries.push(key);

        saveCollectedDiscoveries();

        updateNotebook();

        console.log(
            "Mara collected:",
            discoveries[key].name
        );

    }

}



/*
    Restore notebook state immediately when Mara opens.
*/

updateNotebook();



/* =========================================================
   OPEN EACH DISCOVERY + COLLECT IT
========================================================= */


if (historyNext) {

    historyNext.addEventListener(
        "click",
        function () {

            closeAllTrails();
            closeRabbitAnswers();
            closeRabbitHoles();

            collectDiscovery("pula");

            showAndScroll(pulaDiscovery);

        }
    );

}


if (natureNext) {

    natureNext.addEventListener(
        "click",
        function () {

            closeAllTrails();
            closeRabbitAnswers();
            closeRabbitHoles();

            collectDiscovery("hoopoe");

            showAndScroll(hoopoeDiscovery);

        }
    );

}


if (foodNext) {

    foodNext.addEventListener(
        "click",
        function () {

            closeAllTrails();
            closeRabbitAnswers();
            closeRabbitHoles();

            collectDiscovery("truffle");

            showAndScroll(truffleDiscovery);

        }
    );

}


if (seaNext) {

    seaNext.addEventListener(
        "click",
        function () {

            closeAllTrails();
            closeRabbitAnswers();
            closeRabbitHoles();

            collectDiscovery("jellyfish");

            showAndScroll(jellyfishDiscovery);

        }
    );

}



/* =========================================================
   HISTORY — TELL ME MORE
========================================================= */

const discoveryMore =
    document.getElementById("discovery-more");

const historyRabbitHoles =
    document.getElementById("rabbit-holes");


if (discoveryMore) {

    discoveryMore.addEventListener(
        "click",
        function () {

            closeRabbitAnswers();

            historyRabbitHoles.classList.add(
                "visible"
            );

            discoveryMore.style.display =
                "none";

        }
    );

}



/* =========================================================
   HISTORY RABBIT HOLES
========================================================= */

const pulaImportanceButton =
    document.getElementById("pula-importance");

const pulaImportanceAnswer =
    document.getElementById(
        "pula-importance-answer"
    );


const arenaEventsButton =
    document.getElementById("arena-events");

const arenaEventsAnswer =
    document.getElementById(
        "arena-events-answer"
    );


const romanTraceButton =
    document.getElementById("roman-trace");

const romanTraceAnswer =
    document.getElementById(
        "roman-trace-answer"
    );


if (pulaImportanceButton) {

    pulaImportanceButton.addEventListener(
        "click",
        function () {

            closeRabbitAnswers();

            showAndScroll(
                pulaImportanceAnswer
            );

        }
    );

}


if (arenaEventsButton) {

    arenaEventsButton.addEventListener(
        "click",
        function () {

            closeRabbitAnswers();

            showAndScroll(
                arenaEventsAnswer
            );

        }
    );

}


if (romanTraceButton) {

    romanTraceButton.addEventListener(
        "click",
        function () {

            closeRabbitAnswers();

            showAndScroll(
                romanTraceAnswer
            );

        }
    );

}



/* =========================================================
   NATURE — TELL ME MORE
========================================================= */

const natureMore =
    document.getElementById("nature-more");

const natureRabbitHoles =
    document.getElementById(
        "nature-rabbit-holes"
    );


if (natureMore) {

    natureMore.addEventListener(
        "click",
        function () {

            closeRabbitAnswers();

            natureRabbitHoles.classList.add(
                "visible"
            );

            natureMore.style.display =
                "none";

        }
    );

}



/* =========================================================
   NATURE RABBIT HOLES
========================================================= */

const hoopoeCrestButton =
    document.getElementById(
        "hoopoe-crest"
    );

const hoopoeCrestAnswer =
    document.getElementById(
        "hoopoe-crest-answer"
    );


const hoopoeFoodButton =
    document.getElementById(
        "hoopoe-food"
    );

const hoopoeFoodAnswer =
    document.getElementById(
        "hoopoe-food-answer"
    );


const hoopoePaludButton =
    document.getElementById(
        "hoopoe-palud"
    );

const hoopoePaludAnswer =
    document.getElementById(
        "hoopoe-palud-answer"
    );


if (hoopoeCrestButton) {

    hoopoeCrestButton.addEventListener(
        "click",
        function () {

            closeRabbitAnswers();

            showAndScroll(
                hoopoeCrestAnswer
            );

        }
    );

}


if (hoopoeFoodButton) {

    hoopoeFoodButton.addEventListener(
        "click",
        function () {

            closeRabbitAnswers();

            showAndScroll(
                hoopoeFoodAnswer
            );

        }
    );

}


if (hoopoePaludButton) {

    hoopoePaludButton.addEventListener(
        "click",
        function () {

            closeRabbitAnswers();

            showAndScroll(
                hoopoePaludAnswer
            );

        }
    );

}



/* =========================================================
   FOOD — TELL ME MORE
========================================================= */

const foodMore =
    document.getElementById("food-more");

const foodRabbitHoles =
    document.getElementById(
        "food-rabbit-holes"
    );


if (foodMore) {

    foodMore.addEventListener(
        "click",
        function () {

            closeRabbitAnswers();

            foodRabbitHoles.classList.add(
                "visible"
            );

            foodMore.style.display =
                "none";

        }
    );

}



/* =========================================================
   FOOD RABBIT HOLES
========================================================= */

const truffleUndergroundButton =
    document.getElementById(
        "truffle-underground"
    );

const truffleUndergroundAnswer =
    document.getElementById(
        "truffle-underground-answer"
    );


const truffleDogsButton =
    document.getElementById(
        "truffle-dogs"
    );

const truffleDogsAnswer =
    document.getElementById(
        "truffle-dogs-answer"
    );


const istrianTrufflesButton =
    document.getElementById(
        "istrian-truffles"
    );

const istrianTrufflesAnswer =
    document.getElementById(
        "istrian-truffles-answer"
    );


if (truffleUndergroundButton) {

    truffleUndergroundButton.addEventListener(
        "click",
        function () {

            closeRabbitAnswers();

            showAndScroll(
                truffleUndergroundAnswer
            );

        }
    );

}


if (truffleDogsButton) {

    truffleDogsButton.addEventListener(
        "click",
        function () {

            closeRabbitAnswers();

            showAndScroll(
                truffleDogsAnswer
            );

        }
    );

}


if (istrianTrufflesButton) {

    istrianTrufflesButton.addEventListener(
        "click",
        function () {

            closeRabbitAnswers();

            showAndScroll(
                istrianTrufflesAnswer
            );

        }
    );

}



/* =========================================================
   SEA — TELL ME MORE
========================================================= */

const seaMore =
    document.getElementById("sea-more");

const seaRabbitHoles =
    document.getElementById(
        "sea-rabbit-holes"
    );


if (seaMore) {

    seaMore.addEventListener(
        "click",
        function () {

            closeRabbitAnswers();

            seaRabbitHoles.classList.add(
                "visible"
            );

            seaMore.style.display =
                "none";

        }
    );

}



/* =========================================================
   SEA RABBIT HOLES
========================================================= */

const jellyfishStingButton =
    document.getElementById(
        "jellyfish-sting"
    );

const jellyfishStingAnswer =
    document.getElementById(
        "jellyfish-sting-answer"
    );


const jellyfishBrainButton =
    document.getElementById(
        "jellyfish-brain"
    );

const jellyfishBrainAnswer =
    document.getElementById(
        "jellyfish-brain-answer"
    );


const adriaticJelliesButton =
    document.getElementById(
        "adriatic-jellies"
    );

const adriaticJelliesAnswer =
    document.getElementById(
        "adriatic-jellies-answer"
    );


if (jellyfishStingButton) {

    jellyfishStingButton.addEventListener(
        "click",
        function () {

            closeRabbitAnswers();

            showAndScroll(
                jellyfishStingAnswer
            );

        }
    );

}


if (jellyfishBrainButton) {

    jellyfishBrainButton.addEventListener(
        "click",
        function () {

            closeRabbitAnswers();

            showAndScroll(
                jellyfishBrainAnswer
            );

        }
    );

}


if (adriaticJelliesButton) {

    adriaticJelliesButton.addEventListener(
        "click",
        function () {

            closeRabbitAnswers();

            showAndScroll(
                adriaticJelliesAnswer
            );

        }
    );

}



/* =========================================================
   PWA SERVICE WORKER
========================================================= */

if ("serviceWorker" in navigator) {

    window.addEventListener(
        "load",
        function () {

            navigator.serviceWorker
                .register(
                    "./service-worker.js"
                )

                .then(function () {

                    console.log(
                        "Mara service worker registered."
                    );

                })

                .catch(function (error) {

                    console.log(
                        "Service worker registration failed:",
                        error
                    );

                });

        }
    );

} 