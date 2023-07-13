import { Meta, StoryObj } from '@storybook/react';
import BlogCard, { BlogCardProps } from './BlogCard';

const meta: Meta<typeof BlogCard> = {
  title: 'Components/BlogCard',
  component: BlogCard
}


export default meta;

type Story = StoryObj<typeof BlogCard>;



export const BlogCardStory: Story = {
  args: {
    imgLink: "https://careeraplus.in/api/blog/photo/5-things-to-do-before-an-interview",
    title: "5 things to do before an interview",
    name: "Ritika Dubey",
    description: "One important key to success is self-confidence. It is crucial to have confidence in yourself and your abilities. Another important aspect is ...",
    profileImg: "https://careeraplus.in/api/user/photo/ritikadubey",
    publishedDate: "10 Jan 2023"
  }
}