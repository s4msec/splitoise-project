type Project = {
    id: number;
    uuid: string;
    userId: number;
    name: string;
    description: string;
    icon: string;
};
  
type ProjectCardProps = {
    project: Project;
};

type ProjectListProps = {
    projects: Project[]; // Added to define the list of projects
    onSelect: (project: Project) => void; // Passed from ShowProjects
};

interface PageProps {
    params?: { slug: string }; // Optional if not always present
    projects?: Project[]; // Optional to align with potential exclusions
    onSelect?: (project: Project) => void; // Optional callback
}
