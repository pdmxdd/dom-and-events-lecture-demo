function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.

    // 1. When the Take off button is clicked, the text The shuttle is on the ground changes to Houston, we have liftoff!. The Take off button has an id="liftoffButton" attribute.
    button.addEventListener('click', function() {
        paragraph.innerText = "Houston, we have liftoff!";
    });

    // 2. When the user's cursor goes over the Abort Mission button, the button's background turns red. The Abort Mission button has id="abortMission".
    const abortButton = document.getElementById("abortMission");
    abortButton.addEventListener('mouseover', function() {
        abortButton.style.color = "red";
    });

    // 3. When the user's cursor leaves the Abort Mission button, the button's background returns to its original state (Hint: Setting the background color to the empty string, "", will force it to revert to the default browser styles.)
    abortButton.addEventListener('mouseout', function() {
        abortButton.style.color = "";
    });

    // 4. When the user clicks the Abort Mission button, make a confirmation window that says Are you sure you want to abort the mission?. If the user confirms that they want to abort, the text changes to Mission aborted! Space shuttle returning home.
    abortButton.addEventListener('click', function() {
        let choice = confirm("Are you sure you want to abort the mission?");
        if(choice) {
            paragraph.innerText = "Mission aborted! Space shuttle returning home.";
        }
    });
    
}

window.addEventListener("load", init);