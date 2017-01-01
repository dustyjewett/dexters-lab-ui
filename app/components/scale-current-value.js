import Ember from 'ember';

export default Ember.Component.extend({
  socket: Ember.inject.service(),
  weight: Ember.computed.alias('socket.currentWeight')

});
