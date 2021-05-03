var x = document.getElementById('display');
function getnum(num){
    x.value += num
}

function calculatornum(){
    var y = x.value
    x.value = eval(y)
}


function clearnum(){
   x.value = ''
}