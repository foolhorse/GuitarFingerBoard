$( document ).ready(function() {

    var tune = new Array("E","A","G","B","A","E");
    var tuneIndex = new Array(28,33,38,43,47,52);

    var majorPosition = new Array(0,2,4,5,7,9,11);
    var minorPosition = new Array(0,2,3,5,7,8,10);

    var noteArr = new Array("C","#C","D","#D","E","F","#F","G","#G","A","#A","B");
    var noteMap = new Array();
    
    var j=0;
    for(var i =0; i<82; i=i+1){
        noteMap.push(noteArr[j]);
        j=j+1;
        if(j==12){
            j=0;
        }
    }

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

    function changeFingerBoard(key,scale){
        var offset = 0 ;
        var note = new Array();
        switch (key){
            case "C":
                offset = 0 ;
                break;
            case "D":
                offset = 2 ;
                break;
            case "E":
                offest = 4 ;
                break;
            case "F":
                offest = 5 ;
                break;
            case "G":
                offest = 7 ;
                break;
            case "A":
                offest = 9 ;
                break;
            case "B":
                offest = 11 ;
                break;
        }
        var noteKeyArr = new Array();
        for(var i=0;i<noteArr.length;i=i+1){
            var indexOffset = 0 ;
            if(i+offest<noteArr.length){
                indexOffset=i+offest;
            }else{
                indexOffset = i+offest - noteArr.length;
            }
            noteKeyArr.push(noteArr[indexOffset]);

        }
        switch (scale){
            case "major":
                for(var i=0;i<majorPosition.length;i=i+1 ){
                     note.push(noteKeyArr[majorPosition[i]] );
                }
                break ;
            case "minor":
                for(var i=0;i<minorPosition.length;i=i+1 ){
                     note.push(noteKeyArr[minorPosition[i]]);
                }
                break;
        }

        // string 1
        $(".string_1 .fret").each(function(index,element){
            var n = noteMap[(tuneIndex[5]+index+1)];
            if($.inArray( n, note ) !== -1){
                $(this).text(n);
            }else{
                $(this).text("");
            }
        });
        $(".string_2 .fret").each(function(index,element){
            var n = noteMap[(tuneIndex[4]+index+1)];
            if($.inArray( n, note ) !== -1){
                $(this).text(n);
            }else{
                $(this).text("");
            }
        });
        $(".string_3 .fret").each(function(index,element){
            var n = noteMap[(tuneIndex[3]+index+1)];
            if($.inArray( n, note ) !== -1){
                $(this).text(n);
            }else{
                $(this).text("");
            }
        });
        $(".string_4 .fret").each(function(index,element){
            var n = noteMap[(tuneIndex[2]+index+1)];
            if($.inArray( n, note ) !== -1){
                $(this).text(n);
            }else{
                $(this).text("");
            }
        });
        $(".string_5 .fret").each(function(index,element){
            var n = noteMap[(tuneIndex[1]+index+1)];
            if($.inArray( n, note ) !== -1){
                $(this).text(n);
            }else{
                $(this).text("");
            }
        });
        $(".string_6 .fret").each(function(index,element){
            var n = noteMap[(tuneIndex[0]+index+1)];
            if($.inArray( n, note ) !== -1){
                $(this).text(n);
            }else{
                $(this).text("");
            }
        });

    }  



});

