import React, { useState } from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import Header, { HeaderProps } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header
}


export default meta;

type Story = StoryObj<typeof Header>;



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
