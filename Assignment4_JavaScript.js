var stop = false;
        var animation;
        
        function stop(){
            stop = true;
            if(animation != null)
                clearInterval(animation);
        }
        
        
        function animate() {
            stop = false;
            if(animation != null)
                clearInterval(animaiton);
            document.getElementById("animation_div").innerHTML = "<span>Animating...</span>";
            var text = document.getElementById("inputArea").value;
            document.getElementById("JSDebugging").innerHTML = "<p>Input:" + text + "</p>";
            var colors = document.getElementsByClassName("color_selector");
            var selected_colors = [];
            var debug = "<p>Colors1:";
            document.getElementById("JSDebugging").innerHTML += colors.length + "|";
            for (i = 0; i < colors.length; i++) {
                var color = colors[i].value;
                
                    //selected_colors.append(color);
                document.getElementById("JSDebugging").innerHTML += color;
                
                debug += " " + color;
            }
            document.getElementById("JSDebugging").innerHTML += "|<br>";
            
            

            document.getElementById("JSDebugging").innerHTML += debug + "</p>";
            
            var text_array = text.match(/\S+/g);
            var text_index = 0;
            var color_index = 0;
            document.getElementById("animation_div").innerHTML = "";
            document.getElementById("JSDebugging").innerHTML += "<br>" + text_array + "   " + text_array.length + "<br>Selected Colors:" + selected_colors;
            animation = setInterval(frame ,1000);
            function frame() {
                
                if (stop==false){
                    if( text_index < text_array.length){
                        document.getElementById("animation_div").innerHTML += returnSpanForColor(selected_colors[color_index]) 
                         + text_array[text_index] + "</span> ";
                        text_index++; 
                        color_index = (color_index + 1)% selected_colors.length;
                    }else {
                        document.getElementById("animation_div").innerHTML = "";
                        text_index = 0;
                    }
                }else
                    clearInterval(animation);
            
            }
            
//            while(stop == false){
//                var color_index = 0;
//                interval = setTimeout( function(){
//                  if(text.match(/\s\S*\s/) ){
//                    document.getElementById("animation_part").innerHTML += returnSpanForColor(selected_colors[color_index] + text.match(/\s\S*\s/) + "</span>";
//                    color_index = (color_index + 1)% selected_colors.length;
//                }else clearTimeout();  
//                },1000);
//                
//                document.getElementById("animation_part").innerHTML = "";
//            }
                
            
            
        }
        
        
        
        function returnSpanForColor(color){
            document.getElementById("JSDebugging").innerHTML += color + "<br>";
            switch (color){
                case "red": return "<span class=\"red\">";
                case "green": return "<span class=\"green\">";
                case "blue": return "<span class=\"blue\">";
                default: return "<span class=\"blank\">";
                         }
        }