import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  init(){
    this._super(...arguments);
    this.get('store').findAll('measurement')
      .then((measurements)=>{
        this.set('measurements', measurements );
        console.log("Got Measurements", measurements);
      })
  }
});
