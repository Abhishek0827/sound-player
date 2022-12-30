        function hide() {
            let btn = document.getElementById("btn");
            let para = document.getElementById("para")
            let row=document.querySelector(".row1");
            if (para.style.display != "none") {
                para.style.display = "none";
               
            }
            else {
                para.style.display = "block";
 
            }
        }
        let audio1 = document.querySelector("#audiobtn1");
        audio1.addEventListener("click",() => {
            let a = new Audio("pop.mp3");
            a.play();
        });

        let audio2 = document.getElementById("audiobtn2");
        audio2.addEventListener("click",() => {
            let b = new Audio("bell.mp3");
            b.play();
        });

        let audio3 = document.getElementById("audiobtn3");
        audio3.addEventListener("click",()=>{
            let c= new Audio("beep.mp3");
            c.play();
        });
        
        let audio4=document.getElementById("audiobtn4");
        audio4.addEventListener("click",()=>{
            let d=new Audio("CAT.mp3");
            d.play();
        })

        let audio5=document.getElementById("audiobtn5");
        audio5.addEventListener("click",()=>{
            let e=new Audio("DOG.mp3");
            e.play()
        })

        let audio6=document.getElementById("audiobtn6");
        audio6.addEventListener("click",()=>{
            let f=new Audio("bird.mp3");
            f.play();
        })