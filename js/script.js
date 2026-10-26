function Puzzle() {
    const MIN_VAL = 1, MAX_VAL = 50;
    const MAX_GUESS = Math.floor(Math.log2(MAX_VAL - MIN_VAL + 1)) + 1;

    var guesses = [], length = 0;
    var num = MIN_VAL + Math.floor(Math.random() * (MAX_VAL - MIN_VAL + 1));
    console.log(num);

    while (length < MAX_GUESS) {
        var guess = prompt(
            "Enter Your " + (length + 1) + " Attempt (You Have " + (MAX_GUESS - length) + " Attempts):"
        );
        if (guess.length == 0) {
            alert("Your Guess is not a Number");
            continue;
        }
        var ok = true;
        for (var i = 0; i < guess.length; i++) {
            if (!('0' <= guess[i] && guess[i] <= '9')) {
                ok = false;
                break;
            }
        }
        if (!ok) {
            alert("Your Guess is not a Integer Number");
            continue;
        }
        guess = parseInt(guess);
        if (!(MIN_VAL <= guess && guess <= MAX_VAL)) {
            alert("Your Number is not in The Range [" + MIN_VAL + "," + MAX_VAL + "]");
            continue;
        }
        guesses.push(guess);
        length++;
        if (guess == num) {
            break;
        }
        if (length < MAX_GUESS) {
            if (guess < num) {
                alert("Too Low!");
            }
            else {
                alert("Too High!");
            }
        }
    }
    if (guesses[length - 1] == num) {
        alert("You Won!\nYour Guesses are: " + guesses.join(", "));
    }
    else {
        alert("You Lost!\nYour Guesses are: " + guesses.join(", ") + "\nThe Correct Number is " + num);
    }
};