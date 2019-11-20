document.getElementById('addNews').onclick = function () {
    let title = document.getElementById('titleBody');
    let text = document.getElementById('textBody');

    title.style.border = '1px solid black';
    text.style.border = '1px solid black';

    if (title.value === '' && text.value === '') {
        title.style.border = '2px solid red';
        text.style.border = '2px solid red';
        alert('Напишіть заголовок та текст до новини!');
        return false;
    } else if (title.value === '' && text.value !== '') {
        title.style.border = '2px solid red';
        text.style.border = '1px solid green';
        alert('Напишіть заголовок до новини!');
        return false;
    } else if (title.value !== '' && text.value === '') {
        title.style.border = '1px solid green';
        text.style.border = '2px solid red';
        alert('Напишіть текст до новини!');
        return false;
    } else {
        title.style.border = '1px solid green';
        text.style.border = '1px solid green';
        alert('Новина успішно додана!')
    }
};
