import DS from 'ember-data';
const { attr } = DS;

export default DS.Model.extend({
	//initialise the model with poster path
  poster_path: attr('string')
});