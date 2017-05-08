ready(function () {
    var editor = document.getElementById('editor');
    var previewer = document.getElementById('previewer');
    editor.focus();
    editor.addEventListener('blur', function () {
        editor.focus();
    }, false);
    var lastRender = 0;
    editor.addEventListener('input', function () {
        var now = Date.now();
        console.log(now - lastRender)
        if ((now - lastRender) > 100) {
            lastRender = now;
            previewer.innerHTML = markdown.toHTML(editor.value);
        }
    }, false);
});
function ready(fn) {
    document.addEventListener('DOMContentLoaded', fn, false);
}