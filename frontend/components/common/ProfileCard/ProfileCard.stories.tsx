
import { Meta, StoryObj } from '@storybook/react';
import ProfileCard, { ProfileCardProps } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
  title: 'Components/ProfileCard',
  component: ProfileCard
}


export default meta;

type Story = StoryObj<typeof ProfileCard>;



export const ProfileCardStory: Story = {
  args: {
    imgLink: "/images/team/Slide1.PNG",
    title: "CEO",
    name: "Ritika Dubey",
    description: "A business Enthusiastic very Realistic Person. Know how to deal with people. A standing pillar for Government jobs Section. A beacon of our Vision."

  }
}

