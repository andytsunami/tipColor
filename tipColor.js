(function($) {	
	$.fn.tipColor = function(color, target){
        $(this).click(function(){
           var idElement = $(this).attr('id');
            console.log(idElement);
            var settings = $.extend({
                colors : color.length > 0 ? color : ['#FFFFFF', '#FF744F', '#FFA334', '#FFDC39', '#BAC7CB', '#41C2FC', '#19E9BA', '#9ADA5D'],
            });
            
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
                $(target).css('background-color', $(this).css('background-color'));
                idAlvo = '#'+$(this).attr('data-balao');
                console.log('Removendo ' + idAlvo);
                $('#'+ idAlvo.split('-')[1]).removeClass('populado');
                $(idAlvo).remove();
            });
        });
    };
    
	
})(jQuery);

/*

$('<div/>', {
    'id':'myDiv',
    'class':'myClass',
    'style':'cursor:pointer;font-weight:bold;',
    'html':'<span>For HTML</span>',
    'click':function(){ alert(this.id) },
    'mouseenter':function(){ $(this).css('color', 'red'); },
    'mouseleave':function(){ $(this).css('color', 'black'); }
}).appendTo('body');

['#ffffff', '#000000', '#eeece1', '#1f497d', '#4f81bd', '#c0504d', '#9bbb59', '#8064a2', '#4bacc6', '#f79646', '#ffff00',
		'#f2f2f2', '#7f7f7f', '#ddd9c3', '#c6d9f0', '#dbe5f1', '#f2dcdb', '#ebf1dd', '#e5e0ec', '#dbeef3', '#fdeada', '#fff2ca',
		'#d8d8d8', '#595959', '#c4bd97', '#8db3e2', '#b8cce4', '#e5b9b7', '#d7e3bc', '#ccc1d9', '#b7dde8', '#fbd5b5', '#ffe694',
		'#bfbfbf', '#3f3f3f', '#938953', '#548dd4', '#95b3d7', '#d99694', '#c3d69b', '#b2a2c7', '#a5d0e0', '#fac08f', '#f2c314',
		'#a5a5a5', '#262626', '#494429', '#17365d', '#366092', '#953734', '#76923c', '#5f497a', '#92cddc', '#e36c09', '#c09100',
		'#7f7f7f', '#0c0c0c', '#1d1b10', '#0f243e', '#244061', '#632423', '#4f6128', '#3f3151', '#31859b', '#974806',]

*/