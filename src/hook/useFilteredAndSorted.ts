import { useMemo } from "react";

interface Project {
  title: string;
  category: { _id: string }; // Assuming `category` has an `_id` property
  // Add other properties of the project if necessary
}

interface UseFilteredAndSortedProps {
  projects: Project[];
  searchQuery: string;
  selectedCategories: string[];
  sortBy: "az" | "za" | "latest"; // Adjust this type based on your sort options
}

const useFilteredAndSorted = ({
  projects = [],
  searchQuery = "",
  selectedCategories = [],
  sortBy = "latest",
}: UseFilteredAndSortedProps): Project[] => {
  // Memoize the filtered and sorted projects
  const sortedProjects = useMemo(() => {
    // Filter projects
    const filteredProjects = projects.filter((project) => {
      const matchesSearchQuery =
        !searchQuery ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(project?.category?._id);
      return matchesSearchQuery && matchesCategory;
    });

    // Sort the filtered projects
    return filteredProjects.sort((a, b) => {
      if (sortBy === "az") return a.title.localeCompare(b.title);
      if (sortBy === "za") return b.title.localeCompare(a.title);
      return 0; // Default sorting (e.g., 'latest')
    });
  }, [projects, searchQuery, selectedCategories, sortBy]);

  return sortedProjects;
};

export default useFilteredAndSorted;
