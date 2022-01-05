export const about = [
  {
    id: 1,
    description:
      "I love playing video games, and I consider software engineering as one. Everytime I come up with a solution for the roadblocks I have during projects, my software engineering skill has increased.  The higher my skill level becomes, the more experience I had accumulated. Help me level up my skill while I work with or for you. ",
    image: "df.jpg",
  },
  {
    id: 2,
    label: "My Skills",
    skills: [
      "Developing websites using user centered design approach ",
      "Utilizing use cases to design / develop mockups to satisfy user needs",
      "Creating reusable components to reuse for future projects",
      "Solving problems in a timely manner  ",
      "Team-oriented ",
    ],
  },
  {
    id: 3,
    label: "Education",
    education: [
      {
        title: "San Francisco State University",
        description: "Bachelor of Science, Computer Science ",
        status: "Graduated December 2021",
      },
      {
        title: "Udemy.com",
        description: "Self-taught Web Developer, Designer  ",
        status: "2017 - Present",
      },
    ],
  },
];

const [, skills, education] = about;
export const initialTabs = [skills, education];
