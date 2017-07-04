function mdp(){
   var a = prompt("Mot de passe :","")
   
   switch (a){
       case "wilquinlogan123" :
           document.location.href = "https://skullyfox.github.io/CV/"
           break
        
        default :
            alert('Mauvais mot de passe !')
            window.location = "index.html"
            }

    
}