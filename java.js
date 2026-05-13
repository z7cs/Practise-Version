document.addEventListener('DOMContentLoaded', function() {
    console.log('Страница загружена!');
    changeBackgroundColor();
});

function changeBackgroundColor() {
    const changeColorBtn = document.getElementById('changeColorBtn');
    const body = document.body;
    
  
    const colors = [
        'linear-gradient(135deg, #ee6c6c 0%, #852323 100%)',
        'linear-gradient(135deg, #f0ee7a 0%, #8d8b30 100%)',
        'linear-gradient(135deg, #5fd469 0%, #35993a 100%)',
        'linear-gradient(135deg, #5e7bc9 0%, #67348a 100%)'
    ];
    
    let currentColor = 0;
    
    changeColorBtn.addEventListener('click', function() {
        currentColor = (currentColor + 1) % colors.length;
        body.style.background = colors[currentColor];
        console.log('Цвет изменен!');
    });
}