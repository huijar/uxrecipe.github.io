//add remove rows
var default_duration = 0;
var default_hour_price = 89;

var overrides = {
    'Expert': {
        duration: 14,
        price: 60
    },
    'Storyboards': {
        duration: 4
    }
};

var templates = {
    mini: [
        'Expert',
        'Storyboards',
        'Client'
    ]
}

$('#project-template').change(function() {
    var value = $(this).val();

    if (value == "none") {
        uncheckem();
    }

    if (templates[value]) {
        templates[value].forEach(function(val) {
            $("input[value='"+val+"']").click();
        });
    }
});

$('#getstarted input[type="checkbox"]').each(function(index) {
    index = index + 1;
    var value = $(this).val();

    $('input[value="'+value+'"]').change(function () {
        var description = $(this).siblings('label').first().find('.labelautyLabel').first().html().trim();

        if ($(this).prop('checked')) {
            var p = (overrides[value] && overrides[value].duration) ? overrides[value].duration : default_duration;
            var d = (overrides[value] && overrides[value].price) ? overrides[value].price : default_hour_price;
            $("#summary-table").append('<tr id="result'+index+'" class="result"> <td class="col-md-4"> <h6>'+description+'</h6> </td> <td> <input id="p'+index+'" name="p'+index+'" type="number"  value="'+p+'" class="p col-md-2 form-control"> </td> <td> <input  id="d'+index+'" name="d'+index+'" type="number"  value="'+d+'" class="d col-md-2 form-control"> </td> <td> <input  id="c'+index+'" name="c'+index+'" type="number" disabled value="'+p*d+'" class="c col-md-4 form-control"> </td> </tr>');
            //START ONBLUR
            $('input').blur(function(){
            $('input[name=c'+index+']').val( +($('input[name=p'+index+']').val()) *(+ $('input[name=d'+index+']').val()) );
            });
            //END ONBLUR
        } else {
            $('#result'+index).remove();
        }

    });
});

// Reset/Uncheck the options

 function uncheckem()
{
    $('input:checkbox').removeAttr('checked');
    $('tr.result').remove();
    $('#conclusion').hide();
}
