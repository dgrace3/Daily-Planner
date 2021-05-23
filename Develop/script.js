var currentTimeEL = $('#currentDay');

var plnr = $('.planner')
var rowCreate = $('<div>').addClass('row')
var timeText = $('<p>').addClass('col-1')
var textBox = $('<textarea>').addClass('col-2')
var saveDiv = $('<div>').addClass('col-3')
var saveButton = $('<button>').html("Save")

var currentTime = moment().format('MMMM Do YYYY, h:mm a');

currentTimeEL.text(currentTime)

plnr.css('border', 'rgb(122, 242, 242) 5px solid')

function createPlannerRows(){
    var hours = ['9 am', '10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm']
    for(var i = 0; i < hours.length; i++){
        $rowCreate = $('<div>').addClass('row time-block');

        $timeText = $('<h4>').text(hours[i]);
        $timeDiv = $('<div>').addClass('col-1 hour').append($timeText);

        $textBox = $('<textarea>').addClass('col-10 description').text('');

        // $saveButton = $('<button>').html("Save");
        $saveDiv = $('<button>').addClass('col-1 saveBtn').html("Save");

        $rowCreate.append($timeDiv, $textBox, $saveDiv);
        
        if(hours[i]<moment().format('h a')) {
            $rowCreate.addClass('past')
            $textBox.text("needs the past class")
        }
        else if(hours[i]>moment().format('h a')) {
            $rowCreate.addClass('future')
        }

        else {
            $rowCreate.addClass('present')
        }

        $('.container').append($rowCreate);
        console.log(hours[i])
        // if(hours[i]<moment().format('h a')) {
        //     $rowCreate.addClass('past')
        //     $textBox.text("needs the past class")
        // }
        // else(hours[i]>moment().format('h a')) {
        //     $rowCreate.addClass('future')
        // }
    }

    // $('.container').find('.row').each(function () {
    //     if($(this).find('h4').text() < moment().format('h a')) {
    //         console.log("needs the past class")
    //     }
    // //    console.log($(this).find('h4').text()); 
    // })

}
 
function clickSave() {
    $(this).closest('textarea').text("is this thing on");
}

$('.saveBtn').click(clickSave())


createPlannerRows()