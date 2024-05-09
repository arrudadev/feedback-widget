/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface FeedbackFloatingButton {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLFeedbackFloatingButtonElement extends Components.FeedbackFloatingButton, HTMLStencilElement {
    }
    var HTMLFeedbackFloatingButtonElement: {
        prototype: HTMLFeedbackFloatingButtonElement;
        new (): HTMLFeedbackFloatingButtonElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "feedback-floating-button": HTMLFeedbackFloatingButtonElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface FeedbackFloatingButton {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "feedback-floating-button": FeedbackFloatingButton;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "feedback-floating-button": LocalJSX.FeedbackFloatingButton & JSXBase.HTMLAttributes<HTMLFeedbackFloatingButtonElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
