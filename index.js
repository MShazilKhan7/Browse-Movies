const slides  = document.querySelectorAll('.slide')
let counter = 0;
console.log(slides);
slides.forEach((sl,index)=>{
    sl.style.left = `${index*100}%`
})

const goPrev = ()=>{
    if(counter==0){
        counter=4;
    }
    counter--;
    shiftSlide();
}
const goNext = ()=>{
    counter++;
    if(counter==4){
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