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
    
