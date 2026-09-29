const words = [
    "MERN Full Stack Developer",
    "UI/UX Designer",
    "WordPress Developer",
    "AWS Cloud Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

function typeEffect(){

    if(charIndex < words[wordIndex].length){

        typingElement.innerHTML +=
        words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    }

    else{

        setTimeout(() => {

            typingElement.innerHTML="";

            charIndex=0;

            wordIndex++;

            if(wordIndex>=words.length){
                wordIndex=0;
            }

            typeEffect();

        },1500);

    }

}

typeEffect();