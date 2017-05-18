function Vim(textarea) {
    textarea.addEventListener('keydown', emulate);
    var keyMapping = {
        h: 'ArrowLeft',
        j: 'ArrowDown',
        k: 'ArrowUp',
        l: 'ArrowRight'
    }
    function emulate(e) {
        var action = keyMapping[e.key]
        //remove all action
        action = false;
        if (action) {
            if (typeof action == 'string') {
                keypress(key, 1, target);
            }
            return true
        }
        return false;
    }

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
};