import { addParameters } from "@storybook/react";
import { addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { withDesign } from 'storybook-addon-designs'

const customViewports = {
    kaios: {
        name: 'jiophone',
        styles: {
            width: '240px',
            height: '320px'
        },
    }
};

addParameters({
    backgrounds: [
        { name: "Default theme", value: "#ffffff", default: true },
        { name: "Dark theme", value: "#050449" }
    ],
    viewport: {
        viewports: customViewports,
        defaultViewport: 'kaios'
    }
});

addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(withDesign);