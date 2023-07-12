// PricingMenu.stories.tsx

import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import PricingMenu from './PricingMenu';
import { mockPricingOptions } from './mockupData';

const meta: Meta<typeof PricingMenu> = {
    title: 'Components/PricingMenu',
    component: PricingMenu
  }

export default meta;

type Story = StoryObj<typeof PricingMenu>;

export const Template1: Story = {
    render: () => 
    <>
    {mockPricingOptions.map((item: { title: string; imageSrc: string; discount: number; price: number; features: string[]; isAuth: boolean; purchaseLink: string; resumeBuilderLink: string; classSelected? : boolean;}, index: React.Key | null | undefined) => (
      <PricingMenu
        key={index}
        title={item.title}
        imageSrc={item.imageSrc}
        discount={item.discount}
        price={item.price}
        features={item.features}
        isAuth = {item.isAuth}
        purchaseLink = {item.purchaseLink}
        resumeBuilderLink = {item.resumeBuilderLink}
        classSelected={item.classSelected}
      />
    ))}
  </>
  }




