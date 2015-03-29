$(document).ready(function(){    
    var videoID = "jb8aRstBKVM";
    
    //************ VIDEO **********//
    $(".video").click(function(){
        var link = $("iframe").prop("src");
        var linkPosition = link.lastIndexOf("/");
        var videoLink = link.slice(linkPosition+1);
        var buttonClicked = $(this).parent().prop("id");
              
        switch (buttonClicked){
            case "nature-intro":
                videoID = "dCMmXbmFr0M";
                break;
            case "vulture":
                videoID = "BcKK1zuWq5w";
                break;
            case "nature":
                videoID = "jb8aRstBKVM";
                break;
            case "no-will-to-escape":
                videoID = "ZPE7zqjeBm0";
                break;
            case "your-end":
                videoID = "Fv8eBctUKDE";
                break;
            case "pdttlofertpg":
                videoID = "mKj5UMfMCCc";
                break;
            case "breathe":
                videoID = "9ZLGIfdMLwk";
                break;
            case "mittens-the-worshipper":
                videoID = "9PybnVFPSKw";
                break;
            case "door":
                videoID = "XsOji8knWME";
                break;
            case "scars-m":
                videoID = "b3hvbGGl4jQ";
                break;
            case "vier":
                videoID = "Y2gEkjWnG64";
                break;
            case "homage-to-pavlia":
                videoID = "6Rj9TX1A4SE";
                break;
            case "masculine-indifference":
                videoID = "ZW08jmCr8VQ";
                break;           
            case "hm-the-ignorance-and-i":
                videoID = "ezHr-Tqj0Kg";
                break;
            case "take-over":
                videoID = "31v3IFYi3Rw";
                break;
            default:
                videoID = "jb8aRstBKVM";
        };
        
        var updatedVideoLink = link.replace(videoLink,videoID);
        $("iframe").prop("src",updatedVideoLink);
        
        
        $(".body-overlay").fadeIn(); 
        
        $("audio").each(function(){
            this.player.pause(); 
        });
    });
    
    
    //************* VIDEO OVERLAY ************ //
    $(".body-overlay").click(function(){
        $(this).hide();
        
        $("iframe").prop("src","https://www.youtube.com/embed/stop");
    });
    
    
    //************** AUDIO *********** //
    $(".play, .song-title").click(function(){
        var trackID = $(this).parent().prop("id");
        var trackReplacement = trackID + "_zesd";
        var trackName = $(this).parent().children(".song-title").html();
        
        $(".current-track").html(trackName);
        
        var link = $("audio").prop("src");
        var linkPosition = link.lastIndexOf("/");
        var mp3Position = link.lastIndexOf("mp3");
        var audioLink = link.slice(linkPosition+1,mp3Position-1);
        var updatedAudioLink = link.replace(audioLink,trackReplacement);
        
        $(".audio-div").css("visibility","visible");
        
        $("audio").prop("src",updatedAudioLink);
        $("audio").each(function(){
            this.player.play();   
        }); 

        
    });

    
    // *********** AUDIO PLAYER *********** //
    $("audio").mediaelementplayer({
        success: function(player, node){
            $("#"+ node.id + "-mode").html("mode: " + player.pluginType);     
        }
    }); 
    
    //***************Player WIDTH *********** //
    $("#mep_0").prop("style","width: 320px; height: 30px;");
    

});