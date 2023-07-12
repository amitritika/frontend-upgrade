
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import Signin from './Signin';

const meta: Meta<typeof Signin> = {
  title: 'Components/Signin',
  component: Signin
}


export default meta;

type Story = StoryObj<typeof Signin>;



export const SignInComponent: Story = {
    parameters: {
        nextjs: {
          appDirectory: true,
          navigation: {
            pathname: '/profile',
            query: {
              user: 'santa',
            },
          },
        },
      }
}

