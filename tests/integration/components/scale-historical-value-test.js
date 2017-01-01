import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('scale-historical-value', 'Integration | Component | scale historical value', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{scale-historical-value}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#scale-historical-value}}
      template block text
    {{/scale-historical-value}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
