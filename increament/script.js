squares1=document.getElementById('square1')
squares2=document.getElementById('square2')
squares3=document.getElementById('square3')
const squares=document.querySelectorAll('.sq')

const textvalue = {'blue':0,'rose':0,'violet':0}
squares.forEach(increase => {
    increase.onclick=()=>{
        textvalue[increase.value]++
        increase.innerHTML=`<h1>${textvalue[increase.value]}</h1>`
    }
});
const Clear = document.getElementById('clear')
clearvalue = () => {
textvalue.blue=0
textvalue.rose=0
textvalue.violet=0
squares.forEach(increase => increase.innerHTML = ' ')}
Clear.onclick=()=>clearvalue()