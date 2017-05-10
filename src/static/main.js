ready(function () {
    var editor = document.getElementById('editor');
    editor.value = localStorage.getItem('data');
    var previewer = document.getElementById('previewer');
    previewer.innerHTML = markdown.toHTML(editor.value);
    editor.focus();
    editor.addEventListener('blur', function () {
        editor.focus();
    }, false);
    var lastRender = 0;
    editor.addEventListener('input', function () {
        var now = Date.now();
        if ((now - lastRender) > 100) {
            lastRender = now;
            localStorage.setItem('data', editor.value);
            previewer.innerHTML = markdown.toHTML(editor.value);
        }
    }, false);
});
function switchView() {
    console.log('switch');
    var large = document.getElementsByClassName('large')[0];
    var small = document.getElementsByClassName('small')[0];
    small.className = 'large';
    large.className = 'small';
}
function ready(fn) {
    document.addEventListener('DOMContentLoaded', fn, false);
}