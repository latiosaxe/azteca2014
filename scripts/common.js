var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

window.addEvent('domready', function() {

//    MOBILE
    $$("#side_mobile .content").setStyle('height', windowHeight);
    $("mobile_close").setStyle('height', windowHeight);

    var Elements = [];
    var mobile_elements = $$('.side_mobile .content p');
    mobile_elements.each(function(index, value){
        Elements.include(index);
    });
    mobile_elements.addEvent('click',function(e){
        e.preventDefault();
        var index = Elements.indexOf(this);

        if($$('.side_mobile .content p')[index].hasClass('active')){
            $$('.side_mobile .content p').removeClass('active');
            $$('.side_mobile .content ul').addClass('hidden');
        }else{
            $$('.side_mobile .content p').removeClass('active');
            $$('.side_mobile .content p')[index].addClass('active');
            $$('.side_mobile .content ul').addClass('hidden');
            $$('.side_mobile .content ul')[index].removeClass('hidden');
        }
    });

    $("header_mobile").addEvent('click',function(){
        $("side_mobile").addClass('active');
        $("site").addClass('blured');
    });
    $("mobile_close").addEvent('click',function(){
        $("side_mobile").removeClass('active');
        $("site").removeClass('blured');
    });

    if($("header_social_search")){
        var header_social_form = $$(".header_social form");
        $("header_social_search").addEvent('click', function(e){
            e.preventDefault();
            if(header_social_form.hasClass('hidden')){
                header_social_form.removeClass('hidden');
            }else{
                header_social_form.addClass('hidden');
            }
        });
    }

    $$('#fixTablet li').addEvent('click', function(e) {
//        $$('#fixTablet li a').preventDefault();
        $(this).fireEvent('mouseover');
    });

    var ElementsSec = [];
    var nav_sec_elements = $$(".sec_nav ul li");
    nav_sec_elements.each(function(index, value){
        ElementsSec.include(index);
    });
    nav_sec_elements.addEvent('click',function(e){
        e.preventDefault();
        var index = ElementsSec.indexOf(this);

        nav_sec_elements.removeClass('active');
        nav_sec_elements[index].addClass('active');

        var all = nav_sec_elements[index].get("data-sec");
        if(all == "all"){
            $$(".sec_show_element").removeClass('hidden');
        }else{
            $$(".sec_show_element").addClass('hidden');
            $$(".sec_show_element[data-sec='"+(index + 1)+"']").removeClass('hidden');
        }
    });

    var ElementsHeader = [];
    var header_elements = $$("#submenu_especial_1 ul li");
    header_elements.each(function(index, value){
        ElementsHeader.include(index);
    });

    header_elements.addEvent('mouseenter', function(value){
        var index = ElementsHeader.indexOf($(this));
        $$("#firstNav ul").addClass('hidden');
        $$("#firstNav ul")[index].removeClass('hidden');
    });
    header_elements.addEvent('click', function(value){
        var index = ElementsHeader.indexOf($(this));
        $$("#firstNav ul").addClass('hidden');
        $$("#firstNav ul")[index].removeClass('hidden');
    });

    var site = $("site");
    var footer = $("footer");

    if(footer){
        footer.setStyle('bottom', -(footer.clientHeight + 80));
        setTimeout(function(){
    //        Just to be sure
            footer.setStyle('bottom', -(footer.clientHeight + 80));
        },500);
    //    console.log(document.getElementById('footer').clientHeight);
        if(site.clientHeight >= windowHeight){
            footer.addClass('footerFixed');
            $$(".close_footer, .openFooter").removeClass('hidden');

        }else{
            footer.removeClass('footerFixed');
            $$(".close_footer, .openFooter").addClass('hidden');
        }

        if(footer.clientHeight >= windowHeight){
            footer.removeClass('footerFixed');
            $$(".close_footer, .openFooter").addClass('hidden');
        }
    }

    if($("openFooter")){
        $$("#openFooter, #close_footer").addEvent('click', function(e){
            e.preventDefault();
            if(footer.hasClass('show')){
                footer.removeClass('show');
                site.removeClass('blured');
                enable_scroll();
            }else{
                footer.addClass('show');
                site.addClass('blured');
                disable_scroll();
            }
        });
    }

//    wow();

});

function wow(){
    var randomEfect=0;
    var randomActive=0;

    var PopUp = Math.floor(Math.random() * 3) + 1;

    randomActive = (Math.floor(Math.random() * 10) + 5)*1000;
    setTimeout(function(){
        if(PopUp == 1){
            window1 = window.open('','name','height=255,width=250');
            window1.moveTo(50,50);
            setTimeout(function(){
                window2 = window.open('','name2','height=255,width=250');
                window2.moveTo(150,150);
            },100);
            setTimeout(function(){
                window3 = window.open('','name3','height=255,width=250');
                window3.moveTo(250,250);
            },200);
            setTimeout(function(){
                window4 = window.open('','name4','height=255,width=250');
                window4.moveTo(350,350);
            },300);
            setTimeout(function(){
                window5 = window.open('','name5','height=255,width=250');
                window5.moveTo(450,450);
            },400);
            setTimeout(function(){
                window1.close();
            },1000);
            setTimeout(function(){
                window2.close();
            },1100);
            setTimeout(function(){
                window3.close();
            },1200);
            setTimeout(function(){
                window4.close();
            },1300);
            setTimeout(function(){
                window5.close();

                wow();
            },1400);

        }else if(PopUp == 2){
            var menuScary = $$('.site header ul li .submenu');
            setTimeout(function(){
                menuScary.addClass('show');
            },150);
            setTimeout(function(){
                menuScary.removeClass('show');
            },250);
            setTimeout(function(){
                menuScary.addClass('show');
            },350);
            setTimeout(function(){
                menuScary.removeClass('show');
            },450);
            setTimeout(function(){
                menuScary.addClass('show');
            },550);
            setTimeout(function(){
                menuScary.removeClass('show');
            },650);
            setTimeout(function(){
                menuScary.addClass('show');
            },750);
            setTimeout(function(){
                menuScary.removeClass('show');
                wow();
            },850);

        }else{
            randomEfect = Math.floor(Math.random() * 5) + 1;
            $$(".test").addClass('active'+randomEfect);
            setTimeout(function(){
                $$(".test").removeClass('active'+randomEfect);
            },100);
            console.log('Corrio el efecto: '+ randomEfect+ ' En un tiempo de: ' + randomActive);
//        Se vuelve a generar
            randomActive = (Math.floor(Math.random() * 10) + 1)*1000;
            wow();
        }
    },randomActive);
}


window.addEvent('scroll',function(){
    if(window.getScroll().y > 50){
        $("header").addClass('active');
    }else{
        $("header").removeClass('active');
    }
});

var keys = [37, 38, 39, 40];

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}

function keydown(e) {
    for (var i = keys.length; i--;) {
        if (e.keyCode === keys[i]) {
            preventDefault(e);
            return;
        }
    }
}

function wheel(e) {
    preventDefault(e);
}

function disable_scroll() {
    if (window.addEventListener) {
        window.addEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = wheel;
    document.onkeydown = keydown;
}

function enable_scroll() {
    if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = document.onkeydown = null;
}