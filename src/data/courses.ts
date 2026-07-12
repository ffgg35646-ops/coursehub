import type { Course } from "@/types";

export const courses: Course[] = [
  {
    id: "1",
    title: "Complete React Developer Course",
    slug: "complete-react-developer-course",
    description:
      "Learn React from beginner to advanced level with practical projects and modern development techniques.",
    thumbnail:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    price: 99,
    discountPrice: 79,
    category: {
      id: "1",
      name: "Web Development",
      slug: "web-development",
    },
    instructor: {
      id: "1",
      name: "Mohamed Ali",
      bio: "Full Stack Web Developer",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      coursesCount: 12,
    },
    lessons: [
      {
        id: "1",
        title: "Introduction to React",
        description: "Learn React fundamentals",
        duration: 25,
        order: 1,
      },
      {
        id: "2",
        title: "Components and Props",
        description: "Build reusable components",
        duration: 40,
        order: 2,
      },
    ],
    level: "Beginner",
    rating: 4.8,
    reviewsCount: 120,
    studentsCount: 2500,
    duration: "12 Hours",
    isFeatured: true,
    createdAt: "2026-01-01",
  },

  {
    id: "2",
    title: "Node.js Backend Mastery",
    slug: "nodejs-backend-mastery",
    description:
      "Build scalable backend applications using Node.js, Express and MongoDB.",
    thumbnail:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    price: 129,
    discountPrice: 99,
    category: {
      id: "2",
      name: "Backend Development",
      slug: "backend-development",
    },
    instructor: {
      id: "2",
      name: "Ahmed Hassan",
      bio: "Backend Engineer",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      coursesCount: 8,
    },
    lessons: [
      {
        id: "3",
        title: "Express.js Fundamentals",
        description: "Create REST APIs",
        duration: 35,
        order: 1,
      },
      {
        id: "4",
        title: "MongoDB Database",
        description: "Database modeling with Mongoose",
        duration: 50,
        order: 2,
      },
    ],
    level: "Intermediate",
    rating: 4.7,
    reviewsCount: 95,
    studentsCount: 1800,
    duration: "18 Hours",
    isFeatured: true,
    createdAt: "2026-01-05",
  },
];

export default courses;
