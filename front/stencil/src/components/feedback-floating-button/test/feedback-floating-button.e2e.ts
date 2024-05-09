import { newE2EPage } from '@stencil/core/testing';

describe('feedback-widget', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<feedback-widget></feedback-widget>');

    const element = await page.find('feedback-widget');
    expect(element).toHaveClass('hydrated');
  });
});
