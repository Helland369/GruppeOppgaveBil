let currentFriend = '';
let preferredGreeting = '';


function drive() {
    let randomEvent = Math.floor(Math.Random() * 4 + 1);

    if (randomEvent === 1) {
        driveText()
        // Kjører videre og ingenting skjer
    } else if (randomEvent === 2) {
        
        meetingBro()
        // Du møter en kompis
        currentFriend = randomFriend();
        preferredGreeting = randomGreeting();
        
    } else if (randomEvent === 3) {
        meetingKaren()
        // Du møter på Karen
    } else if (randomEvent === 4) {
        foundItemText()
        
        // Du finner en ting!
        let item = getRandomItem();
    }
}

function getRandomItem() {

    // array med ting fra Thomas
   return items[Math.floor(Math.random() * items.lenght)];
}


function greetFriend (selectedGreeting) {
    if (selectedGreeting === preferredGreeting) {
        broHappy()
       
        // Kompisen din likte hilsen din! Du får kjøre videre
    }else {
        broMad()
       
        // Kompisen din likte ikke hilsen din
    }
}


function randomFriend() {
    const friends = ['Thomas', 'Gytis', 'Lars', 'Bethina', 'Daniel'];
    return friends [Math.floor(Math.Random() * friends.length)];
}

function randomGreeting (){
    const greeting = ['Hei!', 'High-Five!', 'Fist Bump!'];
    return greeting[Math.floor(Math.random()* greeting.length)];
}