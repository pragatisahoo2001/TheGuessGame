let random_num = Math.floor(Math.random()*20)+1;
        let attempt=20;
        let high_score=0;
        document.querySelector("#check").addEventListener('click',function(){
            
            const guess=Number(document.querySelector("#guess").value);
            console.log(random_num)
            if(!guess)
            document.querySelector("#info").textContent="NO NUMBER";
           else if(guess==random_num)
           {document.querySelector("#info").textContent="Correct ans";
           document.querySelector(".ans").innerHTML=random_num;
           document.querySelector('#highscore').innerHTML=attempt;
           document.querySelector('.cont').style.backgroundColor= "yellow";
           if(attempt>high_score) 
           {
               high_score=attempt;
               document.querySelector("#highscore").textContent=high_score;
           }
        } 
           else if(guess>random_num)
           {
           document.querySelector("#info").textContent="too high";
           attempt=attempt-1;
             document.querySelector("#attempts").textContent=attempt;
           }
           else if(guess<random_num)
           {
            document.querySelector("#info").textContent="too low";
            attempt=attempt-1;
            document.querySelector("#attempts").textContent=attempt;
            }

        });
        document.querySelector("#again").addEventListener('click',function(){
            document.querySelector('.cont').style.backgroundColor="black";
            document.querySelector("#info").innerHTML="START GUESSING";
            document.querySelector("#guess").value="";
            document.querySelector('.ans').innerHTML="?";
            attempt=20;
            console.log(attempt);
            random_num = Math.floor(Math.random()*20)+1;
            document.querySelector("#attempts").textContent=attempt;


        })
        