let btn=document.getElementById('btn');

window.onscroll = function(){
    if( scrollY > 20 ){
        btn.style.display='block'; 
    }
    else{
        btn.style.display='none';
    }
}

btn.onclick =function(){
    window.scrollTo(0,document.body.scrollHeight);
}
