window.onload = function() {
    console.log('start');

    var btn = document.getElementById('btn');
    var btnSvg = document.getElementById('btnSvg');
    var left = document.getElementById('left');
    var right = document.getElementById('right');
    var txt = document.getElementById('txt');

    btn.addEventListener('click', function() {
        left.classList.toggle('left-after');
        right.classList.toggle('right-after');
        console.log('click');
        btnSvg.classList.toggle('btnSvg-after');
        txt.classList.toggle('txt-after');
    
    })

    var link = document.getElementById('link');
    console.log(link.offsetTop);
    var linkTop = link.offsetTop + 'vh';
    btnSvg.style.top = linkTop;
    console.log(btnSvg.style.top);
}
