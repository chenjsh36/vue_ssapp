import $ from 'jquery'

let addClass = function(elem, name) {
    $(elem).addClass(name)
}
let removeClass =  function(elem, name) {
    $(elem).removeClass(name)
}
export default {
    addClass: addClass,
    removeClass: removeClass
}