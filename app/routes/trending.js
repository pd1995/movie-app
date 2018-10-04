import Route from '@ember/routing/route';

export default Route.extend({
	model(){
		//making a request to store to fetch data by creating objects of upcoming and trending
              let model_obj = {
          			 trending: this.store.findAll('trending'),
           			upcoming: this.store.findAll('upcoming')
       }        	
       return model_obj;  
         }
		 
});
