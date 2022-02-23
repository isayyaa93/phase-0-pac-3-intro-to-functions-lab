function shout(string){
    return string.toUpperCase();
}
console.log(shout("hello"));

function whisper(string){

    return string.toLowerCase();
}

console.log(whisper("HELLO"));

function logShout(string){
    console.log(string.toUpperCase());
    
}

function logWhisper(string){
    console.log(string.toLowerCase());
    
}

const negative = "I can't hear you!";
const positive = "YES INDEED!";
const dinner = "I would love to!";

function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase(string) === string) {
      return negative
    }
    else if (string.toUpperCase(string) === string) {
      return positive
    }
    else if ("Let's have dinner together!" === string) {
      return dinner
    }
};
