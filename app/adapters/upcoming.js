import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	//making a server call to upcoming
   host: 'https://api.themoviedb.org',
   namespace: '/3/movie/',   
    buildURL(modelName, id, snapshot, requestType, query) {
       return this.host + this.namespace + 'upcoming?api_key=2807c19d437127f8813de5da5768a753&language=en-US&page=1'
   }
});
