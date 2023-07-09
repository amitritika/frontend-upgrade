// BoxIconColor.stories.tsx

import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import BoxIconColor from './BoxIconColor';
import mockupData from './mockupdata';

const meta: Meta<typeof BoxIconColor> = {
    title: 'Components/BoxIconColor',
    component: BoxIconColor
  }

export default meta;

type Story = StoryObj<typeof BoxIconColor>;

export const Template1: Story = {
    render: () => 
    <>
    {mockupData.map((item, index) => (
      <BoxIconColor
        key={index}
        icon={item.icon}
        title={item.title}
        link={item.link}
        description={item.description}
        svgPath={item.svgPath}
        color = {item.color}
      />
    ))}
  </>
  }




