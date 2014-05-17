var appBase = (function(mod){

    /***********/
    /* PRIVATE */
    /***********/
    var socket = io.connect('http://dev.ynote.hk:3000'); // change your localhost url here

    function notifyServer(event)
    {
        data =
        {
            indexv : Reveal.getIndices().v,
            indexh : Reveal.getIndices().h,
            indexf : Reveal.getIndices().f || 0
        }
        socket.emit('slidechanged' , data);
    }

    function addListeners()
    {
        Reveal.addEventListener('slidechanged', notifyServer);
        Reveal.addEventListener('fragmentshown', notifyServer);
        Reveal.addEventListener('fragmenthidden', notifyServer);
        socket.on('slidechanged', function (data)
        {
            Reveal.slide(data.indexh, data.indexv, data.indexf);
        });
    }

    /**********/
    /* PUBLIC */
    /**********/
    mod.init = function()
    {
        Reveal.initialize({
            history: true
        });
        addListeners();
    }

    return mod;

}(appBase||{}));

appBase.init();
