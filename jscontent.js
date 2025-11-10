module.exports.ac1 = `
// Import the readline module and create an interface for reading input/output from the console
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function MatchControllerUI(homeGoals, awayGoals) {
  //Write your code below here
  /*
    APPLY READLINE INTERFACE HERE LATER
    
  */

  // readline.question("Type a command for the soccer match ", (input) => {

  // });
  //Write your code above here
}

// A simple soccer match simulation and 5 functions that change the team's goal count.
// Each function takes one argument and returns the updated goal count (0+).

function StartMatch() {
  console.log("Simulation Start");
  // this is how many goals the team scored so far
  let homeGoals = 0;
  let awayGoals = 0;

  //LEVEL 3 
  //MatchControllerUI(homeGoals, awayGoals)

  //Write your code below here

  // Uncomment each section at a time to test a match simulation
  // start: log initial state
  // ReviewMatchLog(homeGoals, awayGoals);

  // home scores once
  // homeGoals = ApplyHomeGoal(homeGoals);
  // ReviewMatchLog(homeGoals, awayGoals);

  // away scores once
  // awayGoals = ApplyGoals(awayGoals);
  // ReviewMatchLog(homeGoals, awayGoals);

  // home scores again
  // homeGoals = ApplyGoals(homeGoals);
  // ReviewMatchLog(homeGoals, awayGoals);

  // determine result for the home team and show final
  // ShowFinalResult(homeGoals, awayGoals, winner);

  //Write your code above here
}

StartMatch();

function ReviewMatchLog(homeGoals, awayGoals) {
  // homeGoals, awayGoals (number) - current goals for each team
  // No return value required.
  //
  // Logs the current score and a quick performance message per team:
  // log "Score update: Home {homeGoals} - Away {awayGoals}"
  // homeGoales > awayGoals - log "Team D3 is winning."
  // homeGoales < awayGoals - log "Team Homework is winning."
  // homeGoales === awayGoals - log "It's a tie right now."

  //Write your code below here

  //score update

  //comparison - who is winning?

  //Write your code above here
}

function ApplyGoals(goals) {
  // Increment the team's goals by 1 and return the updated count.
  // Parameter:
  //   goals (number) - current home goals

  //Write your code below here

  //increase goals by 1

  //Write your code above here
  return goals;
}

function ShowFinalResults(homeGoals, awayGoals) {
  // Should convert the numeric goals into a match result string for the home team and return it.
  // Parameters:
  //   homeGoals (number) - final home goal count
  //   awayGoals (number) - final away goal count
  //
  // if home > away -> log "Team D3 Wins"
  // if home == away -> log "Draw between D3 and Homework"
  // if home < away -> log "Team Homework Wins!"
  // log "Final score: D3: {homeGoals} - Homework: {awayGoals}."
  // Extra logging in Readme.md for practices

  //Write your code below here

  //see who won

  //log final score

  //Write your code above here
}
`