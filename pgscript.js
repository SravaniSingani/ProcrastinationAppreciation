window.onload = pageLoaded;

function pageLoaded(){
    console.log("page loaded");

    startbtn = document.querySelector(".startpage--btn");

    startPage = document.querySelector(".startpage");
    waitPage = document.querySelector(".waitpage");
    resultPage = document.querySelector(".resultpage");
    commons = document.querySelector(".commons");

    resultText = document.querySelector(".result--appreciation");

    waitPage.style.display = "none";
    resultPage.style.display = "none";

    var praiseText;

    startbtn.addEventListener("click", waitpage);

    function waitpage(){

        startPage.style.display = "none";
        waitPage.style.display = "block";
        commons.style.display = "flex";
        resultPage.style.display = "none";


        console.log("wait page is ready");

        setTimeout(redirectToResultpage, 5000);

    }

    function redirectToResultpage(){
        console.log("result page is loaded");
        waitPage.style.display = "none";
        commons.style.display = "none";
        resultPage.style.display = "block";

        randomDigit = Math.ceil(Math.random()*20);
        console.log(randomDigit);

        switch(randomDigit){
            case 1: praiseText = "'You're the king of chill, the captain of delay, In the Procrastination Olympics, you lead the way!'";
                    break;
            case 2: praiseText = "'You navigate time like a laid-back navigator, Procrastination's champion, a true innovator.'";
                    break;
            case 3: praiseText = "Here's to the unsung hero of horizontal living, the maestro of the 'nap-certo'! Your dedication to the art of doing nothing is truly an inspiration—probably to your couch cushions.";
                    break;
            case 4: praiseText = "To the wizard of the recliner realm, your magical ability to turn every day into a 'Staycation Spectacular' is nothing short of enchanting. The remote control is your wand, and the sofa, your throne.";
                    break;
            case 5: praiseText = "In the speed race of life, you're a strolling contender. With a flag that reads 'Procrastination Defender.";
                    break;
            case 6: praiseText = "To the grandmaster of the grand nap, your ability to make 'procrastination' sound like a prestigious title deserves a standing ovation. Or maybe just a slow, leisurely clap.";
                    break;
            case 7: praiseText = "'You're the Zen master of 'I'll do it later, Turning stress into ease, a true time manipulator.'";
                    break;
            case 8: praiseText = "They say doing nothing is impossible, but you, my friend, are living proof that the word itself says 'I'm possible. Hats off'";
                    break;
            case 9: praiseText = "Congratulations on successfully turning inertia into an art form! Your commitment to the delicate balance between relaxation and idleness is truly admirable.";
                    break;
            case 10: praiseText = "To the Olympic gold medalist in the sport of 'Couch Potato-ing,' your dedication to perfecting the art of Olympic-level lounging deserves a podium of recliners. Take a bow, or just take a nap.";
                    break;   
            case 11: praiseText = "'Finding new ways to be lazy is probably most the productive thing you've done today. I appreciate your creativity. You are a true legend'";
                    break;
            case 12: praiseText = "'To the wizard of the do-nothing realm, your spellbook probably consists of just one page saying, 'Abracazilch!' Your magical ability to turn activity into inactivity is truly enchanting.";
                    break;
            case 13: praiseText = "Kudos to the chairman of the 'Committee for the Advancement of Lethargy'! Your meetings are probably just prolonged stares into space, but hey, it's a vision we can all get behind.";
                    break;
            case 14: praiseText = "Introducing the 'Snoozerhero'! Fighting crime by day? Nah, you're too busy fighting the urge to do anything at all. Your power nap is mightier than any punch.";
                    break;
            case 15: praiseText = "To the Sultan of Serenity, you've turned the art of doing nothing into a magical carpet ride through the kingdom of leisure. Your laziness is truly a whole new world of comfort!";
                    break;
            case 16: praiseText = "In the world of animated comfort, you're the 'Lion Zzzing', ruling over the Pride Lands of Relaxation with a majestic roar...or more likely, a gentle snore.";
                    break;
            case 17: praiseText = "You're the Rapunzel of repose, 'And at last, you see the light' of the perfect spot to take a nap.";
                    break;
            case 18: praiseText = "You're the Ross Geller of relaxation, turning 'unagi' into a state of blissful laziness. Could you be any more laid-back";
                    break;
            case 19: praiseText = "To the 'Delay Dynamo,' your commitment to postponing things is truly electrifying. Move over, superheroes; we've got the Master of Postponement!";
                    break;
            case 20: praiseText = "Salute to the 'Sofa Sorcerer'! Your magical ability to transform any setting into a sanctuary of sloth is truly enchanting.";
                    break;             
        }
      
        resultText.innerHTML = praiseText;
       //console.log(resultText);

    }

    regenerateBtn = document.querySelector(".generate--again");
    regenerateBtn.addEventListener("click", waitpage);

}