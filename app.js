function qrGenerator(){
    let text =document.getElementById('text').value;
    if(!text){
        swal({
            title: 'Error!',
            text: 'Please enter text or URL',
            icon: 'error',
        });
        return;
    }
    let qr = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" +encodeURIComponent(text);
    document.getElementById('qrBox').innerHTML='<img src="'+qr+'">';
}