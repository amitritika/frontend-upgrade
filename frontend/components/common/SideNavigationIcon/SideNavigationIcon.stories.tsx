import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import SideNavigationIcon from './SideNavigationIcon';
import { FaFacebook } from 'react-icons/fa';

const meta: Meta<typeof SideNavigationIcon> = {
    title: 'Components/SideNavigationIcon',
    component: SideNavigationIcon
  }

export default meta;

type Story = StoryObj<typeof SideNavigationIcon>;

export const SideNavigationIconClicked: Story = {
    args: {
        icon: <FaFacebook />,
        onClick: ()=> alert("Icon Clicked"),
        clicked: true
      }
}

export const SideNavigationIconUnClicked: Story = {
    args: {
        icon: <FaFacebook />,
        onClick: ()=> alert("Icon Clicked"),
        clicked: false
      }
}