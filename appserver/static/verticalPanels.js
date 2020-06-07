var deps = [
    "splunkjs/ready!",
    "splunkjs/mvc/searchmanager",
    "splunkjs/mvc/singleview"
];
require(deps, function (mvc) {
    var SearchManager = require("splunkjs/mvc/searchmanager");
    var singleview = require("splunkjs/mvc/singleview");


    // Create a search manager
    new SearchManager({
        id: "mysearchfor24",
        preview: true,
        search: 'index=raw_site1 source="matrix" kpi="clientCount_2.4GHz" device="*_Sum" value!=null | stats count,latest(value) as "Associated" | eval Associated=if(count==0,0,Associated) | fields - count'
    });

 new SearchManager({
        id: "mySearchfor5",
        preview: true,
        search: 'index=raw_site1 source="matrix" kpi="clientCount_5GHz" device="*_Sum" value!=null| stats count,latest(value) as "Associated" | eval Associated=if(count==0,0,Associated)| fields - count'
    });

    // Create a chart view that is bound to the search manager
    new singleview({
        id: "topsingle",
        managerid: "mysearchfor24",
        el: $("#clientCount24")
    }).render();
    new singleview({
        id: "bottom-single",
        managerid: "mySearchfor5",
        el: $("#clientCount5")
    }).render();
});