function Vim(textarea) {
    textarea.focus();
    var currentMode = mode.insert;
    var mode = {
        normal: 0,
        insert: 1,
        modeInsert: function () {
            currentMode = mode.insert
        },
        modeNormal: function () {
            currentMode = mode.normal
        }
    }
    var cursorPosBase = {
        padding_left: 0
    }

    textarea.addEventListener('click', function (e) {
        var linesToCurrentPostion = textarea.value.substr(0, textarea.selectionStart).split("\n");
        var currentLineNumber = linesToCurrentPostion.length - 1;
        cursorPosBase.padding_left = linesToCurrentPostion[currentLineNumber].length;
    });
    textarea.addEventListener('keydown', emulate);
    var keyMappings = {
        0 : {
            h: moveLeft,
            j: moveDown,
            k: moveUp,
            l: moveRight,
            a: modeInsert,
            default: function (e) {
                e.preventDefault();
            }
        },
        1 : {
            Escape: modeNormal,
            default: function () {}
        }
    }
    function emulate(e) {
        var keyMapping = keyMappings[currentMode];
        var action = keyMapping[e.key]
        if (typeof(action) == 'function') {
            action();
            e.preventDefault();
        } else {
            keyMapping.default(e);
        }
    }

    function moveLeft() {
        cursorMove(-1)
    }
    function moveRight() {
        cursorMove(1);
    }
    function moveUp() {
        var linesToCurrentPostion = textarea.value.substr(0, textarea.selectionStart).split("\n");
        var currentLineNumber = linesToCurrentPostion.length - 1;
        if (currentLineNumber === 0) return;

        var currentPositionToLineBeginCount = linesToCurrentPostion[currentLineNumber].length;
        var moveCountToLastLineEnd = currentPositionToLineBeginCount + 1;
        var shouldMove = moveCountToLastLineEnd +
            Math.max(linesToCurrentPostion[currentLineNumber - 1].length - cursorPosBase.padding_left, 0);
        cursorMove(0 - shouldMove);
    }

    function moveDown() {
        var lines = textarea.value.split("\n");
        var linesToCurrentPostion = textarea.value.substr(0, textarea.selectionStart).split("\n");
        var currentLineNumber = linesToCurrentPostion.length - 1;
        if (currentLineNumber === lines.length) return;

        var currentPositionToLineEndCount = lines[currentLineNumber].length - linesToCurrentPostion[currentLineNumber].length;
        var shouldMove = currentPositionToLineEndCount + 1 +
            Math.min(lines[currentLineNumber + 1].length, cursorPosBase.padding_left);
        cursorMove(shouldMove);
    }

    function cursorMove(count) {
        var start = textarea.selectionStart + count;
        textarea.setSelectionRange(start, start);
    }
};