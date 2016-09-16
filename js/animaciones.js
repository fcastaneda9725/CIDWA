var consulta = window.matchMedia('(max-width: 1000px)');
var redimension = window.matchMedia('(max-width: 1000px)');

function mediaQuery() {
    if (consulta.matches) {
        $(".primero").click(function () {
            $(".segundo").animate({
                "height": "0%",
                "min-height": "0px"
            }, "slow");
            $(".tercero").animate({
                "height": "0%",
                "min-height": "0px"
            }, "slow");
            $(".logo").hide("slow");
            $(".cuadro").hide("slow");
            $(this).animate({
                "height": "100%"
            }, "slow");
        });
        $(".segundo").click(function () {
            $(".primero").animate({
                "height": "0%",
                "min-height": "0px"
            }, "slow");
            $(".tercero").animate({
                "height": "0%",
                "min-height": "0px"
            }, "slow");
            $(".mundo").hide("slow");
            $(".cuadro").hide("slow");
            $(this).animate({
                "height": "100%"
            }, "slow");
        });
        $(".tercero").click(function () {
            $(".primero").animate({
                "height": "0%",
                "min-height": "0px"
            }, "slow");
            $(".segundo").animate({
                "height": "0%",
                "min-height": "0px"
            }, "slow");
            $(".mundo").hide("slow");
            $(".logo").hide("slow");
            $(this).animate({
                "height": "100%"
            }, "slow");
        });
        $(".menu").click(function () {
            $(".primero").animate({
                "height": "33%",
                "min-height": "400px"
            }, "slow", function () {
                $(this).removeAttr("style");
            });
            $(".segundo").animate({
                "height": "33%",
                "min-height": "400px"
            }, "slow", function () {
                $(this).removeAttr("style");
            });
            $(".tercero").animate({
                "height": "33%",
                "min-height": "400px"
            }, "slow", function () {
                $(this).removeAttr("style");
            });
            $(".logo").show("slow");
            $(".cuadro").show("slow");
            $(".mundo").show("slow");
        });
        console.log("menor a 800");
    } else {
        $(".primero").click(function () {
            $(".segundo").animate({
                "width": "0%"
            }, "slow");
            $(".tercero").animate({
                "width": "0%"
            }, "slow");
            $(".logo").hide("slow");
            $(".cuadro").hide("slow");
            $(this).animate({
                "width": "100%"
            }, "slow");
        });
        $(".segundo").click(function () {
            $(".primero").animate({
                "width": "0%"
            }, "slow");
            $(".tercero").animate({
                "width": "0%"
            }, "slow");
            $(this).animate({
                "width": "100%"
            }, "slow");
            $(".mundo").hide("slow");
            $(".cuadro").hide("slow");
        });
        $(".tercero").click(function () {
            $(".primero").animate({
                "width": "0%"
            }, "slow");
            $(".segundo").animate({
                "width": "0%"
            }, "slow");
            $(this).animate({
                "width": "100%"
            }, "slow");
            $(".mundo").hide("slow");
            $(".logo").hide("slow");
        });
        $(".menu").click(function () {
            $(".primero").animate({
                "width": "33%",
            }, "slow", function () {
                $(this).removeAttr("style");
            });
            $(".segundo").animate({
                "width": "33%",
            }, "slow", function () {
                $(this).removeAttr("style");
            });
            $(".tercero").animate({
                "width": "33%",
            }, "slow", function () {
                $(this).removeAttr("style");
            });
            $(".logo").show("slow");
            $(".cuadro").show("slow");
            $(".mundo").show("slow");
        });
        console.log("mayor a 800");
    }
}

function valorDefecto() {
    if (redimension.matches) {
        $(".primero").removeAttr("style");
        $(".segundo").removeAttr("style");
        $(".tercero").removeAttr("style");
    } else {
        $(".primero").removeAttr("style");
        $(".segundo").removeAttr("style");
        $(".tercero").removeAttr("style");
    }
    $(".logo").show("slow");
    $(".cuadro").show("slow");
    $(".mundo").show("slow");
    console.log("borrado de estilo");
}

consulta.addListener(mediaQuery);
redimension.addListener(valorDefecto);
valorDefecto();
mediaQuery();
