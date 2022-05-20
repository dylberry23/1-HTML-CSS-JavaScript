function rollDice() {
    let goldCoins = 0;
    for (let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        alert('You roll a ' + roll + '.');
        if (roll === 1) {
            alert('Game over, no more rolls!');
            break;
        }
        if (roll < 5) {
            continue;
        }
        if (roll === 4) {
            goldCoins -= 1;
        }
        alert('Congratulations, you win ' + roll + ' gold coins!');
        goldCoins += roll;
        alert('Total coin count is: ' + goldCoins);
    }
    alert('You have won a total of ' + goldCoins + ' gold coins!');
}