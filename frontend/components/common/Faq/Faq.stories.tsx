import { Meta, StoryFn, StoryObj } from '@storybook/react';
import Faq from './Faq';
import { main } from "../../../helpers/faq"

const meta: Meta<typeof Faq> = {
  title: 'Components/Faq',
  component: Faq
}


export default meta;

type Story = StoryObj<typeof Faq>;



export const Faq1: Story = {
  args: {
    faq: main
  }
}