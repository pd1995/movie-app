import DS from 'ember-data';
const {attr} = DS;
export default DS.Model.extend({
	//initialise model with poster path and title
  poster_path: attr('string'),
  title: attr('string')
});