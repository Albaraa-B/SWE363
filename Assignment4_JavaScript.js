var stop = false;
var animation;

function stopAnimatingIt() {
    document.getElementById("JSDebugging").innerHTML += "<br>Stopping:<br>";
    document.getElementById("JSDebugging").innerHTML += "<br>managing buttons......";
    document.getElementById("stop_btn").disabled = true;
    document.getElementById("start_btn").disabled = false;
    document.getElementById("JSDebugging").innerHTML += "Done<br>Clearing animation.........";
    if (animation != null) {
        clearInterval(animation);
    }
    document.getElementById("JSDebugging").innerHTML += "Done<br>Stopped<br>";

}


function animateIt() {
    stop = false;
    document.getElementById("JSDebugging").innerHTML += "managing buttons..........";
    document.getElementById("stop_btn").disabled = false;
    document.getElementById("start_btn").disabled = true;
    document.getElementById("JSDebugging").innerHTML += "Done<br>Clearing old animation.........";
    if (animation != null)
        animation = null;
    document.getElementById("JSDebugging").innerHTML += "Done<br>";
    document.getElementById("animation_div").innerHTML = "<span>Animating...</span>";
    var text = document.getElementById("inputArea").value;
    document.getElementById("JSDebugging").innerHTML = "Initiating vars:<br><p>Input:" + text + "</p>";
    var colors = document.getElementsByClassName("color_selector");
    var selected_colors = "";
    var debug = "<p>Colors1:";
    document.getElementById("JSDebugging").innerHTML += colors.length + "|";
    for (i = 0; i < colors.length; i++) {
        var color = colors[i].value;

        if (color != "blank") {
            selected_colors += color + " ";
        }
        document.getElementById("JSDebugging").innerHTML += color;

        debug += " " + color;
    }
    document.getElementById("JSDebugging").innerHTML += "|<br>";



    document.getElementById("JSDebugging").innerHTML += debug + "</p>";

    var text_array = text.match(/\S+/g);
    var text_index = 0;
    var color_index = 0;
    document.getElementById("animation_div").innerHTML = "";
    document.getElementById("JSDebugging").innerHTML += "<br>" + document.getElementById("animation_div").className + "<br>" + text_array + "   " + text_array.length + "<br>Selected Colors:" + selected_colors + "<br>";
    animation = setInterval(frame, 1000);

    function frame() {

        if (stop == false) {
            if (text_index < text_array.length) {
                selected_colors = selected_colors.trim();
                var color = selected_colors.substr(0, selected_colors.indexOf(" ")).trim();
                selected_colors = selected_colors.substr(selected_colors.indexOf(" "), selected_colors.length);
                document.getElementById("animation_div").innerHTML += returnSpanForColor(color) +
                    text_array[text_index] + "</span> ";
                text_index++;
                selected_colors += " " + color;
                document.getElementById("JSDebugging").innerHTML += "<br>" + selected_colors + "<br>";
            } else {
                document.getElementById("animation_div").innerHTML = "";
                text_index = 0;
            }
        } else
            clearInterval(animation);
    }
}


    function returnSpanForColor(color) {
        document.getElementById("JSDebugging").innerHTML += color + "<br>";
        switch (color) {
            case "red":
                return "<span class=\"red\">";
            case "green":
                return "<span class=\"green\">";
            case "blue":
                return "<span class=\"blue\">";
            default:
                return "<span class=\"blank\">";
        }
    }

    function setFontSize() {
        var radio_btns = document.getElementsByName("size");
        var size;
        for (i = 0; i < radio_btns.length; i++)
            if (radio_btns[i].checked) {
                size = radio_btns[i].value;
                break;
            }
        var attr = document.getElementById("animation_div").className;
        if (attr.match(/[f]\d+/))
            attr = attr.replace(/[f]\d+/, "f" + size);
        else
            attr += " f" + size;

        document.getElementById("animation_div").setAttribute("class", attr);
    }
