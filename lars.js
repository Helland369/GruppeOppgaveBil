/* let hit = */

/*
            1. Hovedscore (cred/hilsen) score -> max 10 poeng.
            2. Credscore (sendes til #1)
            3. Kjøre over Karen score (?)
        */

let score = 10; // Hoved score. Max 10 poeng.

function mainScore(){
if (score == 10) {
    // Score: 10 poeng
    //  YOU WON!!! Maximum score reached //
} else if (score >= 11) {
    // Score: 11 poeng (eller mer)
    console.log("Maximum score is 10!");
} else if (score <= -1) {
    // Score: -1 poeng (eller lavere)
    console.log("You can't get any lower score than 0.");
} else if (score == 0) {
    // Score: 0 poeng
    console.log("Minimum score reached.");
} else if (score <= 5) {
    // Score: 1-5 poeng
    console.log("You're in the lower end of the scoring scale.");
} else if (score >= 6) {
    // Score: 6-9 poeng
    console.log("You're score is in the higher end of the scoring scale");
}
}
