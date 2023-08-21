import GFG from '../assets/GFG.png'
import UD from '../assets/udemy.png'
import PM from '../assets/paymasr.jpg'
import BL from '../assets/BL.jpg'
import FCC from '../assets/FCC.svg'

const skills = [
{
  title: 'Backend Development & Data Management',
  list: [
    {
      name: 'DSA',
      experience: '1 years',
      level: 'intermediate',
    },
    {
      name: 'C++',
      experience: '2 years',
      level: 'advanced',
    },
    {
      name: 'NodeJS',
      experience: '3 years',
      level: 'advanced',
    },
    {
      name: 'ExpressJS',
      experience: '2 years',
      level: 'advanced',
    },
    {
      name: 'Python',
      experience: '1 years',
      level: 'intermediate',
    },
    {
      name: 'MongoDB',
      experience: '2 years',
      level: 'advanced',
    },
  ],
},
{
  title: 'UI/UX Design & content management',
  list: [
    {
      name: 'Figma',
      experience: '2 years',
      level: 'intermediate',
    },
    {
      name: 'Figma AI Blugins',
      experience: '1 years',
      level: 'intermediate',
    },
    {
      name: 'Bubble.io',
      experience: '1 years',
      level: 'beginner',
    },
    {
      name: 'WordPress',
      experience: '1 years',
      level: 'beginner',
    },
    {
      name: 'WebFlow',
      experience: '1 years',
      level: 'beginner',
    },
  ],
},
{
  title: 'Frontend Development',
  list: [
    {
      name: 'ReactJS',
      experience: '3 years',
      level: 'advanced',
    },
    {
      name: 'React-Native',
      experience: '2 years',
      level: 'intermediate',
    },
    {
      name: 'NextJS',
      experience: '1 years',
      level: 'Beginner',
    },
    {
      name: 'HTML',
      experience: '3 years',
      level: 'advanced',
    },
    {
      name: 'CSS',
      experience: '3 years',
      level: 'advanced',
    },
    {
      name: 'SCSS',
      experience: '2 years',
      level: 'intermediate',
    },
  ],
},
];


const experience = [
  {
    type: 'course',
    image: GFG,
    date: 'Jun 2023 - Aug 2023 (Course)',
    title: 'Data Structures and Algorithms',
    address: {
      city: 'Sandeep Jain ',
      country: 'GeeksForGeeks',
    },
    url: 'https://www.geeksforgeeks.org/courses/dsa-self-paced',
  },
  {
    type: 'course',
    image: GFG,
    date: 'Mar 2023 - May 2023 (Course)',
    title: 'Master C++ Programming - Complete Beginner to Advanced',
    address: {
      city: 'Sandeep Jain ',
      country: 'GeeksForGeeks',
    },
    url: 'https://www.geeksforgeeks.org/courses/cpp-programming-basic-to-advanced',
  },
  {
    type: 'job',
    image: PM,
    date: 'Aug 2022 - Feb 2023 (Apprenticeship)',
    title: 'Product Manager || MERN Stack Developer',
    address: {
      city: 'PayMasr ',
      country: 'Cairo, EG',
    },
    url: 'https://www.linkedin.com/company/paymasr/',
  },
  {
    type: 'job',
    image: BL,
    date: 'Jun 2022 - Jul 2022 (Contract)',
    title: 'FrontEnd Developer Developer',
    address: {
      city: 'Bottomless ',
      country: 'Seattle, Washington',
    },
    url: 'https://www.linkedin.com/company/bottomless/',
  },
  {
    type: 'course',
    image: UD,
    date: 'Apr 2022 - May 2022 (Course)',
    title: 'The Complete React Developer Course (w Hooks and Redux)',
    address: {
      city: 'Andrew Mead',
      country: 'Udemy',
    },
    url: 'https://www.udemy.com/course/react-2nd-edition/',
  },
  {
    type: 'course',
    image: FCC,
    date: 'Jan 2022 - Mars 2022 (Course)',
    title: 'Responsive Web Design',
    address: {
      city: '',
      country: 'FreeCodeCamp',
    },
    url: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/',
  },
  {
    type: 'course',
    image: FCC,
    date: 'Jan 2022 - Mars 2022 (Course)',
    title: 'Responsive Web Design',
    address: {
      city: '',
      country: 'FreeCodeCamp',
    },
    url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/',
  },
  {
    type: 'course',
    image: FCC,
    date: 'Jan 2022 - Mars 2022 (Course)',
    title: 'Responsive Web Design',
    address: {
      city: '',
      country: 'FreeCodeCamp',
    },
    url: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/',
  },
]

export {skills, experience};