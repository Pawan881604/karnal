"use client"
import { useState, useMemo } from "react";
interface UsePostSidebarProps {
  postApiData: any[] | undefined; // Allow undefined for safety
}

interface UsePostSidebarReturn {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  sortBy: string;
  setSortBy: (sortOption: string) => void;
  filterApiData: any[];
}

export const usePostSidebar = ({
  postApiData = [], // Fallback to empty array
}: UsePostSidebarProps): UsePostSidebarReturn => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("latest");
  // Ensure postApiData is always an array
  const projects = postApiData || [];

  // Filter projects based on search query and selected categories
  const filteredProjects = useMemo(() => {
    if (!Array.isArray(projects)) return []; // Safeguard against invalid data
    return projects.filter((project,i:number) => {
      const matchesSearchQuery =
        searchQuery === "" || project.title?.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesSearchQuery;
    });
  }, [projects, searchQuery, selectedCategories]);
  const filterApiData = useMemo(() => {
    return Array.isArray(filteredProjects) // Safeguard for unexpected non-array
      ? [...filteredProjects].sort((a, b) => {
          if (sortBy === "az") return a.title.localeCompare(b.title);
          if (sortBy === "za") return b.title.localeCompare(a.title);
          return 0; // 'latest' or default
        })
      : [];
  }, [filteredProjects, sortBy]);

  return {
    searchQuery,
    setSearchQuery,
    selectedCategories,
    setSelectedCategories,
    sortBy,
    setSortBy,
    filterApiData,
  };
};
