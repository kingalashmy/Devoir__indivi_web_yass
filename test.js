function echangerPositionsDivs() {
    const divPrincipale = document.querySelector('.main_list_principale');

    const divModul = document.querySelector('.modul_css');
  
    if (divPrincipale && divModul) {
      const parent = divPrincipale.parentNode;
      const temp = document.createElement('div');

      parent.insertBefore(temp, divPrincipale);
      parent.insertBefore(divModul, temp);
      
        
      parent.removeChild(temp);
    }
    
     // Modifier les propriétés CSS
    //  divPrincipale.style.setProperty('background-color', 'red');
     divPrincipale.style.setProperty('margin-left','40%');
    //  divPrincipale.style.setProperty('border','solide 2px black');
     
    //  divModul.style.setProperty('display', 'flex');
     divPrincipale.style.setProperty('display', 'inline');

    //  divPrincipale.style.setProperty('float', 'right');

}


//  fonction de suppremer  
function supprimerElement(elementId) {

    

    const element = document.getElementById(elementId);
    if (element) {
     element.remove();
   }
 }
 // Sélectionnez l'élément que vous souhaitez rendre cliquable
 const element_Supprimer = document.getElementById('supprimer');
 // Ajoutez un gestionnaire d'événements de clic pour supprimer l'élément lorsque vous cliquez dessus
 element_Supprimer.addEventListener('click', function() {
   supprimerElement('element_Supprimer');

 });
//  fin de fonstion de supprimer les elements 
  
// fonction pour ajouter les elements au debut ou a la fin 

function ajouterElement(event) {
    const clickedElement = event.target;
  
    if (clickedElement.classList.contains('insere_au_debut') || clickedElement.classList.contains('insere_au_fin')) {
      const parentLi = clickedElement.parentElement;
      const saisie = prompt('Entrez un nouvel élément :');
    //   let node = document.getElementById('clone').cloneNode() ; 
    //   node.style.display = 'block' ; 
      if (saisie !== null && saisie.trim() !== '') {

        const nouvelElement = document.createElement('li');
        nouvelElement.textContent = saisie;
  
        if (clickedElement.classList.contains('insere_au_debut')) {
          parentLi.parentElement.insertBefore(node, parentLi);
        } else if (clickedElement.classList.contains('insere_au_fin')) {
          parentLi.parentElement.appendChild(nouvelElement);
        }
      }
    }
  }
//   fin fonction pour ajouter les elements au debut ou la fin   

// start fonction pour affiche les element des list defi image 

// // function afficher_html(){
// //     var container_hmlt = document.getElementById('modul_hmlt_2') ; 
// //     var container_css = document.getElementById('modul_css') ; 
// //     container_hmlt.hidden = false  ; 
// //     container_css.hidden = true ;  
// // }
// function afficher_css(){
//     var container_hmlt = document.getElementById('modul_hmlt_2') ; 
//     var container_css = document.getElementById('modul_css_1') ; 
//     container_hmlt.hidden = true   ;
//     container_css.hidden = false ;  
 
// }


  // Fonction pour compter les mots il doit modifier pour tout les paragraph 
  function compterMots() {
    // Récupérer le paragraphe par son id
    var paragraphe = document.getElementById('texte');

    // Récupérer le contenu texte du paragraphe
    var contenu = paragraphe.textContent || paragraphe.innerText;

    // Diviser le contenu en mots en utilisant l'espace comme séparateur
    var mots = contenu.split(' ');

    // Filtrer les mots vides
    mots = mots.filter(function (mot) {
      return mot.trim() !== '';
    });

    // Mettre le nombre de mots dans le span avec l'id "compter"
    document.getElementById('compter').textContent = mots.length;
  }

  // Appeler la fonction au chargement de la page
  window.onload = compterMots;

// fin de fonction pour compter les mots 

// affiche les title et definition et l'image des liste 

var dict = {
  "HTML": ["HTML", "Heper Test Markup Langge", "html.png"],
  "CSS": ["CSS", "feuilles de style en ce ", "css.png"],
  "JS": ["JavaScript", "language de programation pour fait la dynamique ", "js.png"],
  "PHP": ["PHP", "php est language des programation pour dyanamique de web site ", "php.png"],
  "Developpement web": ["Developpement web","le développement web fait référence au processus d’écriture d’un site ou d’une page web dans un langage technique", "web.jpeg"],
  "cote client": ["Cote client", "definition de cote client ", "client.png"],
};

var langagesListe = document.getElementById('list_principale');
var informationsLangageDiv = document.getElementById('informationsLangage');
var titleElement = document.getElementById('title');
var paragraphElement = document.getElementById('paragraph');
var imageElement = document.getElementById('image');


langagesListe.addEventListener('click', function (event) {
  var target = event.target;
  var langage = target.getAttribute('data-langage');

  if (langage) {
    var informations = dict[langage];

    if (informations) {
      titleElement.textContent = informations[0];
      paragraphElement.textContent = informations[1];
      imageElement.src = informations[2];
      imageElement.alt = langage;
    } else {
      alert("Information non trouvée pour le langage " + langage);
    }
  }
});

// fin la fonction de title et la definition et l'image 

