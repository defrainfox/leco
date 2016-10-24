(function( $ ) {
	$(document).ready(function(){

        //FIX GRID
        function fix_content(){
            var c_width = $('#content').width();
            console.log(c_width);
            if(c_width<708){
                $('.grid').css('width','100%');
                $('.supercenter').css('width','80%');
            }
            else if(c_width>=708 && c_width<1219){
                $('.grid').css('width','50%');
                $('.supercenter').css('width','780px');
            }
            else if(c_width>=1219){
                $('.grid').css('width','33.3%');
                $('.supercenter').css('width','1160px');
            }
        }

        function init_content(){
            var c_width = $(window).width();
            if(c_width<767)
                $('.grid').width('100%');
            else if(c_width>=768 && c_width<1280)
                $('.grid').width('50%');
            else if(c_width>=1280)
                $('.grid').width('33.3%');
        }

        //MORE ITEMS
        $('#moreitems').on('click',function(){
            $('.showmore').fadeOut(0);
            $('.moreitems').fadeIn(0);
        })

        //PAGO
        $('.almost.click').on('click',function(){
            $('.almost.click').removeClass('active');
            $(this).addClass('active');
        })

        /* FILTROS */
        $('.filtro').on('click',function(){
            if( $(this).hasClass('down') ){
                $('.filtro').removeClass('up').addClass('down');
                $(this).removeClass('down').addClass('up');
                var tag = $(this).attr('tag');
                $('#subfiltros').fadeIn(0);
                $('.subfiltro').fadeOut(0);
                $('#'+tag).fadeIn();
            }
            else{
                $(this).removeClass('up').addClass('down');
                $('#subfiltros').fadeOut(0);
            }

        })

        //BUTTON FILTRO
        $('.button_filtro').on('click',function(){
            if( $(this).hasClass('active') ){
                $(this).removeClass('active');
                $('.producto2').fadeIn(0);
            }
            else{
                $(this).addClass('active');
                $('.producto2').fadeOut(0);
            }

        })

        //SEARCH
        $('#search').on('click',function(){
            if( $(this).hasClass('open') ){
                $('#filtros').fadeOut(0);
                $('#subfiltros').fadeOut(0);
                $('.filtro').removeClass('up').addClass('down');
                $(this).animate({'width':'100%'}).removeClass('open');
                $('#search input').val('').fadeIn().focus();
            }else{
                $(this).animate({'width':'70px'}).addClass('open');
                $('#filtros').fadeIn(0);
            }

        })


        //FIX ASESOR HEIGHT
        var w_height = $('#content').height();
        $('#asesor').height( w_height );


        //ASESOR ANIMATION
        $('#asesor .sidebar').on('click',function(){
            var action = $(this).attr('action');
            if(action=='open'){
                $('.sidebar .icon').removeClass('open').addClass('close');
                $('#asesor .sidebar').attr('action','close');
                $('#asesor').animate({width : 580},function(){
                    fix_content();
                })
                $('#asesor .content').fadeIn();
                /*
                $('#asesor .content').animate({width : 520},200,function(){
                    fix_content();
                })
                */
            }
            else{
                $('.sidebar .icon').removeClass('close').addClass('open');
                $('#asesor .sidebar').attr('action','open');
                $('#asesor').animate({width : 60},function(){
                    fix_content();
                })
                $('#asesor .content').fadeOut(200);
                /*
                $('#asesor .content').animate({width : 0},100,function(){
                    init_content();
                })
                */
            }  
        })

        //AGENDA
        $('.date').on('click',function(){
            $('.date').removeClass('active');
            $(this).addClass('active');
        })

        $('.time').on('click',function(){
            $('.time').removeClass('active');
            $(this).addClass('active');
        })

        //CHECK LENTES CONTACTO
        $('.checkright').on('click',function(){
            $('.checkright').removeClass('check');
            $(this).addClass('check');
        })

        $('.checkleft').on('click',function(){
            $('.checkleft').removeClass('check');
            $(this).addClass('check');
        })

        //PAGAR
        $('#pagar').on('click',function(){
            $('#alerta').fadeIn().height(w_height);
            $("html, body").animate({ scrollTop: "0px" },0);
        })

        //BRIGADA
        $('#buttonbrigada').on('click',function(){
            $('#alerta').fadeIn().height(w_height);
            $("html, body").animate({ scrollTop: "0px" },0);
        })

        //LOGIN
        $('.triggerlogin').on('click',function(){
            $('#alerta').fadeIn().height(w_height);
            $("html, body").animate({ scrollTop: "0px" },0);
        })

        //CHECK LOGIN
        $('#checks .check .icon').on('click',function(){
            if( $(this).hasClass('active') ){
                $(this).removeClass('active');
            }else
                $(this).addClass('active');
        })

        //TABS
        $('.tab').on('click',function(){
            var tag = $(this).attr('tag');
            $('.tab').removeClass('active');
            $(this).addClass('active');
            $('.tabcontent').removeClass('active');
            $('#'+tag).addClass('active')
        })

        //MENU ANIMATION
        var waypoints = $('.blur').waypoint({
            handler: function(direction) {
                if(direction=='down'){
                    $('.hide').fadeOut(0);
                    $('#prices').fadeIn(0);
                }
                else{
                    console.log('up');
                    $('.hide').fadeIn(0);
                    $('#prices').fadeOut(0);
                }
            }
        });


	})
})( jQuery );