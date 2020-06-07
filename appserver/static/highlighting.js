require([
    'underscore',
    'jquery',
    'splunkjs/mvc',
    'splunkjs/mvc/tableview',
    'splunkjs/mvc/simplexml/ready!'
], function(_, $, mvc, TableView) {
     // Row Coloring Example with custom, client-side range interpretation
    var CustomRangeRenderer = TableView.BaseCellRenderer.extend({
        canRender: function(cell) {
            // Enable this custom cell renderer for both the active_hist_searches and the active_realtime_searches field
            return _(['Status']).contains(cell.field);
        },
        render: function($td, cell) {
            // Add a class to the cell based on the returned value
            var value = cell.value;
       console.log(value);
            // Apply interpretation for number of historical searches
            if (cell.field === 'Status') {
                if (value === "OK") {
       //$parents = $td.parents('tr');
       //$parents.addClass('range-cell').addClass('range-elevated');
            $td.addClass('range-cell').addClass('range-elevated');
           
                }
       else{
       if (value === "ERROR") {
           //$td.parents('tr').addClass('range-cell').addClass('range-severe');
            $td.addClass('range-cell').addClass('range-severe');
}
   else {
       //$td.parents('tr').addClass('range-cell').addClass('range-low');
        $td.addClass('range-cell').addClass('range-low');
       }
       }
   }
$td.text(value.toString()).addClass('string');
}
});
    mvc.Components.get('highlight').getVisualization(function(tableView) {
   setTimeout(tableView.on('rendered', function() {
            // Apply class of the cells to the parent row in order to color the whole row
            tableView.$el.find('td.range-cell').each(function() {
                $(this).parents('tr').addClass(this.className);
            });
         
        }),0);
                 // Add custom cell renderer, the table will re-render automatically.
        tableView.addCellRenderer(new CustomRangeRenderer());
    });
});
