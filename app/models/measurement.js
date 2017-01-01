import DS from 'ember-data';

export default DS.Model.extend({
  ounces:DS.attr(),
  timestamp: DS.attr()
});
