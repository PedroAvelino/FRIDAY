// Copyright (C) 2023 Pedro Avelino
'use strict';
export default class App{

    
    openCoolSite(){

        let mainText = $('#todayIs');
        let cool = "It's Friday!!!";
        let length = cool.length;
        
        for (let i = 0; i < length; i++) {
            let copy = $('<span>');
            copy.text(cool[i]);
            mainText.append(copy);
            copy.addClass('letter');
            copy.css('--i',i+1);
        }
    }

    run(){
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const today = new Date(); 
        const dayOfWeek = today.getDay();

        $('#wrapper').on('click', e => {
            if( dayOfWeek == 3 )
            {
                $('#wrapper').remove();
                $('#mufasaMain').css('visibility', 'visible');
                
                var audio = $("<audio></audio>").attr({
                    "src": "../audio/pushTheFeelingOn.mp3",
                    "loop": true
                  });

                $('body').append(audio);
                
                audio[0].play();
                this.openCoolSite();
            }
            else
            {
                $('#notFriday').text('No... today is ' + daysOfWeek[dayOfWeek]);
            }
        });
    }
}