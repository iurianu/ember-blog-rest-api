import { module, test } from 'qunit';
import { setupRenderingTest } from 'blog-ember-rest/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | footer/copy-section', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Footer::CopySection />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Footer::CopySection>
        template block text
      </Footer::CopySection>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
