//add remove rows

$('#getstarted input[type="checkbox"]').each(function(index) {
    index = index + 1;
    var value = $(this).val();

    $('input[value="'+value+'"]').change(function () {
        var description = $(this).siblings('label').first().find('.labelautyLabel').first().html().trim();

        if ($(this).prop('checked')) {
            $("#summary-table").append('<tr id="result'+index+'" class="result"> <td class="col-md-4"> <h6>'+description+'</h6> </td> <td> <input id="p'+index+'" name="p'+index+'" type="number"  value="0" class="col-md-2 form-control"> </td> <td> <input  id="d'+index+'" name="d'+index+'" type="number"  value="0" class="col-md-2 form-control"> </td> <td> <input  id="c'+index+'" name="c'+index+'" type="number" disabled value="0" class="col-md-4 form-control"> </td> </tr>');
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
