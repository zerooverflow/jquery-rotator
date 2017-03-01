if (window.jQuery) {

    (function ( $ ) {
        var elem;
        var interval;
        var loop;
        var frames;
        var framesLength;
        var activeFramePos = 0;
        var _rota = {};

        function hideFrame(pos){
            $(frames[pos]).css('opacity','0');
        }

        function startLoop(fn,intervalTime){
            if (loop) _rota.stop();
            loop = window.setInterval(fn,intervalTime);
        }

        function showFrame(pos){
            $(frames[pos]).css('opacity','1');
        }

        _rota.stop = function(){
            window.clearInterval(loop);
        };

        _rota.start = function(){
            startLoop(function(){
                hideFrame(activeFramePos++);
                if (activeFramePos == framesLength) activeFramePos = 0;
                showFrame(activeFramePos);
            }, interval);
        };

        _rota.setTransition = function(transition){
            $(frames).each(function(){
                $(this).css('transition',transition)
            })
        };

        _rota.setSize = function (width,height) {
            $(elem).css({'width': width, 'height': height,'overflow':'hidden'});

        };

        $.fn.rota = function(options) {
            elem = $( this );
            frames = elem.find('.frame');
            framesLength = frames.length;
            interval = options.interval || 2000;

            if (options.stopOnOver === true){
                $(elem).on('mouseover',_rota.stop);
                $(elem).on('mouseleave',_rota.start);
            }
            _rota.setTransition(options.transition);
            _rota.setSize(options.width+'px',options.height+'px');
            showFrame(0);
            _rota.start();

            return _rota;
        };

    }( jQuery ));
}
else{
    console.error('jQuery is not loaded');
}