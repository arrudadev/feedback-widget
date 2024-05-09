import chatIcon from '../../assets/chat-icon.svg'
import { Component, Host, h } from '@stencil/core';
import { base64ToSVG } from '../../utils/base64ToSVG';

@Component({
  tag: 'feedback-floating-button',
  styleUrl: 'feedback-floating-button.css',
  shadow: true,
})
export class FeedbackFloatingButton {
  render() {
    return (
      <Host>
        <div innerHTML={base64ToSVG(chatIcon)}></div>
      </Host>
    );
  }
}
