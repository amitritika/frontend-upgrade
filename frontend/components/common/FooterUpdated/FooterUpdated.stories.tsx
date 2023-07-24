import { Meta, StoryFn, StoryObj } from '@storybook/react';
import FooterUpdated, { FooterProps } from './FooterUpdated';

const meta: Meta<typeof FooterUpdated> = {
  title: 'Components/FooterUpdated',
  component: FooterUpdated
}


export default meta;

type Story = StoryObj<typeof FooterUpdated>;



export const AdminAuthenticatedUser: Story = {
  args: {
    isAuth: true,
    role: 1,
  }
}