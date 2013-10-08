exports.useTimestamps = function (schema, options) {
	
	schema.add({created_at: Date, modified_at: Date});	
	schema.pre('save', function (next) {
	
		if (!this.created_at) {
			this.created_at = this.modified_at = new Date;
		} 
		else {
			this.modified_at = new Date;
		}
	
		if (options && options.index) {
			schema.path('modified_at').index(options.index);
		}

		next();
	});	
};