// Copyright (C) 2023 Pedro Avelino
'use strict';
export default class App{

    openCoolSite(){

        //CSS stuff
        $('body').attr('id', 'rainbow');
        $('#mufasaMain').css('visibility', 'visible');
        
        
        let mainText = $('#todayIs');
        let cool = "GINGADO!!!";
        let length = cool.length;
        
        for (let i = 0; i < length; i++) {
            let copy = $('<span>');
            copy.text(cool[i]);
            mainText.append(copy);
            copy.addClass('letter');
            copy.css('--i',i+1);
        }
    }

    openDanceSite(){
        
        let player = $('<div></div>').attr('id','player'); //Create the player div
        $('body').append(player);
        
        $('#mufasaMain').remove();//Remove the wrapper

        
        var videoURL = "https://www.youtube.com/embed/U6FsRoeoVKQ?loop=1&autoplay=1&mute=1&playlist=U6FsRoeoVKQ&controls=0";
        
        this.loadSongAndPlay("audio/dynamite.mp3"); //Play the song
        
        //Load the video
        var iframe = $("<iframe>").attr({
            "src": videoURL,
            "allowfullscreen": false,
            "width": "100%",
            "height": "100%"
        });


        $('#player').append(iframe);
    }

    loadSongAndPlay(songPath){
        var audio = $("<audio></audio>").attr({
            "src": songPath,
            "loop": true,
            "type":"audio/mp3",
        });

        $('body').append(audio);
        audio[0].play();
    }

    createMessage(message){
        let newDiv = $('<div></div>').attr('id', 'todayIs');
        $('body').append(newDiv);

        let mainText = $('#todayIs');
        

        let cool = message;
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
            if( dayOfWeek == 5 )
            {
                $('#wrapper').remove();
                
                this.openCoolSite();

                //this.openDanceSite();
            }
            else
            {
                $('#notFriday').text('No... today is ' + daysOfWeek[dayOfWeek]);
            }
        });
    }
}
