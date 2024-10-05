const cards = document.querySelectorAll('.card');
let matchcard=0;
 let cardone ,cardtwo;
 let disableDeck=false
function filpcard(e) {
    const clickedCard = e.target.closest('.card');
    if(clickedCard !== cardone && !disableDeck ){
        clickedCard.classList.add("flip")
        if(!cardone){
            return cardone=clickedCard
        }
        cardtwo=clickedCard
        disableDeck=true
        let cardoneimg=cardone.querySelector("img").src,
        cardtwoimg=cardtwo.querySelector("img").src;

        matchcards(cardoneimg,cardtwoimg)
    }

}
function matchcards(img1,img2){
   if(img1===img2){
    matchcard++
    if(matchcard==8){
        setTimeout(()=>{
            return shuffleCard()
           },1000)
      
    }
    cardone.removeEventListener("click",filpcard)
    cardtwo.removeEventListener("click",filpcard)
    cardone=cardtwo="";
    return disableDeck=false


   }
   setTimeout(()=>{
    cardone.classList.add("shake")
    cardtwo.classList.add("shake")

   },400)
   setTimeout(()=>{
    cardone.classList.remove("shake","flip")
    cardtwo.classList.remove("shake","flip")
    cardone=cardtwo="";
    disableDeck=false


   },1200)

}
function shuffleCard(){
     matchcard=0;
    cardone=cardtwo=""
    disableDeck=false
    let arr=[1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]
    arr.sort(()=>Math.random() >0.5 ? 1:-1)
    cards.forEach((card,index) => {
        card.classList.remove("flip")
        let imgTag= card.querySelector("img")
        imgTag.src=`Images/img-${arr[index]}.png`
        card.addEventListener("click", filpcard);
    });
}
shuffleCard()
cards.forEach(card => {

    card.addEventListener("click", filpcard);
});
