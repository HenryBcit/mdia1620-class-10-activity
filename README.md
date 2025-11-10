# Soccer Match Simulation – README

## Overview

This exercise simulates a soccer match. You will implement three core functions and optionally wire a readline loop to interact with the match afterwards. The goal is to practice function design, parameter/argument usage, return values, and simple conditionals.

No arrays, loops or advanced features are required for the core tasks.

## Getting Started

1. **Clone the repository:**

```bash
git clone "https://github.com/HenryBcit/mdia1620-class10-activiy.git"
```

2. **Run the prepare file:**

```bash
node prepare.js
```

3. **Find `init.js`:**

- Use `cd` and `ls` repeatedly until you reach the deepest folder.
- Use `ls` to confirm `init.js` is present.

4. **Run the simulation:**

```bash
node init.js
```

You should see "simulation start".


## Level 1 — ReviewMatchLog (Basic Logging)

### Objective
- Implement a simple score update logger and a short performance message.

### Instructions
1. Locate the `StartMatch()` function and the other function stubs:
- `ReviewMatchLog(homeGoals, awayGoals)`
- `ApplyGoals(goals)`
- `ShowFinalResults(homeGoals, awayGoals)`

2. Start with uncommenting `ReviewMatchLog(homeGoals, awayGoals);`

3. Locate the function `function ReviewMatchLog(homeGoals, awayGoals){}`

4. At where it tells you to write code, implement the task below.

5. Test the different logs by changing the score number for homeGoals, and awayGoals. For example `let homeGoals = 1;`


### Task
- Implement `ReviewMatchLog(homeGoals, awayGoals)`:
  - Log: `Score update: Home {homeGoals} - Away {awayGoals}`
  - If homeGoals > awayGoals: log `Team D3 is winning.`
  - If homeGoals < awayGoals: log `Team Homework is winning.`
  - If equal: log `It's a tie right now.`

## Level 2 — ApplyGoals (Incrementing) and Final Results

### Objective
- Implement a function that increments a team's goals by 1 and returns the new count.
- Convert final numeric scores into result messages and log the final score.

### Task
- Implement `ApplyGoals(goals)`:
  - Take a numeric `goals`
  - Increase it by 1
  - Return the updated number
- Implement `ShowFinalResults(homeGoals, awayGoals)`:
  - If homeGoals > awayGoals -> log `Team D3 Wins`
  - If homeGoals === awayGoals -> log `Draw between D3 and Homework`
  - If homeGoals < awayGoals -> log `Team Homework Wins!`
  - Always log the final score: `Final score: D3: {homeGoals} - Homework: {awayGoals}.`


## Level 3 — Interactive Match Loop

### Objective
- Hook up the readline interface for interactive play.

### Instructions
1. Locate the `MatchControllerUI(homeGoals, awayGoals)` function and the other function stubs:
2. After `StartMatch()` comment out the simulations and run `MatchController(homeGoals, awayGoals)`.
3. Implemene the tasks below

### Tasks
- Prompt the user to type in `MatchControllerUI(homeGoals, awayGoals)`:
  - by default it will always `ReviewMatchLog(homeGoals, awayGoals)` at the end
  - `home` to increment home goals (call ApplyGoals)
  - `away` to increment away goals
  - `end` to call ShowFinalResults and exit
  - Make sure to rerun `MatchControllerUI(homeGoals, awayGoals)` again at the end with the newly updated homeGoals and awayGoals

Hints
- Keep `homeGoals` and `awayGoals` as variables scoped in `StartMatch()`.

## Bonus

- Can you find the UI functions in init.html and copy the functions over and make it work in the interface?