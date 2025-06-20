document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('clickMe');
    const countP = document.getElementById('clickCount');
    let count = 0;

    button.addEventListener('click', () => {
        count++;
        countP.textContent = `Button clicked ${count} time${count === 1 ? '' : 's'}.`; 
    });
});
