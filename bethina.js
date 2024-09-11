let currentFriend = "";
let preferredGreeting = "";

function drive() {
    let randomEvent = Math.floor(Math.Random() * 4 + 1);

    if (randomEvent === 1) {
<<<<<<< HEAD
        
        // Kjører videre og ingenting skjer
    } else if (randomEvent === 2) {
        
        
=======
        driveText();
        // Kjører videre og ingenting skjer
    } else if (randomEvent === 2) {
        meetingBro();
>>>>>>> 9568591c0d9648f2c45fd081dc53dc8a4934ce73
        // Du møter en kompis
        currentFriend = randomFriend();
        preferredGreeting = randomGreeting();
    } else if (randomEvent === 3) {
<<<<<<< HEAD
        
=======
<<<<<<< HEAD
        meetingKaren()
>>>>>>> 9568591c0d9648f2c45fd081dc53dc8a4934ce73
        
=======
        meetingKaren();
>>>>>>> fc1b4fe (qwedasfgdert)
        // Du møter på Karen
    } else if (randomEvent === 4) {
<<<<<<< HEAD
        
        
=======
        foundItemText();

>>>>>>> 9568591c0d9648f2c45fd081dc53dc8a4934ce73
        // Du finner en ting!
        let item = getRandomItem();
    }
}

function getRandomItem() {
    // array med ting fra Thomas
    //return items[Math.floor(Math.random() * items.lenght)];
}

function greetFriend(selectedGreeting) {
    if (selectedGreeting === preferredGreeting) {
        score += 2;
        // Kompisen din likte hilsen din! Du får 2 poeng og får kjøre videre
    } else {
        score -= 1;
        // Kompisen din likte ikke hilsen din, minus 1 poeng!
    }
}

function randomFriend() {
    let friends = ["Thomas", "Gytis", "Lars", "Bethina", "Daniel"];
    return friends[Math.floor(Math.Random() * friends.length)];
}

function randomGreeting() {
    let greeting = ["Hei!", "High-Five!", "Fist Bump!"];
    return greeting[Math.floor(Math.random() * greeting.length)];
}
