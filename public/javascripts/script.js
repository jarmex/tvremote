$(function(){

    $('#SendQuery').click((e)=>{
        let cmd = $('#tvCommand').val();
        if (cmd && cmd.length > 0) {
            sendcommand({ command: cmd });
        } else {
            alert('The query/command cannot be empty. Try agan....');
        }
        e.preventDefault(); 
    });

    $('.num, .home, .click').click(function(e){
        let kk = $(this).attr('id'); 
        sendcommand({ command : kk });
        e.preventDefault(); 
    });

    $('#leftbar li').on('click', function(){
        let id = this.id;
        $('#tvCommand').val(id);
    });

    $('#myclear').on('click', function(e){
        $('#tvCommand').val('');
        e.preventDefault();
    });

    /**
     * 
     * @param {object} para the command to send to TV
     */
    function sendcommand(para){
        $.ajax({
            url : '/sendquery',
            method : 'POST',
            data : para,
            success : function (data){
                console.log(data);
            },
            error : function (xhr, status, error){
                console.log(error);
            }
        });
    }

});