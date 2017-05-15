ready(function () {
    document.getElementById('btn-start').addEventListener('click', function () {
        requestFullscreen(document.documentElement);
    });
    start();
    function requestFullscreen(elem) {
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
        initEditor(title, editor);
        var previewer = document.getElementById('previewer');
        previewer.innerHTML = markdown.toHTML(editor.value);
        editor.focus();
        editor.addEventListener('blur', function () {
            //editor.focus();
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
    function initEditor(title, editor) {
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
        editor.addEventListener('keydown', function (e) {
            return;
            if (!e.vimEmulate) {
                if (vimEmulate(e.key, e.target)) {
                    e.preventDefault();
                }
            }
        })
    }

    function vimEmulate(key, target) {
        var keyMapping = {
            h: 'ArrowLeft',
            j: 'ArrowDown',
            k: 'ArrowUp',
            l: 'ArrowRight'
        }
        var action = keyMapping[key]
        if (action) {
            if (typeof action == 'string') {
                keypress(key, 1, target);
            }
            return true
        }
        return false;

    }
});
function keypress(key, repeat, target) {
    console.log(this);
    var evt = document.createEvent("KeyboardEvent");
    var initFunc = evt.initKeyEvent || evt.initKeyboardEvent
    initFunc(
        "keypress", // event type : keydown, keyup, keypress
        true, // bubbles
        true, // cancelable
        target, // viewArg: should be window
        false, // ctrlKeyArg
        false, // altKeyArg
        false, // shiftKeyArg
        false, // metaKeyArg
        40, // keyCodeArg : unsigned long the virtual key code, else 0
        0 // charCodeArgs : unsigned long the Unicode character associated with the depressed key, else 0
    )
    var canceled = !target.dispatchEvent(evt);
    if (canceled) {
        // A handler called preventDefault
        alert("canceled");
    } else {
        // None of the handlers called preventDefault
        alert("not canceled");
    }
}
function ready(fn) {
    document.addEventListener('DOMContentLoaded', fn, false);
}