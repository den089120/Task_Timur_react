import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
// import 'app/styles/index.scss';
import {Button, SizeButton, ThemeButton} from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
};

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'Text',
    theme: ThemeButton.BACKGROUND,
};

export const BackgroundInvertedTheme = Template.bind({});
BackgroundInvertedTheme.args = {
    children: 'Text',
    theme: ThemeButton.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
    children: '>',
    theme: ThemeButton.BACKGROUND,
    square: true,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: 'Text',
    theme: ThemeButton.BACKGROUND,
    square: true,
    size: SizeButton.L,
};

export const SquareSizeXl = Template.bind({});
SquareSizeXl.args = {
    children: 'Text',
    theme: ThemeButton.BACKGROUND,
    square: true,
    size: SizeButton.XL,
};
