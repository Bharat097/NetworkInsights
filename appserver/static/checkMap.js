require([
  'splunkjs/mvc/simplexml/ready!'
], setTimeout(function () {
  console.log("Start");
  if($(".alert-error").html().indexOf("No matching visualization found for type: maps-plus") != -1){
    $(".alert-error").html("Download Map+ from <a href=\"https://apps.splunk.com/app/3124\" >SplunkBase</a>");
    console.log("Done");
  }
  else{
    console.log("Not Found")
  }
},100)
);
