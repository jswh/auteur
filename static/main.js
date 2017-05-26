ready(function () {
    document.getElementById('btn-start').addEventListener('click', function () {
        requestFullscreen(document.documentElement);
        start();
    });
    function requestFullscreen(elem) {
        return;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullScreen) {
            if (window.navigator.userAgent.toLowerCase().indexOf('chrome') >= 0) {
                elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
            else {
                elem.webkitRequestFullScreen();
            }
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        }
    }
    function start() {
        document.getElementById('masker').className = 'fade';

        var editor = document.getElementById('editor-area');
        var title = document.getElementById('title-area')
        var previewer = document.getElementById('previewer');

        initEditor(title, editor, previewer);

        previewer.innerHTML = markdown.toHTML(editor.value);
        document.getElementsByClassName('small')[0].addEventListener('dblclick', switchView)
    }
    function switchView() {
        var large = document.getElementsByClassName('large')[0];
        var small = document.getElementsByClassName('small')[0];
        small.className = 'large';
        large.className = 'small';
    }
    function initEditor(title, editor, previewer) {
        var storeKey = 'article';
        var article = JSON.parse(localStorage.getItem(storeKey));
        if (!article) {
            var article = {
                title: '',
                content: ''
            };
        }
        title.value = article.title;
        editor.value = article.content;
        window.vim = Vim(editor);

        var lastRender = 0;
        editor.addEventListener('input', saveAndRender, false);
        function saveAndRender(e) {
            article.title = title.value;
            article.content = editor.value;
            var now = Date.now();
            if ((now - lastRender) > 100) {
                lastRender = now;
                previewer.innerHTML = markdown.toHTML(article.content);
                localStorage.setItem(storeKey, JSON.stringify(article));
            }
        }
    }
});
function ready(fn) {
    document.addEventListener('DOMContentLoaded', fn, false);
}