/**
 * Assign a click event handler to the add button with an id of addTask.
 *
 * When the add button is clicked:
 *  - If the textbox is empty, generate an alert with the text “Error: Please enter a task first”.
 *  - If the text box is not empty, generate an alert with the text containing the task name. For example, if the text in the input box is “Complete Assignment”, generate an alert with text “New Task: Complete Assignment”.
 *  - Clear the text inside the text box after the add button is clicked.
 */

$(document).ready(function () {
    // code goes here
    $('#addTask').on('click', function(event){
        const inputText = $('.textBox').val();
        if (inputText.length == 0){
            alert('Error: Please enter a task first');
            return;
        } else {
            alert(`New Task: ${inputText}`);
            $(`<li>${inputText}</li>`).appendTo('.notCompleted')
        }
    })
});