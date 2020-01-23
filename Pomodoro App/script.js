var interval      = 1000;
var expected      = Date.now() + interval;

//convert the necessary values into a strin, stringify them, then parse them and use them. 
minutesDisplay         = document.getElementById('minutes');
secondsDisplay         = document.getElementById('seconds');
submitButton           = document.getElementById('set-values');

// var workInputValue     = document.getElementById('workInput').value;
// var workTimeSerialized = JSON.stringify(document.getElementById('workInput').value).value;

submitButton.addEventListener('click', (e) => {
    
    var workTimeSerialized = JSON.stringify(document.getElementById('workInput').value);
        localStorage.setItem('workTimeKey', workTimeSerialized);
        console.log('submit pressed');
        e.preventDefault();
    })

// submitButton.addEventListener('click', (e) => {
//     localStorage.setItem('workTimeKey', workTimeSerialized);
//     console.log('submit pressed');
//     e.preventDefault();
// })

var storedTime         = localStorage.getItem('workTimeKey');
var workTimeFinal      = JSON.parse(storedTime);
var workInputValue     = document.getElementById('workInput').value;

var pauseValue = 1; //0 means pause 1 means play
var pauseButton = document.getElementById('pause');
var continueButton = document.getElementById('continue');

    setTimeout(step, interval); //stop counting down when time hits zero
        //This is the code for the timer
   //======================================================
function step() { // the value changes but the timer won't restart once it's stopped
        var dt = Date.now() - expected; 

        if (dt > interval) {

        }
        
        if( pauseValue == 1 ){
            workTimeFinal--;
        }
        
        minutesDisplay.innerText = workTimeFinal; 
        secondsDisplay.innerText = (workTimeFinal * 60000)/1000;

        expected += interval;
        setTimeout(step, Math.max(0, interval - dt));
        console.log('second passed');
    
}

    //onload stuff here
//============================================================================================
    function ResetMinutes(){
        minutesDisplay.innerText = workTimeFinal;
        console.log('ResetMinutes');
    }

    function ResetSeconds(){
        secondsDisplay.innerText = 00;
        console.log('ResetSeconds');
    }

    
    minutesDisplay.onload = ResetMinutes();
    secondsDisplay.onload = ResetSeconds();
    
    //onclick calls here
//================================================================================================

    pauseButton.addEventListener('click', function(){
        pauseValue = 0;
    })

    continueButton.addEventListener('click', function(){
        pauseValue = 1;
    })
  
    //Change images and styling here
//==================================================================================
// start by making function(s) then attach them to event listeners

var body        = document.getElementsByTagName('body');
var bg          = document.getElementById('bg');
var beachButton = document.getElementById('beachButton');
var mtnButton   = document.getElementById('mtnButton');
var lakeButton  = document.getElementById('lakeButton');
var farmButton  = document.getElementById('farmButton');
var cafeButton  = document.getElementById('cafeButton');
var sidebar     = document.getElementById('sidebar');
var els = document.getElementsByClassName('topbutton');
var els02 = document.getElementsByClassName('botbutton');
var settingsButton = document.getElementById('settingsButton');
var settingsDiv = document.getElementById('settings-container');
var settingsInput = document.getElementById('settings');

settingsInput.style.display = 'none'
settingsDiv.style.backgroundColor = 'transparent';

beachButton.addEventListener('click', function() {
    bg.style.backgroundImage = "url('img/beach04.jpg')";
})

mtnButton.addEventListener('click', function(){
   bg.style.backgroundImage = "url('img/mountain02.jpg')"; 

   for (var i = 0; i < els.length; i++) {
    els[i].style.color = 'black';
    els[i].style.borderColor = 'black';
}
for (var i = 0; i < els.length; i++) {
    els02[i].style.color = 'black';
    els02[i].style.borderColor = 'black';
}
})

lakeButton.addEventListener('click', function(){
    bg.style.backgroundImage = "url('img/dock.jpg')"; 

    for (var i = 0; i < els.length; i++) {
        els[i].style.color = 'black';
        els[i].style.borderColor = 'black';
    }
    for (var i = 0; i < els.length; i++) {
        els02[i].style.color = 'black';
         els02[i].style.borderColor = 'black';
    }
})

farmButton.addEventListener('click', function(){
    bg.style.backgroundImage = "url('img/wheat field.jpg')"; 

    for (var i = 0; i < els.length; i++) {
        els[i].style.color = 'black';
        els[i].style.borderColor = 'black';
    }
    for (var i = 0; i < els.length; i++) {
        els02[i].style.color = 'black';
         els02[i].style.borderColor = 'black';
    }

})

cafeButton.addEventListener('click', function() {
    bg.style.backgroundImage = "url('img/cafe.jpeg')"; //change text colors
    
    for (var i = 0; i < els.length; i++) {
      els[i].style.color = 'white';
      els[i].style.borderColor = 'white';
    }
    for (var i = 0; i < els.length; i++) {
        els02[i].style.color = 'white';
        els02[i].style.borderColor = 'white';
      }      

  })

settingsButton.addEventListener('click', function(){
    


    if (settingsDiv.style.backgroundColor == 'transparent'){
        settingsDiv.style.backgroundColor = 'rgb(0, 0, 0, .9)';
    } else{
        settingsDiv.style.backgroundColor = 'transparent';
    }

    if (settingsInput.style.display == 'none'){
        settingsInput.style.display = 'initial';
    } else{
        settingsInput.style.display = 'none'
    }
})