import Route from '@ember/routing/route';

export default Route.extend({
	model(params){
		//making a request to store to find record
    return this.store.findRecord(params.modelName , params.id);

  }

});
