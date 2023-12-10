const slides  = document.querySelectorAll('.slide')
let counter = 0;
console.log(slides);
slides.forEach((sl,index)=>{
    sl.style.left = `${index*100}%`
})

const goPrev = ()=>{
    if(counter==0){
        counter=6;
    }
    counter--;
    shiftSlide();
}
const goNext = ()=>{
    counter++;
    if(counter==6){
        counter=0;
    }
    shiftSlide();
}


const shiftSlide = ()=>{
    const slides  = document.querySelectorAll('.slide')
    console.log("in a function : ", slides)
    slides.forEach((sl,index)=>{
        sl.style.transform = `translateX(-${counter*100}%)`
    })
    
     
}

// hamburg menu
let clicked = true
const hamburg = document.querySelector('.hamburg')
hamburg.addEventListener('click',()=>{
    console.log("yes hambur");
    const items  = document.querySelector('.navbar .navbar-items')

    if(clicked)
    {items.style.height = "100vh";  
    clicked=false
    }else{
        items.style.height = "0"
        clicked=true;
    }   

})