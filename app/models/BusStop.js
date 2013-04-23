
exports.definition = {
	
	config: {
		"columns": {
			title: 'TEXT',
			directions: 'TEXT',
		},
		"defaults": {
			
		},
		"adapter": {
			"type": "sql",
			"collection_name": "BusStops",
			"migration": 20130417200059
		}
	},


	extendModel: function(Model) {		
		_.extend(Model.prototype, {
		
		}); // end extend
		
		return Model;
	},
	
	
    extendCollection: function(Collection) {        
        _.extend(Collection.prototype, {
 
        }); // end extend
 
        return Collection;
    }		
}

