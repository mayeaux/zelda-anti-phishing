/**
 * Created by Segasec Labs on 12/10/17.
 */

/*global
 trackButtonClick
*/

$(document).ready(function () {
    updateNumOfDomains();
    updateTimeOfLastUpdate();
});

function updateTimeOfLastUpdate() {
    setLastUpdate();
    setInterval(function () {
        setLastUpdate();
    }, 1000);
}

function setLastUpdate() {
    let lastUpdate = localStorage.getItem('zelda_lastUpdate');
    lastUpdate = new Date(lastUpdate);
    lastUpdate = Date.parse(new Date()) - Date.parse(lastUpdate);
    const seconds = Math.floor((lastUpdate / 1000) % 60);
    const minutes = Math.floor((lastUpdate / 1000 / 60) % 60);
    let timeToDisplay = 'Last update: ' + minutes + ':' + (seconds < 10 ? '0' + seconds : seconds);
    timeToDisplay += (minutes !== 0) ? ' minutes ago' : ' seconds ago';
    document.getElementById('small').innerText = timeToDisplay;
}

/*
    Get from localStorage list of malicious to display
 */
function updateNumOfDomains() {
    const blackDomainsList = JSON.parse(localStorage.getItem('zelda_blacklist_domains'));
    const blackUrlsList = JSON.parse(localStorage.getItem('zelda_blacklist_urls'));
    const numOfBlackDomains = blackDomainsList.domains.length;
    const numOfBlackUrls = blackUrlsList.urls.length;
    document.getElementById('blackListNum').innerText = (numOfBlackDomains + numOfBlackUrls) + ' blocked site in total  ';
}

document.addEventListener('DOMContentLoaded', function () {
    const segaSecIcon = document.getElementById('zelda-icon');
    segaSecIcon.addEventListener('click', event => {
        trackButtonClick('Buttons', 'click', event);
    });
    const segaSecPrivecy = document.getElementById('zelda-privacyIcon');
    segaSecPrivecy.addEventListener('click', event => {
        trackButtonClick('Buttons', 'click', event);
    });
    const segaSecGit = document.getElementById('zelda-githubIcon');
    segaSecGit.addEventListener('click', event => {
        trackButtonClick('Buttons', 'click', event);
    });

});