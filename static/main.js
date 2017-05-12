ready(function () {
    document.getElementById('btn-start').addEventListener('click', function () {
        document.getElementById('masker').className = 'fade';
        requestFullscreen(document.documentElement);
        startEditor();
    });
    function requestFullscreen(elem) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.webkitRequestFullScreen) {
            // 对 Chrome 特殊处理，
            // 参数 Element.ALLOW_KEYBOARD_INPUT 使全屏状态中可以键盘输入。
            if (window.navigator.userAgent.toUpperCase().indexOf('CHROME') >= 0) {
                elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
            // Safari 浏览器中，如果方法内有参数，则 Fullscreen 功能不可用。
            else {
                elem.webkitRequestFullScreen();
            }
        }
        else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        }
    }
    function startEditor() {
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
        document.getElementsByClassName('small')[0].addEventListener('dblclick', switchView)
    }
    function switchView() {
        var large = document.getElementsByClassName('large')[0];
        var small = document.getElementsByClassName('small')[0];
        small.className = 'large';
        large.className = 'small';
    }
});
function ready(fn) {
    document.addEventListener('DOMContentLoaded', fn, false);
}