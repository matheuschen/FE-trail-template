export default function AnnouncerBox(){
    const announcerBox = {
        DOMobject: document.querySelector('.announcer'),
        reset: () => {announcerBox.DOMobject.innerHTML = ''},
        announce: (string) => {announcerBox.DOMobject.innerHTML = string},
    };
    return announcerBox;
}                           