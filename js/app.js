//Variables
let language = "es"

// Object text in both languages
const translations = {
    es: {
        // Sobre mi
        about_title: "El día que casi explota una computadora...",
        about_description: "Soy Alejandro García, desarrollador indie de Bogotá y estudiante de Ingeniería de Software.<br>Empecé haciendo juegos gracias a los tutoriales de Guinxu y Alva Majo, pasé por GameMaker, Unity y terminé encontrando mi hogar en Godot después de que el computador de mi novia casi explotara intentando abrir Unity.<br>Hoy construyo experiencias de todo tipo: RPG, plataformas, terror o cualquier idea que despierte mi curiosidad. Porque este estudio nació de una idea muy simple:<br>Si un videojuego puede hacerte reír, emocionarte o recordar algo especial, entonces vale la pena crearlo.<br>Y sí, sigo teniendo a Crash Bandicoot 3 tatuado en el corazón.",
        
        // Seccion Juegos
        game_card__title: "Juegos que mi gato disfrutaría si tuviera pulgares",
        games_title: "Juegos que mi gato disfrutaría si tuviera pulgares",
        game_title_1: "Título del juego 1",
        game_desc_1: "un juego superhiper mega increíble para mostrar que sí sé programar",
        download_label_1: "Descárgalo aquí:",
        game_title_2: "Título del juego 2",
        game_desc_2: "un juego superhiper mega increíble para mostrar que sí sé programar",
        download_label_2: "Descárgalo aquí:",
        game_title_3: "Título del juego 3",
        game_desc_3: "un juego superhiper mega increíble para mostrar que sí sé programar",
        download_label_3: "Descárgalo aquí:",
        
        // Footer
        footer_company: "ELGatibius Games",
        footer_copyright: "© 2026 ELGatibius<br>Un humano, un gato y muchos bugs",
        footer_thanks: "Gracias a Guinxu, Alva Majo y la PC de mi novia (RIP)"
    },
    en: {
        // About section
        about_title: "The day a computer almost exploded...",
        about_description: "I'm Alejandro García, an indie developer from Bogotá and a Software Engineering student.<br>I started making games thanks to tutorials by Guinxu and Alva Majo. I went through GameMaker, Unity, and ended up finding my home in Godot after my girlfriend's computer almost exploded trying to open Unity.<br>Today I build all kinds of experiences: RPGs, platformers, horror, or any idea that sparks my curiosity. Because this studio was born from a simple idea:<br>If a video game can make you laugh, get emotional, or remember something special, then it's worth creating.<br>And yes, I still have Crash Bandicoot 3 tattooed on my heart.",
        
        // Games section
        game_card__title: "Games my cat would enjoy if he had thumbs",
        game_title_1: "Game Title 1",
        game_desc_1: "an incredibly super hyper mega game to show that I do know how to program",
        download_label_1: "Download here:",
        game_title_2: "Game Title 2",
        game_desc_2: "an incredibly super hyper mega game to show that I do know how to program",
        download_label_2: "Download here:",
        game_title_3: "Game Title 3",
        game_desc_3: "an incredibly super hyper mega game to show that I do know how to program",
        download_label_3: "Download here:",
        
        // Footer
        footer_company: "ELGatibius Games",
        footer_copyright: "© 2026 ELGatibius<br>One human, one cat, and many bugs",
        footer_thanks: "Thanks to Guinxu, Alva Majo, and my girlfriend's PC (RIP)"
    }
};

//clicListeners
const buttonLang = document.getElementById("lang-button")
buttonLang.addEventListener("click", () => {
    if (language === "es"){
        language = "en"
    }else{
        language = "es" 
    }
    changeLanguage(language)
})

//functions

function changeLanguage(lang){
    currentLanguage = lang;

    //Update elements
    document.getElementById("about-title").innerHTML = translations[lang].about_title;
    document.getElementById("about-text").innerHTML = translations[lang].about_description;

    //Update Game Cards
    document.getElementById("game-card--title").innerHTML = translations[lang].game_card__title;
     // Juegos
    document.getElementById("game-title-1").innerHTML = translations[lang].game_title_1;
    document.getElementById("game-description-1").innerHTML = translations[lang].game_desc_1;
    document.getElementById("game-download-label-1").innerHTML = translations[lang].download_label_1;
    
    document.getElementById("game-title-2").innerHTML = translations[lang].game_title_2;
    document.getElementById("game-description-2").innerHTML = translations[lang].game_desc_2;
    document.getElementById("game-download-label-2").innerHTML = translations[lang].download_label_2;
    
    document.getElementById("game-title-3").innerHTML = translations[lang].game_title_3;
    document.getElementById("game-description-3").innerHTML = translations[lang].game_desc_3;
    document.getElementById("game-download-label-3").innerHTML = translations[lang].download_label_3;
    
    // Footer
    document.getElementById("footer-company-name").innerHTML = translations[lang].footer_company;
    document.getElementById("copy-elgatibius").innerHTML = translations[lang].footer_copyright;
    document.getElementById("footer-thanks").innerHTML = translations[lang].footer_thanks;
}