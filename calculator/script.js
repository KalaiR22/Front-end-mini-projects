billInput = document.getElementById('billInputTotal')
tipInput = document.getElementById('TipInput')
Numberofpeople = document.getElementById('numberofpeople')
perpersontotal = document.getElementById('perperson')





const calculatebill = () => {
    
     totalrupess = Number(billInput.value)
     tipPer = Number(tipInput.value)/100
     tips = totalrupess*tipPer
     perPerson = (totalrupess+tips)/Number(Numberofpeople.value)
    perpersontotal.innerHTML=`<h1>$${perPerson}</h1>`
}