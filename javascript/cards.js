document.addEventListener('DOMContentLoaded', function () {
    const ele = document.querySelector('.');
    ele.style.cursor = 'grab';

    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = function (e) {
        ele.style.cursor = 'grabbing';
        ele.style.userSelect = 'none';

        pos = {
            left: ele.scrollLeft,
            top: ele.scrollTop,
            // Get the current mouse position
            x: e.clientX,
            y: e.clientY,
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function (e) {
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;

        // Scroll the element
        ele.scrollTop = pos.top - dy;
        ele.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function () {
        ele.style.cursor = 'grab';
        ele.style.removeProperty('user-select');

        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };

    // Attach the handler
    ele.addEventListener('mousedown', mouseDownHandler);
});

const ilid = document.querySelector('.alternarlid')
const dlid = document.querySelector('.collectionlid')
ilid.addEventListener('click', () =>{
    dlid.classList.toggle('show');
});

const irel = document.querySelector('.alternarrel')
const drel = document.querySelector('.collectionrel')
irel.addEventListener('click', () =>{
    drel.classList.toggle('show');
});

const icie = document.querySelector('.alternarcie')
const dcie = document.querySelector('.collectioncie')
icie.addEventListener('click', () =>{
    dcie.classList.toggle('show');
});

const iart = document.querySelector('.alternarart')
const dart = document.querySelector('.collectionart')
iart.addEventListener('click', () =>{
    dart.classList.toggle('show');
});

const iinf = document.querySelector('.alternarinf')
const dinf = document.querySelector('.collectioninf')
iinf.addEventListener('click', () =>{
    dinf.classList.toggle('show');
});

const isup = document.querySelector('.alternarsup')
const dsup = document.querySelector('.collectionsup')
isup.addEventListener('click', () =>{
    dsup.classList.toggle('show');
});
