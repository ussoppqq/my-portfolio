export const skills = [
  // Frontend
  { name: "React", level: 95, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 95, category: "frontend" },
  
  // Backend
  { name: "Node.js", level: 90, category: "backend" },
  { name: "Express.js", level: 85, category: "backend" },
  { name: "MongoDB", level: 80, category: "backend" },
  { name: "Python", level: 75, category: "backend" },
  { name: "PHP", level: 70, category: "backend" },
  
  // Mobile
  { name: "React Native", level: 85, category: "mobile" },
  { name: "Flutter", level: 75, category: "mobile" },
  { name: "Expo", level: 80, category: "mobile" },
  
  // Design
  { name: "Figma", level: 85, category: "design" },
  { name: "UI/UX Design", level: 85, category: "design" },
  
  // Soft Skills
  { name: "Team Leadership", level: 90, category: "soft" },
  { name: "Problem Solving", level: 95, category: "soft" },
  { name: "Communication", level: 90, category: "soft" },
  { name: "Project Management", level: 85, category: "soft" },
  { name: "Agile/Scrum", level: 80, category: "soft" }
];

export const getSkillsByCategory = (category) => {
  return skills.filter(skill => skill.category === category);
};