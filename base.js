$( document ).ready(function() {

    var tune = new Array("E","A","D","G","B","E");
    var tunePosition = new Array(4,9,2,7,11,4);

    var naturalMajorPosition = new Array(0,2,4,5,7,9,11);
    var naturalMinorPosition = new Array(0,2,3,5,7,8,10);
    
    var harmonicMajorPosition = new Array(0,2,4,5,7,8,11);
    var harmonicMinorPosition = new Array(0,2,3,5,7,8,11);

    var melodicMajorPosition = new Array(0,2,4,5,7,8,10);
    var melodicMinorPosition = new Array(0,2,3,5,7,9,11);

    var pentatonicMajorPosition = new Array(0,2,4,7,9);
    var pentatonicMinorPosition = new Array(0,3,5,7,10);


    var twelveToneEqualTemperament = new Array("C","#C","D","#D","E","F","#F","G","#G","A","#A","B");
    
    $("#selcet_key").change(function(){  
        var key = $("#selcet_key").val();  
        var scale = $("#selcet_scale").val();  

        console.log( "key:"+key );
        changeFingerBoard(key, scale);
    });  

    $("#selcet_scale").change(function(){
        var key = $("#selcet_key").val();  
        var scale = $("#selcet_scale").val();  
        console.log( "scale:"+scale );
        changeFingerBoard(key, scale);

    });  


    function getNotePosition(note){
        return twelveToneEqualTemperament.indexOf(note);
    
    }
    function getKeyNotes(key){
        var keyNotes = new Array();
    var offset = getNotePosition(key);
        for(var i=0;i<twelveToneEqualTemperament.length;i=i+1 ){
        keyNotes.push(twelveToneEqualTemperament[(i+offset)%twelveToneEqualTemperament.length ] );
    }
    return keyNotes;
    }

    function getScalePosition(scale){
        switch (scale){
            case "natural_major":
                return naturalMajorPosition ;
            case "natural_minor":
                return naturalMinorPosition;
            case "harmonic_major":
                return harmonicMajorPosition;
            case "harmonic_minor":
                return harmonicMinorPosition;
            case "melodic_major":
                return melodicMajorPosition;
            case "melodic_minor":
                return melodicMinorPosition;
            case "pentatonic_major":
                return pentatonicMajorPosition;
            case "pentatonic_minor":
                return pentatonicMinorPosition;

        }
    }

    function getKeyScaleNotes(key, scale){
        var keyNotes = getKeyNotes(key);
        var scalePosition = getScalePosition(scale);
        var keyScaleNotes = new Array();
        for(var i=0;i<keyNotes.length;i=i+1){
           if($.inArray(i, scalePosition) !==-1){
                keyScaleNotes.push(keyNotes[i]);
            }
        }
        return keyScaleNotes;
    }

    function changeFingerBoard(key,scale){

        var keyScaleNotes = getKeyScaleNotes(key,scale);

        $(".string_1 .fret").each(function(index,element){
            var note = twelveToneEqualTemperament[(tunePosition[5]+index+1)%twelveToneEqualTemperament.length];
            if($.inArray( note, keyScaleNotes ) !== -1){
                $(this).text(note);
            }else{
                $(this).text("");
            }
        });
        $(".string_2 .fret").each(function(index,element){
            var note = twelveToneEqualTemperament[(tunePosition[4]+index+1)%twelveToneEqualTemperament.length];
            if($.inArray( note, keyScaleNotes ) !== -1){
                $(this).text(note);
            }else{
                $(this).text("");
            }
        });
        $(".string_3 .fret").each(function(index,element){
            var note = twelveToneEqualTemperament[(tunePosition[3]+index+1)%twelveToneEqualTemperament.length];
            if($.inArray( note, keyScaleNotes ) !== -1){
                $(this).text(note);
            }else{
                $(this).text("");
            }
        });
        $(".string_4 .fret").each(function(index,element){
            var note = twelveToneEqualTemperament[(tunePosition[2]+index+1)%twelveToneEqualTemperament.length];
            if($.inArray( note, keyScaleNotes ) !== -1){
                $(this).text(note);
            }else{
                $(this).text("");
            }
        });
        $(".string_5 .fret").each(function(index,element){
            var note = twelveToneEqualTemperament[(tunePosition[1]+index+1)%twelveToneEqualTemperament.length];
            if($.inArray( note, keyScaleNotes ) !== -1){
                $(this).text(note);
            }else{
                $(this).text("");
            }
        });
        $(".string_6 .fret").each(function(index,element){
            var note = twelveToneEqualTemperament[(tunePosition[0]+index+1)%twelveToneEqualTemperament.length];
            if($.inArray( note, keyScaleNotes ) !== -1){
                $(this).text(note);
            }else{
                $(this).text("");
            }
        });

    }  



});