
        /* let hit = */
       
        /*
            1. Hovedscore (cred/hilsen) score -> max 10 poeng.
            2. Credscore (sendes til #1)
            3. Kjøre over Karen score (?)
        */

        /*
        HILSEN/CRED SCORE: 
        Underkjent hilsen
        console.log ("Hva for slags hilsen er dette!? Ingen credscore!"); // 10% sjangse å få
        Slapp hilsen
        console.log ("Slapp hilsen! Cred score +1"); // 35% sjangse å få
        Helt grei hilsen
        console.log ("Helt grei hilsen! Cred score +2"); // 40% sjangse å få
        Über fet hilsen
        console.log ("Über fet hilsen! Cred score +3"); // 20% sjangse å få
        Mega maximus über fet hilsen
        console.log ("Dette er en hilsen av de sjeldne! Cred score +5!!!"); // 5% sjangse å få
        */

        let score = 10; // Hoved score. Max 10 poeng.

        if(score == 10){ // Score: 10 poeng
        console.log ("YOU WON!!! Maximum score reached.");
        }
        else if(score >= 11){ // Score: 11 poeng (eller mer)
        console.log ("Maximum score is 10!");
        }
        else if(score <= -1){ // Score: -1 poeng (eller lavere)
        console.log ("You can't get any lower score than 0.");
        }
        else if(score == 0){ // Score: 0 poeng
        console.log ("Minimum score reached.");
        }
        else if(score <=5){ // Score: 1-5 poeng
        console.log ("You're in the lower end of the scoring scale.");
        }
        else if(score >=6){ // Score: 6-9 poeng
        console.log ("You're score is in the higher end of the scoring scale");
        }