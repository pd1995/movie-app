import Route from '@ember/routing/route';

export default Route.extend({
  model() {
  		//making a request to store to fetch data
    return this.store.findAll('myfavourite')
  }

});