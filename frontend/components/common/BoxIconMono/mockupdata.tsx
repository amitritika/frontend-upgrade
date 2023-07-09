// data.ts

import { ReactNode } from 'react';
import { FaRegIdBadge, FaFacebook } from 'react-icons/fa';
interface BoxIconMonoItem {
  icon: ReactNode;
  title: string;
  link: string;
  description: string;
}

const mockupData: BoxIconMonoItem[] = [
  {
    icon: <FaRegIdBadge />,
    title: 'Visual Resume',
    link: '/visualresume',
    description: 'Easy to use Resume builder tool, for creating attractive Visual Resume in 15 Min.',
  },
  {
    icon: <FaFacebook />,
    title: 'Visual Resume',
    link: '/visualresume',
    description: 'Easy to use Resume builder tool, for creating attractive Visual Resume in 15 Min.',
  },
  // Add more mockup data items here if needed
];

export default mockupData;
