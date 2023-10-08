/* TODO: 
variable largeur: définit la largeur de la barre de progression javascript
largeur = 0

obtenir nombre_question: getelementbyclassname(classcommune)

vérifier la validité de chaque input

pour vérifier chaque input: utiliser boucle for 
qui parcourt le nombre de question dans form:
i = 0; i < nombre_questions
    pour chaque input: getElementbyId('input_' + i)
    vérifier value et validité réponse
    if reponse valide
        largeur += Math.floor(100/nombre_questions)
*/

let largeur_bar = 0; //largeur de la barre css
console.log(largeur_bar);

let nbr_questions = document.getElementsByClassName('question');
console.log(nbr_questions);

function change_bar_width(largeur_bar) {
    console.log(largeur_bar);
    let css_bar = document.querySelector(".progressbar");
    css_bar.style.setProperty('width', largeur_bar + 'px');
}

function display_part(chiffre, secondchiffre) {
    let part_to_display = document.querySelector("#form_part_" + chiffre);
    let part_to_hide = document.querySelector("#form_part_" + secondchiffre);
    part_to_display.style.setProperty('display', 'block');
    part_to_hide.style.setProperty('display', 'none');
}

function changebar(chiffre) {
    var content = document.forms['form']['input_' + chiffre].value;
    if (content =="") {
        largeur_bar -= Math.floor(100/nbr_questions.length);
    }
    else {
        largeur_bar += Math.floor(100/nbr_questions.length);
    }
    change_bar_width(largeur_bar);
}



