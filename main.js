let stars1 =document.getElementById('stars');
let moon2 =document.getElementById('moon');
let mountains3 =document.getElementById('mountains1');
let mountains4 =document.getElementById('mountains2');
let river5 =document.getElementById('river');
let boat6 =document.getElementById('boat');
let nouvil =document.querySelector('.nouvill');
window.onscroll=function()
{
    let value = scrollY;
    stars.style.left = value + 'px' ;
    moon.style.top=value*4 + 'px' ;
    mountains1.style.top=value*2+ 'px' ;
    mountains2.style.top=value*1.5+ 'px' ;
    river.style.top=value + 'px';
    boat.style.top=value + 'px';
    boat.style.left=value + 'px';
    nouvill.style.fontSize=value+'px';
    if(scrollY>=67){
        nouvill.style.fontSize = 67 + 'px' ;
        nouvill.style.position='fixed';
        if(scrollY>=414){
            nouvill.style.display='none';
        }
        else{
            nouvill.style.display='block';
        }
        if(scrollY>=141){
            document.querySelector('.main').style.background='linear-gradient(#01ebff, #0a0120)'
        }
        else{
            document.querySelector('.main').style.background='linear-gradient(#31011e,#0a0120)'
        }
}
}
