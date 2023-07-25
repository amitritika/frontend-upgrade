import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import SideNavigationButton from './SideNavigationButton';
import { FaFacebook } from 'react-icons/fa';

const meta: Meta<typeof SideNavigationButton> = {
    title: 'Components/SideNavigationButton',
    component: SideNavigationButton
  }

export default meta;

type Story = StoryObj<typeof SideNavigationButton>;

export const SideNavigationButtonClicked: Story = {
    args: {
        text: "Facebook",
        icon: <FaFacebook />,
        onClick: ()=> alert("Button Clicked"),
        clicked: true
      }
}

export const SideNavigationButtonUnClicked: Story = {
    args: {
        text: "Facebook",
        icon: <FaFacebook />,
        onClick: ()=> alert("Button Clicked"),
        clicked: false
      }
}