import Route from '@ember/routing/route';

export default Route.extend({
	model(){
              let model_obj = {
          			 trending: this.store.findAll('trending'),
           			upcoming: this.store.findAll('upcoming')
       }        	
       return model_obj;  
         }
		 
// 	setupController (controller, model)  {
//       this._super(controller, model);
// }

	// actions : {
		// transitionToDetails(trending) {
		// 	console.log("action executed")
		// 	// console.log(trending, "fdsdfsdfsdf")
		// 	this.transitionTo('details', trending.get("id"));
		// },
		// some_action(x){
		// 	console.log(x.get('id'))
		// }
	// }
});
