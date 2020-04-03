/*
 * Author: Corinna Buerger
 * Date: 04/03/2020
 * Repo: CorinnaBuerger/yt_no_recommendations
 * Contributor: Daniel Schuette
 */
const MODE = "debugging";

function hideElements(mode) {
    const startPageSuggestions = document.getElementById("contents");
    const videoPlayerSuggestions = document.querySelector("#secondary");

    const elementsToHide = [startPageSuggestions, videoPlayerSuggestions];

    if (mode === "debugging") {
        console.log(elementsToHide);
    }

    const numElementsToHide = elementsToHide.length;
    for (let i = 0; i < numElementsToHide; i++) {
        const element = elementsToHide[i];
        if (element !== null) {
            element.style.display = "none";
        }
    }
}

window.onload(() => hideElements(MODE));
