// assign elements to variables
var currentTimeEL = $('#currentDay');


var plnr = $('.planner')
var rowCreate = $('<div>').addClass('row')
var timeText = $('<p>').addClass('col-1')
var textBox = $('<textarea>').addClass('col-2')
var saveDiv = $('<div>').addClass('col-3')
var saveButton = $('<button>').html("Save")

// Get current time and format it
var currentTime = moment().format('MMMM Do YYYY, h:mm a');

//Assing current time to current time element
currentTimeEL.text(currentTime)


//dynamically add event planner rows
function createPlannerRows(){
    var hours = ['9 am', '10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm']
    for(var i = 0; i < hours.length; i++){

        //Create row div
        $rowCreate = $('<div>').addClass('row time-block');

        //Create column div that contains hour
        $timeText = $('<h4>').text(hours[i]);
        $timeDiv = $('<div>').addClass('col-1 hour').append($timeText);


        // assign local storage value to textbox
        $textBox = $('<textarea>').addClass('col-10 description').text(localStorage.getItem(hours[i]));

        //creates button
        $saveDiv = $('<button>').addClass('col-1 saveBtn').html("Save");

        //appends time, text, and button to row div
        $rowCreate.append($timeDiv, $textBox, $saveDiv);
        

        //check if current time is before, after or during the row time
        if(hours[i]<moment().format('h a')) {
            $rowCreate.addClass('past')
            
        }
        else if(hours[i]>moment().format('h a')) {
            $rowCreate.addClass('future')
        }

        else {
            $rowCreate.addClass('present')
        }

        $('.container').append($rowCreate);
        console.log(hours[i])
    
        
    }


}


// Call funtion that creates the event planner format
createPlannerRows()


var textInput
//Add event listener for button. Saves the text area text to local storage
  $( 'button' ).click(function(event) {
    textInput = (event.target.previousSibling.value);
    timeRow = (event.target.previousSibling.previousSibling.firstChild.innerHTML)
    console.log(textInput);
    console.log(timeRow);
    localStorage.setItem(timeRow, textInput);
    console.log(localStorage.getItem(timeRow))
  });