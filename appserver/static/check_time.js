require([
    'splunkjs/mvc/simplexml/ready!'
], $(".btn-primary").on('click', function () {
    setTimeout(function(){
        console.log("Script Loaded")
        if ($(".alert-error")) {
            if ($(".alert-error").html().indexOf("for time term 'earliest'") != -1) {
                $(".alert-error").html("Set Earliest Date");
            }
            else if ($(".alert-error").html().indexOf("for time term 'latest'") != -1) {
                $(".alert-error").html("Set Latest Date");
            }
            else {
                console.log("No Errors");
            }
        }
        else {
            console.log("Class not found");
        }
    },500);
    
})
);