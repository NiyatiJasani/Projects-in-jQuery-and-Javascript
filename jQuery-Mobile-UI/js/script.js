$(document).one('pageinit', function () {
    //Display Runs
    showRuns();

    //Add handler
    $('#submitAdd').on('tap', addRun);

    //Edit Handler
    $('#submitEdit').on('tap', deleteRun);

    //Delete Handler
    $('#stats').on('tap', '#deleteLink', deleteRun)

    //Set current Handler
    $('#stats').on('tap', '#editLink', setCurrent);

    //Clear Handler
    $('#clearRuns').on('tap', clearRuns);

    /*Show all runs in homepage*/
    function showRuns() {
        //Get runs object
        var runs = getRunsObject();

        //Check if empty
        if (runs != ' ' && runs != null) {
            for (var i = 0; i < runs.length; i++) {
                $('#stats').append('<li class="ui-body-inherit ui-li-static"><strong>Date:</strong>' + runs[i]["date"] + '<br><strong>Distance:</strong>' + runs[i]["miles"] + 'm<div class="controls">' + '<a href="#edit" id="editLink" data-miles="' + runs[i]["miles"] + '"data-date="' + runs[i]["date"] + '">Edit</a> | <a href="#" id="deleteLink"  data-miles="' + runs[i]["miles"] + '"data-date="' + runs[i]["date"] + '" onclick="return confirm(\'Are you sure?\')">Delete</a></li>');
            }
            //Bind page-init with the list view
            $('#home').bind('pageinit', function () {
                $('#stats').listview('refresh');
            });
        } else {
            $('#stats').html('<p>You have no logged Runs</p>');
        }
    }

    /** Add a run */
    function addRun() {
        //Get form values
        var miles = $('#addMiles').val();
        var date = $('#addDate').val();

        //Current Run
        var run = {
            date: date,
            miles: parseFloat(miles)
        };

        var runs = getRunsObject();
        //Add run to runs array
        runs.push(run);

        alert('Run added');

        //Set Stringified object to Local Storage
        localStorage.setItem('runs', JSON.stringify(runs)); //(key, value);

        //redirect
        window.location.href = "index.html";

        return false;
    }
    /** Edit run */
    function editRun() {
        //Get current data
        currentMiles = localStorage.getItem('currentMiles');
        currentDate = localStorage.getItem('currentDate');

        var runs = getRunsObject();

        //Loop through runs
        for (var i = 0; i < runs.length; i++) {
            if (runs[i].miles == currentMiles && runs[i].date == currentDate) {
                runs.splice(i, 1);
            }
            localStorage.setItem('runs', JSON.stringify(runs));
        }


        //Get form values
        var miles = $('#editMiles').val();
        var date = $('#editDate').val();

        //Current Run
        var update_run = {
            date: date,
            miles: parseFloat(miles)
        };

        //Add run to runs array
        runs.push(update_run);

        alert('Run updated');

        //Set Stringified object to Local Storage
        localStorage.setItem('runs', JSON.stringify(runs)); //(key, value);

        //redirect
        window.location.href = "index.html";

        return false;
    }

    function clearRuns() {
        localStorage.removeItem('runs');
        $('#stats').html('<p>You have no logged Runs</p>');
    }

    /** Delete run */
    function deleteRun() {
        //Set ls items
        localStorage.setItem('currentMiles', $(this).data('miles'));
        localStorage.setItem('currentDate', $(this).data('date'));

        //Get current data
        currentMiles = localStorage.getItem('currentMiles');
        currentDate = localStorage.getItem('currentDate');

        var runs = getRunsObject();

        //Loop through runs
        for (var i = 0; i < runs.length; i++) {
            if (runs[i].miles == currentMiles && runs[i].date == currentDate) {
                runs.splice(i, 1);
            }
            localStorage.setItem('runs', JSON.stringify(runs));
        }



        alert('Run deleted');

        //redirect
        window.location.href = "index.html";

        return false;
    }
    /*
     * Get the runs object
     */
    function getRunsObject() {
        //Set runs Array
        var runs = new Array();
        //Get current runs from Local storage
        var currentRuns = localStorage.getItem('runs');
        //Check local storage
        if (currentRuns != null) {
            //Set to runs
            var runs = JSON.parse(currentRuns);
        }

        //Return runs object
        return runs.sort(function (a, b) {
            return new Date(b.date) - new Date(a.date)
        });
    }

    /*
     * Set the current click miles and date 
     */
    function setCurrent() {
        //Set ls items
        localStorage.setItem('currentMiles', $(this).data('miles'));
        localStorage.setItem('currentDate', $(this).data('date'));

        //Insert form fields 
        //We insert current miles onto the input field
        $('#editMiles').val(localStorage.getItem('currentMiles'));
        $('#editDate').val(localStorage.getItem('currentDate'));
    }
});

/*Notes:

>if the loop iteration matches the current values, we take it out(splice) and put it back in to the value.*/