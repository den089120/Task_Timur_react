import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {AppLink, AppLinkTheme} from './AppLink';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

export default {
    title: 'widgets/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY
};

export const Dark = Template.bind({});
Dark.args = {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];