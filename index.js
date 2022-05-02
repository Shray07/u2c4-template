// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit", myfunction);

var match=JSON.parse(localStorage.getItem("Matchshedule")) || [];

function myfunction(){
    event.preventDefault();

var obj={
    MatchNumber: document.querySelector("#matchNum").value,
    matchTeamA: form.teamA.value,
    MatchteamB: form.teamB.value,
    MatchTate: form.date.value,
    MatchVenue: form.venue.value,
};                                              
match.push(obj);
console.log(match);
localStorage.setItem("schedule",JSON.stringify(match))

}
