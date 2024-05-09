import { newSpecPage } from '@stencil/core/testing';
import { FeedbackFloatingButton } from '../feedback-floating-button';

describe('feedback-widget', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FeedbackFloatingButton],
      html: `<feedback-widget></feedback-widget>`,
    });
    expect(page.root).toEqualHtml(`
      <feedback-widget>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </feedback-widget>
    `);
  });
});
