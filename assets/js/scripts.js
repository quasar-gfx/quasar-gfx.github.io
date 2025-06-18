class BeforeAfter {
    constructor(enteryObject) {
        const beforeAfterContainer = document.querySelector(enteryObject.id);
        const before = beforeAfterContainer.querySelector('.bal-before');
        const beforeText = beforeAfterContainer.querySelector('.bal-beforePosition');
        const afterText = beforeAfterContainer.querySelector('.bal-afterPosition');
        const handle = beforeAfterContainer.querySelector('.bal-handle');

        beforeAfterContainer.querySelector('.bal-before-inset')
            .setAttribute("style", "width: " + beforeAfterContainer.offsetWidth + "px;");

        window.onresize = function () {
            beforeAfterContainer.querySelector('.bal-before-inset')
                .setAttribute("style", "width: " + beforeAfterContainer.offsetWidth + "px;");
        }

        before.setAttribute('style', "width: 50%;");
        handle.setAttribute('style', "left: 50%;");

        // Touch event
        beforeAfterContainer.addEventListener("touchstart", (e) => {
            beforeAfterContainer.addEventListener("touchmove", (e2) => {
                let containerWidth = beforeAfterContainer.offsetWidth;
                let currentPoint = e2.changedTouches[0].clientX;
                let startOfDiv = beforeAfterContainer.offsetLeft;
                let modifiedCurrentPoint = currentPoint - startOfDiv;

                if (modifiedCurrentPoint >= 0 && modifiedCurrentPoint <= containerWidth) {
                    let newWidth = modifiedCurrentPoint * 100 / containerWidth;
                    before.setAttribute('style', "width:" + newWidth + "%;");
                    afterText.setAttribute('style', "z-index: 1;");
                    handle.setAttribute('style', "left:" + newWidth + "%;");
                }
            });
        });

        // Mouse move
        beforeAfterContainer.addEventListener('mousemove', (e) => {
            let containerWidth = beforeAfterContainer.offsetWidth;
            let newWidth = e.offsetX * 100 / containerWidth;

            if (e.offsetX >= 0 && e.offsetX <= containerWidth) {
                before.setAttribute('style', "width:" + newWidth + "%;");
                afterText.setAttribute('style', "z-index: 1;");
                handle.setAttribute('style', "left:" + newWidth + "%;");
            }
        });
    }
}
