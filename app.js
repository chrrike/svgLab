class Game {
    foundCircles = 0;
    totalCircles = 0;
    searchColor= "#99FF00";
    normalColor = "#7700AA";
    gameZone = document.getElementById("gameZone");
    foundBar = new foundBar();

    constructor(){
        for(var i = 0; i<25; i++){
            let newCirc = document.createElementNS("http://www.w3.org/2000/svg", "circle");

            newCirc.classList.add("gameCirc");
            newCirc.setAttribute("cx", Math.random() * 400);
            newCirc.setAttribute("cy", Math.random() * 400);

            if(Math.random() < .3){
                newCirc.dataset.hiddenColor = this.searchColor;
                this.totalCircles++;
            }else{
                newCirc.dataset.hiddenColor = this.normalColor;
            }

            newCirc.addEventListener("mouseover", (event)=>{
                event.target.style.fill = event.target.dataset.hiddenColor;
            })

            newCirc.addEventListener("mouseout", (event)=>{
                event.target.style.fill = "#000";
            })

            newCirc.addEventListener("click", (event)=>{
                if(event.target.dataset.hiddenColor == this.searchColor){
                    event.target.remove();

                this.foundCircles++;

                this.foundBar.setPercent(this.foundCircles/this.totalCircles);
                }
                
            })

            this.gameZone.appendChild(newCirc);
        }
    }
}

class foundBar{
    element = document.getElementById("foundBar");
    maxSize = 130;
    percent = 0;

    setPercent(percent){
        this.percent = percent;
        this.element.setAttribute("width", this.percent*this.maxSize);
    }
}

let g = new Game();