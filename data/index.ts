export interface Project {
    id: number;
    imageUrl: string;
    descriptionKey: string;
    technologies: string[];
}

export const projectsData: Project[] = [
    { 
        id: 1, 
        imageUrl: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=800",
        descriptionKey: "projects.1.description",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    { 
        id: 2, 
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
        descriptionKey: "projects.2.description",
        technologies: ["D3.js", "React", "Firebase", "BigQuery"]
    },
    { 
        id: 3, 
        imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800",
        descriptionKey: "projects.3.description",
        technologies: ["React Native", "GraphQL", "PostgreSQL", "AWS Amplify"]
    }
];