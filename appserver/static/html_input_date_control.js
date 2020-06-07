require([
    "jquery",
    "splunkjs/mvc",
    "splunkjs/mvc/simplexml/ready!"
], function ($, mvc) {

    var defaultTokenModel = mvc.Components.get("default");
    var submittedTokenModel = mvc.Components.get("submitted");

    // On default model change of token tokFromDate assign the selected value to html date input inputFromDate
    defaultTokenModel.on("change:tokFromDate", function () {
        var tokFromDate = defaultTokenModel.get("tokFromDate");
        if (tokFromDate !== "undefined") {
            $('#inputFromDate').val(tokFromDate);
        }
    });

    // On default model change of token tokToDate assign the selected value to html date input inputToDate
    defaultTokenModel.on("change:tokToDate", function () {
        var tokToDate = defaultTokenModel.get("tokToDate");
        if (tokToDate !== "undefined") {
            $('#inputToDate').val(tokToDate);
        }
    });

    // On submitted model change of token tokFromDate assign the selected value to html date input inputFromDate
    submittedTokenModel.on("change:tokFromDate", function (newValue) {
        var tokFromDate = defaultTokenModel.get("tokFromDate");
        if (tokFromDate !== "undefined") {
            $('#inputFromDate').val(tokFromDate);
        }
    });

    // On submitted model change of token tokToDate assign the selected value to html date input inputToDate
    submittedTokenModel.on("change:tokToDate", function (newValue) {
        var tokToDate = defaultTokenModel.get("tokToDate");
        if (tokToDate !== "undefined") {
            $('#inputToDate').val(tokToDate);
        }
    });

    // On change of html date input inputFromDate, update the token tokFromDate in default and submitted model
    $(document).on("click", "#submit", function () {
        var dateText = $("#inputFromDate").val();
        console.log(dateText);
        if(dateText===""){
            console.log("In if");
            var now = new Date();
    var month = (now.getMonth() + 1);               
    var day = (now.getDate()-1);
    if (month < 10) 
        month = "0" + month;
    if (day < 10) 
        day = "0" + day;
    var today = now.getFullYear() + '-' + month + '-' + day;
    $('#inputFromDate').val(today);
    dateText = $("#inputFromDate").val();
        }
        defaultTokenModel.set("tokFromDate", dateText);
        submittedTokenModel.set("tokFromDate", dateText);
    });

    // On change of html date input inputToDate, update the token tokToDate in default and submitted model
    $(document).on("click", "#submit", function () {
        console.log("clicked");
        var dateText = $("#inputToDate").val();
        if(dateText===""){
            console.log("In if");
            var now = new Date();
    var month = (now.getMonth() + 1);               
    var day = now.getDate();
    if (month < 10) 
        month = "0" + month;
    if (day < 10) 
        day = "0" + day;
    var today = now.getFullYear() + '-' + month + '-' + day;
    $('#inputToDate').val(today);
    dateText = $("#inputToDate").val();
        }
        defaultTokenModel.set("tokToDate", dateText);
        submittedTokenModel.set("tokToDate", dateText);
    });
});