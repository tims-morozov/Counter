const past = document.querySelector('.past'),
      curr = document.querySelector('.current'),
      rate = document.querySelector('.rate'),
      btn = document.getElementsByClassName('button'),
      res = document.getElementById('result');

function displayError(message){
    res.style.color = "red";
    res.value = "";
    res.innerHTML = `<b>Ошибка!</br>${message}</b>`;
}

function countRes() {
    const a = past.value,
          b = curr.value,
          c = rate.value;
          
        
    if (!a || !b || !c){
        displayError('Не все ячейки заполнены');
        return;
    }

    const c1 = c.match (/[0-9]*\,?[0-9]*/),
          c2 = a.match (/\d+/),
          c3 = b.match (/\d+/);

    if (c1 != c || c2 != a || c3 != b) { 
        displayError('Некорректные данные, в поля нельзя вводить + - .');
        return;
    } 

    if (Number(b) < Number(a)) {
        displayError('Текущее меньше чем предыдущее');
        return;
    }   
      
    expression(a, b, c);
};

function expression(a, b, c){
    res.style.color = "black";
    res.value = "";
    res.innerHTML = (b - a) * c;
};

document.addEventListener("keydown", function(event) {
    if (event.key === 'Enter'){
        countRes();
    }
});