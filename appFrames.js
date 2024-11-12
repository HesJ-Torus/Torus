
$(document).ready(function() {


$('#specClick').click(function() {
    $('#specPage').css({
        'display': 'block',
    });
	$('#geoTable').css({
        'display': 'none',
    });
	$('#evolution').css({
        'display': 'none',
    });
});
$('#geoClick').click(function() {
    $('#specPage').css({
        'display': 'none',
    });
	$('#geoTable').css({
        'display': 'block',
    });
	$('#evolution').css({
        'display': 'none',
    });
});
$('#evoClick').click(function() {
    $('#specPage').css({
        'display': 'none',
    });
	$('#geoTable').css({
        'display': 'none',
    });
	$('#evolution').css({
        'display': 'block',
    });
});


$('#disciplineClick').click(function() {
    $("#framesDropMenu").toggle();
});




});

