import DS from 'ember-data';

export default DS.RESTSerializer.extend({

	normalizeResponse(store,primaryModelClass,payload,id,requestType){
		//populate the model with payload
		payload={
			trending:payload.results
		};
		console.log(payload)
		return this._super(store,primaryModelClass,payload,id,requestType);
	}
});