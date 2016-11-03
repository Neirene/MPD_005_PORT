(function () {

    console.log("NOT DONE YET....");

    //verify viewport status

    var mediaQuery = window.matchMedia("(min-width:64em)");
    //possible perfomance bottleneck .....
    $(window).resize(function () {

        if (mediaQuery.matches) {
            $(".mobile-nav").removeClass("open-drawer");
             $(".settings-menu-sesion").removeClass("disable-events");
        } else {
             $(".settings-menu-sesion").addClass("disable-events");
        }

    });


    if (mediaQuery.matches) {
       $(".settings-menu-sesion").removeClass("disable-events");
    } else {
       $(".settings-menu-sesion").addClass("disable-events");
    }
    $(document).on("click", ".mobile-nav-icon", function () {

        if ($(".mobile-nav").hasClass("open-drawer")) {
            $(".mobile-nav").removeClass("open-drawer");
            $(".settings-menu-sesion").addClass("disable-events")
        } else {
            $(".mobile-nav").addClass("open-drawer");
            $(".settings-menu-sesion").removeClass("disable-events")
        }
    
    });


    $(document).on("click", "#showNews", function (e) {

        $(this).closest(".extended-info").toggle("open-drawer");


    });

    //debug menu stuff
    //make sure to remove this whole chunk of code before attempting to go into Production Mode!
    var buttonCount = 0;
    var debugMenuContents = '<div class="debug-menu"><h5>HERMES DEV MENU</h5><ul><li><a href="accesibilidad.html">accesibilidad.html</a></li><li><a href="aviso-legal.html">aviso-legal.html</a></li><li><a href="comunicados.html">comunicados.html</a></li><li><a href="password.html">password.html</a></li><li><a href="login.html">login.html</a></li><li><a href="escrutinio.html">escrutinio.html</a></li><li><a href="resultados.html">resultados.html</a></li><li><a href="index.html">index.html</a></li></ul></div>';
    var mouseX;
    var mouseY;

    //oh dear...
    window.onmousemove = function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }
    window.oncontextmenu = function () {
        if (buttonCount == 5) {
            console.log("Development Menu ENABLED");
            $("body").append(debugMenuContents);
            $(".debug-menu").css({ 'top': mouseY, 'left': mouseX });
        } else if (buttonCount == 10) {
            $(".debug-menu").remove();
            console.log("Development Menu DISABLED");
            buttonCount = 0;
        }
        buttonCount++;
    }
})();
