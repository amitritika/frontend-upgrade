import { Meta, StoryFn, StoryObj } from '@storybook/react';
import HeaderUpdated, { HeaderProps } from './HeaderUpdated1';

const meta: Meta<typeof HeaderUpdated> = {
  title: 'Components/HeaderUpdated1',
  component: HeaderUpdated
}


export default meta;

type Story = StoryObj<typeof HeaderUpdated>;



export const AdminAuthenticatedUser: Story = {
  args: {
    isAuth: true,
    role: 1,
  }
}

export const AuthenticatedUser: Story = {
  args: {
    isAuth: true,
    role: 0,
  }
}


export const UnAuthenticatedUser: Story = {
  args: {
    isAuth: false
}
}