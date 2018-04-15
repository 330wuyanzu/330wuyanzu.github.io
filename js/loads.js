/* jshint esversion:6 */
function loadJS(file) {
    let script = document.createElement('script');
    script.setAttribute('src', file);
    document.getElementsByTagName('html')[0].appendChild(script);
}

loadJS('./js/dark.js');
loadJS('./js/vintage.js');
loadJS('./data/A320FM.js');
loadJS('./data/A330.js');
loadJS('./js/render.js');