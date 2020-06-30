let active = document.querySelector('.active');
let progress = document.querySelector('.progress');
let prevButton = document.querySelector('.prev');
let nextButton = document.querySelector('.next');

function isPrevious(){
    if(active.previousElementSibling){
        prevButton.style.display = 'inline-block';
    }else{
        prevButton.style.display = 'none';
    }
};

function isNext(){
    if(active.nextElementSibling){
        nextButton.style.display = 'inline-block';
    }else{
        nextButton.style.display = 'none';
    }
};

prevButton.addEventListener('click', function(){
    let prevElem = active.previousElementSibling;
    active.classList.remove('active');
    active = prevElem;
    active.classList.add('active');

    progress.style.width = active.attributes[1].value+'%';

    isPrevious();
    isNext();

});

nextButton.addEventListener('click', function(){
    let nextElem = active.nextElementSibling;
    active.classList.remove('active');
    active = nextElem;
    active.classList.add('active');

    progress.style.width = active.attributes[1].value+'%';

    isPrevious();
    isNext();

});

isPrevious();
isNext();