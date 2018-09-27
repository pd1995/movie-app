import Controller from '@ember/controller';

export default Controller.extend({
	actions : {
		deleteFavourites(params){
			this.store.findRecord('trending',params.id,{ backgroundReload: false}).then(function(trending){
				trending.destroyRecord();
			})
		}
	}
});
