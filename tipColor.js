(function($) {	
	$.fn.tipColor = function(color, target, options){
        $(this).click(function(){
           var idElement = $(this).attr('id');
            var settings = $.extend({
                colors : color.length > 0 ? color : ['#FFFFFF', '#FF744F', '#FFA334', '#FFDC39', '#BAC7CB', '#41C2FC', '#19E9BA', '#9ADA5D'],
            });
            
            if($(this).css('display') === 'inline'){
                $('.tipColor').removeClass('populado');
                $('.balao').remove();   
            }
            
            if(!$(this).hasClass('populado')){
                
             $('<div/>', {
                'id' : 'balao-' + idElement,
                'class' : 'balao',
            }).insertAfter(this);
            
            $.each(settings.colors,function(index,element){
                $('<div/>', {
                    'id':idElement + '-' +element,
                    'class':'cor',
                    'style': 'background-color:' + element,
                    'data-balao' : 'balao-' + idElement,
                }).appendTo('#balao-' + idElement);

            });

            if(settings.colors.length < 9){
                   $('.balao').css('width','103px');   
            }
                
            $(this).addClass('populado');
                
            }
            
            $('.cor').click(function(){
                var cor = $(this).css('background-color');

                $(target).css('background-color', cor);
                idAlvo = '#'+$(this).attr('data-balao');
                $('#'+ idAlvo.split('-')[1]).removeClass('populado');
                $(idAlvo).remove();
                
                if($.isFunction(options.onSelect)){
                    
                corRetorno = '';
                    
                    if(options.rgb){
                        corRetorno = cor;
                    } else {
                        dec = cor.split('rgb(')[1].replace(')', '').split(',');
                        hex = '#'+Number(dec[0]).toString(16)+Number(dec[1]).
                        toString(16)+Number(dec[2]).toString(16);
                        corRetorno = hex.toUpperCase();
                    }            
                
                    options.onSelect(target,corRetorno);
                }
            });
        });
    };
})(jQuery);