(function(){
    
    changeState(document.getElementsByClassName('main__block'));
    
    var spanList = document.getElementsByClassName('main__p8__span1');
    for (i=0; i < spanList.length; i++){
        spanList[i].addEventListener('click', function(e) {
            if (!this.parentElement.parentElement.getElementsByClassName('main__block')[0].classList.contains('disabled')) { this.parentElement.parentElement.getElementsByClassName('main__block')[0].classList.toggle('selected');
            changeState((new Array(1)).fill(this.parentElement.parentElement.getElementsByClassName('main__block')[0]));
            }
        })
    };
    
    var blockList = document.getElementsByClassName('main__block');
    for (i=0; i < blockList.length; i++){
        blockList[i].addEventListener('click', function(e) {
            if (!this.classList.contains('disabled')) {
                this.classList.toggle('selected');
                changeState((new Array(1)).fill(this));
        }
    });
}
    
    
})()

function changeState(blockList) {
    
    for (i=0; i < blockList.length; i++){
        if (blockList[i].classList.contains('selected')) {
            blockList[i].parentElement.getElementsByClassName('main__p8_selected')[0].style.display = 'block';
            blockList[i].parentElement.getElementsByClassName('main__p8')[0].style.display = 'none';
            blockList[i].parentElement.getElementsByClassName('main__p8_disabled')[0].style.display = 'none';
        }
        else if (blockList[i].classList.contains('disabled')) {
            blockList[i].parentElement.getElementsByClassName('main__p8_disabled')[0].style.display = 'block';
            blockList[i].parentElement.getElementsByClassName('main__p8')[0].style.display = 'none';
            blockList[i].parentElement.getElementsByClassName('main__p8_selected')[0].style.display = 'none';
        }
        else {
            blockList[i].parentElement.getElementsByClassName('main__p8')[0].style.display = 'block';
            blockList[i].parentElement.getElementsByClassName('main__p8_selected')[0].style.display = 'none';
            blockList[i].parentElement.getElementsByClassName('main__p8_disabled')[0].style.display = 'none';
        }

    };

}