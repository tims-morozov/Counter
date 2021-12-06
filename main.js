let past = document.querySelector('.past'),
    curr = document.querySelector('.current'),
    rate = document.querySelector('.rate'),
    res = document.querySelector('.result'),
    btn = document.getElementsByClassName('button');

res.disabled = true;

btn[0].onclick = function countRes() {
    let a = past.value,
        b = curr.value,
        c = rate.value;
    
    if (b > a){
        res.value = (b-a)*c;
    } else {
        res.value = 'Ошибка';
    };
};

document.addEventListener("keydown", function(event) {
        let a = past.value,
            b = curr.value,
            c = rate.value;     

        if (event.key === 'Enter' && b > a){
            res.value = (b-a)*c;
        } else if (event.key === 'Enter' && b < a) {
            res.value = 'Ошибка';
        }; 

});
