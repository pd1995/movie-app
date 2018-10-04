import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		some_action(x) {
      console.log(x.constructor.modelName);
			this.transitionToRoute("details", x.get('id'), {queryParams: {modelName: x.constructor.modelName}});
		},
		addToFavourites(movie) {
      let favourite = this.store.createRecord('myfavourite', {
        id: movie.get('id'),
        poster_path : movie.get('poster_path')
      });
      myfavourite.save();
    }
	
    
  }

});

