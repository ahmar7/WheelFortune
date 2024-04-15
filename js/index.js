var winwidth = jQuery(window).width();
var fontsize = 28;
if (winwidth < 480) {
    fontsize = 20;
}
var theWheel = new Winwheel({
    'canvasId': 'spinwheel',
    'numSegments': 8,     // Specify number of segments.
    'outerRadius': 230,   // Set outer radius so wheel fits inside the background.
    'innerRadius': 0,
    'textFontSize': fontsize,
    'lineWidth': 0,
    // 'fillStyle': '#fff',
    // 'textAlignment': 'outer',
    'segments':        // Define segments including colour and text.
        [
            { 'strokeStyle': '#4189C5', 'fillStyle': '#4189C5', 'text': '    FREE SPINS', 'textFontSize': 17, 'textFillStyle': '#ffffff' },
            { 'strokeStyle': '#8A203E', 'fillStyle': '#8A203E', 'text': '    1500 CREDITS', 'textFontSize': 17, 'textFillStyle': '#ffffff' },
            { 'strokeStyle': '#E0536D', 'fillStyle': '#E0536D', 'text': '    X5 DEPOSIT', 'textFontSize': 17, 'textFillStyle': '#ffffff' },
            { 'strokeStyle': '#272E3F', 'fillStyle': '#272E3F', 'text': '    15 EUR', 'textFontSize': 17, 'textFillStyle': '#ffffff' },
            { 'strokeStyle': '#57AE8F', 'fillStyle': '#57AE8F', 'text': '    RESPIN', 'textFontSize': 17, 'textFillStyle': '#ffffff' },
            { 'strokeStyle': '#FBAF01', 'fillStyle': '#FBAF01', 'text': '    3 SPINS', 'textFontSize': 17, 'textFillStyle': '#ffffff' },
            { 'strokeStyle': '#E0536D', 'fillStyle': '#E0536D', 'text': '    1500 CREDITS', 'textFontSize': 17, 'textFillStyle': '#ffffff' },
            { 'strokeStyle': '#32479E', 'fillStyle': '#32479E', 'text': '    X2 DEPOSIT', 'textFontSize': 17, 'textFillStyle': '#ffffff' },
        ],
    'animation':           // Specify the animation to use.
    {
        'type': 'spinToStop',
        'duration': 3,     // Duration in seconds.
        'spins': 4,     // Number of complete spins.
    }
});
var wheelPower = 2;
var wheelSpinning = false;

function startSpin() {
    // Ensure that spinning can't be clicked again while already running.
    if (wheelSpinning == false) {
        theWheel.animation.spins = 5;
        theWheel.animation.stopAngle = -80;
        // Begin the spin animation by calling startAnimation on the wheel object.
        theWheel.startAnimation();
        // Set to true so that power can't be changed and spin button re-enabled during
        // the current animation. The user will have to reset before spinning again.
        wheelSpinning = true;
    }
}

function claim() {
    var errorMessage = null;
    var regularExpr = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var emailVal = jQuery('#email').val();
    var errorHolder = jQuery('.error')[0];


    if (emailVal === '') {
        errorMessage = 'This field is required';
        errorHolder.innerHTML = errorMessage;
        jQuery('.error').fadeIn();
        return;
    }


    if (!regularExpr.test(emailVal)) {
        errorMessage = 'This is not a valid email';
        errorHolder.innerHTML = errorMessage;
        jQuery('.error').fadeIn();
        return;
    }

    jQuery('.error').fadeOut();
}

jQuery('#spin').on('click', function () {
    startSpin();
});