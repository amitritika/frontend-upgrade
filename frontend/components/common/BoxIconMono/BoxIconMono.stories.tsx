// BoxIconMono.stories.tsx

import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import BoxIconMono from './BoxIconMono';
import mockupData from './mockupdata';

const meta: Meta<typeof BoxIconMono> = {
    title: 'Components/BoxIconMono',
    component: BoxIconMono
  }

export default meta;

type Story = StoryObj<typeof BoxIconMono>;

export const Template1: Story = {
    render: () => 
    <>
    {mockupData.map((item, index) => (
      <BoxIconMono
        key={index}
        icon={item.icon}
        title={item.title}
        link={item.link}
        description={item.description}
      />
    ))}
  </>
  }




