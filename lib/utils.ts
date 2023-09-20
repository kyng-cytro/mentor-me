export const formatDate = (date: Date) => {
  return useDateFormat(date, "MMMM DD, YYYY").value;
};

export const education_levels = [
  { name: "Select Education Level", value: "" },
  { name: "High School Diploma", value: "High School Diploma" },
  { name: "Associate's Degree", value: "Associate's Degree" },
  { name: "Bachelor's Degree", value: "Bachelor's Degree" },
  { name: "Master's Degree", value: "Master's Degree" },
  { name: "Doctoral Degree", value: "Doctoral Degree (Ph.D.)" },
  { name: "Professional Degree", value: "Professional Degree (e.g., MD, JD)" },
  {
    name: "Vocational/Trade School Certificate",
    value: "Vocational/Trade School Certificate",
  },
  { name: "Diploma/Certificate Program", value: "Diploma/Certificate Program" },
  { name: "Some College/No Degree", value: "Some College/No Degree" },
  { name: "Other/Not Specified", value: "Other/Not Specified" },
];

export const skills = [
  "Communication",
  "Leadership",
  "Problem-Solving",
  "Time Management",
  "Teamwork",
  "Technical",
  "Programming Languages",
  "Software Proficiency",
  "Project Management",
  "Presentation",
  "Analytical",
  "Negotiation",
  "Sales/Marketing",
  "Research",
  "Innovation",
  "Critical Thinking",
  "Networking",
  "Data Analysis",
  "Decision-Making",
  "Organizational",
  "Interpersonal",
  "Adaptability",
  "Customer Service",
  "Financial Management",
  "Problem Analysis",
  "Information Gathering",
  "Conflict Resolution",
  "Risk Management",
  "Public Speaking",
  "Writing and Editing",
  "Digital Marketing",
  "SEO",
  "Social Media Management",
  "Graphic Design",
  "Web Development",
  "User Experience Design",
  "Content Creation",
  "Data Visualization",
  "Sales Strategy",
  "Business Development",
  "Emotional Intelligence",
  "Multitasking",
  "Foreign Language",
  "Presentation Design",
  "Problem Identification",
  "Decision-Making",
  "Customer Relationship",
  "Supply Chain Management",
];

export const fieldOfExpertise: string[] = [
  "Technology and Software Development",
  "Entrepreneurship and Startups",
  "Business and Management",
  "Marketing and Advertising",
  "Design (Graphic, Web, UI/UX, etc.)",
  "Finance and Investment",
  "Health and Wellness",
  "Education and Teaching",
  "Career Development and Job Search",
  "Writing and Publishing",
  "Arts and Entertainment",
  "Science and Research",
  "Environmental and Sustainability",
  "Social Services and Non-Profit",
  "Sports and Fitness",
  "Personal Development and Life Coaching",
  "Parenting and Family",
  "Travel and Exploration",
  "Photography and Videography",
  "Culinary Arts and Cooking",
  "Language Learning and Linguistics",
  "Music and Audio Production",
  "Fashion and Beauty",
  "Psychology and Counseling",
  "Law and Legal Services",
];

export const landingItems = [
  { text: "Home", url: "/" },
  { text: "Become a mentor", url: "/become-a-mentor" },
  { text: "Live sessions", url: "/live-sessions" },
  { text: "Find a mentor", url: "/find-a-mentor" },
];

export const dashboardItemsMentee = [
  { url: "/mentee", text: "Dashboard" },
  { url: "/tasks", text: "Tasks" },
  { url: "/mentee/mentors", text: "Mentors" },
];

export const dashboardItemsMentor = [
  { url: "/mentor", text: "Dashboard" },
  { url: "/tasks", text: "Tasks" },
  { url: "/mentor/mentees", text: "Mentees" },
];

export const weekDays: string[] = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
];

export const calculateAge = (dob: string): number => {
  try {
    const dobDate: Date = new Date(dob);
    const currentDate: Date = new Date();

    let age: number = currentDate.getFullYear() - dobDate.getFullYear();

    if (
      currentDate.getMonth() < dobDate.getMonth() ||
      (currentDate.getMonth() === dobDate.getMonth() &&
        currentDate.getDate() < dobDate.getDate())
    ) {
      age--;
    }

    return age;
  } catch (error) {
    return 0;
  }
};

export const createUniqueID = (
  userID: string | undefined,
  guestID: string | undefined,
) => {
  if (!userID || !guestID) {
    return "public";
  }

  const sortedIDs = [userID, guestID].sort();
  const uniqueID = sortedIDs.join("_");
  return uniqueID;
};
