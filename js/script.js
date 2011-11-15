// disable scrolling
$('body').bind('mousewheel touchmove', lockScroll);

// enable scrolling
$('body').unbind('mousewheel touchmove', lockScroll);


// lock window scrolling
function lockScroll(e) {
    e.preventDefault();
}