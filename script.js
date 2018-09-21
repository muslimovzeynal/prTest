(function(){
    var block = document.getElementsByClassName('main__block');
    for (i=0; i < block.length; i++){
        block[i].addEventListener('click', function(e) {
            if (!this.classList.contains('disabled'))
            this.classList.toggle('selected');
        })
    }
})()