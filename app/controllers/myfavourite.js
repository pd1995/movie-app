import Controller from '@ember/controller';

export default Controller.extend({
	//action to delete from favourites
  actions: {
    deleteFavourites(movie){
      this.store.findRecord('myfavourite',movie.get('id'),{ backgroundReload: false }).then(function(movie){
        movie.destroyRecord();
      });
      this.transitionTo('myfavourite');
    }
  }
});