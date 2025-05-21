// - Add a bankroll to the data model (the bankroll does not represent the players total liquid assets, but rather the money they are willing to risk in the casino)
//   - Add a function (to the global scope) `getBankroll()` that gets the value of some variable defined somewhere and returns a number
//   - Add a function (to the global scope) `setBankroll(newBalance)` that assigns the value of newBalance (which should be an integer) to the variable the prior function accessed
//   - Initialize the player's bankroll to 2022, it's their luck year
//     - As a pretend online casino, we only deal in whole dollars (integers)
// - Add a function (to the global scope) `timeToBet()` that
//   - Hides the #playersActions section, by adding some class whose rule contains the declaration `display: none`
//   - Displays the #betting section interface you will add to the html which contains:
//     - A span with display of the user's bankroll (with a `$` in front)
//     - A number material textfield `#users-wager` for the user's wager
//     - A material button that contains the text "Bet" and calls
//       - A function called `makeWager`, that console.logs the amount in the #users-wager input and calls a timeToPlay
//     - initially the #betting section should be set to `display:none`
// - Add a function (to the global scope) `timeToPlay()` that
//   - Displays the #playersActions section by adding a class, and hides the #betting section


let bankroll = 2022; // Initialize the player's bankroll to 2022

function getBankroll() {
    return bankroll;
}

function setBankroll(newBalance) {
    if (Number.isInteger(newBalance) && newBalance >= 0) {
        bankroll = newBalance;
    } else {
        console.error("Bankroll must be a non-negative integer.");
    }
}

function timeToBet() {
    const playersActions = document.querySelector("#playersActions");
    playersActions.classList.add("hidden"); // Hide the #playersActions section

    const bettingSection = document.querySelector("#betting");
    bettingSection.classList.remove("hidden"); // Show the #betting section

    const bankrollDisplay = document.querySelector("#bankrollDisplay");
    bankrollDisplay.textContent = `$${getBankroll()}`; // Display the user's bankroll

    betForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission
        makeWager();
    });
}

function timeToPlay() {
    const playersActions = document.querySelector("#playersActions");
    playersActions.classList.remove("hidden"); // Show the #playersActions section

    const bettingSection = document.querySelector("#betting");
    bettingSection.classList.add("hidden"); // Hide the #betting section
}

function makeWager() {
    const wagerInput = document.querySelector("#users-wager");
    const wagerAmount = parseInt(wagerInput.value, 10);

    if (Number.isInteger(wagerAmount) && wagerAmount > 0 && wagerAmount <= getBankroll()) {
        console.log(`Wager amount: $${wagerAmount}`);
        setBankroll(getBankroll() - wagerAmount); // Deduct the wager from the bankroll
        timeToPlay(); // Call timeToPlay after making a wager
    } else {
        console.error("Invalid wager amount.");
    }
}