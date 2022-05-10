//animation general



//hover
let btninverse = document.getElementsByClassName('btninverse');
console.log(btninverse);

for (let i = 0 ; i< btninverse.length ; i++){
    btninverse[i].addEventListener('mouseover',()=>{
        btninverse[i].style.backgroundColor='#b11313';
        btninverse[i].style.color='white';
        btninverse[i].style.fontWeight='bold';
        btninverse[i].style.boxShadow='5px 5px 30px white';
    })

    btninverse[i].addEventListener('mouseout',()=>{
        btninverse[i].style.backgroundColor='white';
        btninverse[i].style.color='#b11313';
        btninverse[i].style.boxShadow='none';
    })
}