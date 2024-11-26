'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Search, Globe, Code, Smartphone, ShoppingCart } from 'lucide-react'

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [sortBy, setSortBy] = useState('latest')
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 10

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A fully responsive e-commerce website with advanced features like real-time inventory management and personalized product recommendations.",
      category: "E-commerce",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      title: "Portfolio Website",
      description: "A sleek and modern portfolio website for a digital artist, featuring a dynamic gallery and integrated blog.",
      category: "Portfolio",
      technologies: ["Vue.js", "Nuxt.js", "Sanity CMS"],
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      title: "Mobile Banking App",
      description: "A secure and user-friendly mobile banking application with features like biometric authentication and real-time transaction tracking.",
      category: "Mobile App",
      technologies: ["React Native", "Firebase", "Redux"],
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      title: "Real Estate Listing Platform",
      description: "A comprehensive real estate platform with advanced search capabilities, virtual tours, and integrated mapping features.",
      category: "Web Application",
      technologies: ["Angular", "Express.js", "PostgreSQL"],
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      title: "Social Media Dashboard",
      description: "An all-in-one social media management dashboard for businesses, featuring analytics, scheduling, and content curation tools.",
      category: "Web Application",
      technologies: ["Next.js", "GraphQL", "Tailwind CSS"],
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      title: "Fitness Tracking App",
      description: "A cross-platform fitness tracking application with personalized workout plans, progress tracking, and social features.",
      category: "Mobile App",
      technologies: ["Flutter", "Firebase", "TensorFlow Lite"],
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      title: "Online Learning Platform",
      description: "A comprehensive e-learning platform with interactive courses, live sessions, and progress tracking for students and educators.",
      category: "Web Application",
      technologies: ["React", "Django", "PostgreSQL"],
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      title: "Restaurant Ordering System",
      description: "A user-friendly online ordering system for restaurants, featuring real-time order tracking and integration with popular delivery services.",
      category: "E-commerce",
      technologies: ["Vue.js", "Node.js", "MongoDB"],
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      title: "Travel Booking App",
      description: "A feature-rich travel booking application with personalized recommendations, itinerary planning, and real-time pricing updates.",
      category: "Mobile App",
      technologies: ["React Native", "GraphQL", "AWS"],
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      title: "Project Management Tool",
      description: "A comprehensive project management solution with task tracking, team collaboration features, and customizable workflows.",
      category: "Web Application",
      technologies: ["Angular", "Node.js", "MongoDB"],
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      title: "Healthcare Patient Portal",
      description: "A secure patient portal for healthcare providers, featuring appointment scheduling, medical record access, and telemedicine integration.",
      category: "Web Application",
      technologies: ["React", "Express.js", "PostgreSQL"],
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      title: "Smart Home Control App",
      description: "An IoT-enabled mobile application for controlling smart home devices, with automation features and energy consumption tracking.",
      category: "Mobile App",
      technologies: ["Flutter", "Firebase", "MQTT"],
      image: "/placeholder.svg?height=200&width=400"
    }
  ]

  const categories = ["E-commerce", "Portfolio", "Mobile App", "Web Application"]

  const filteredProjects = projects.filter(project => 
    (searchQuery === '' || project.title.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (selectedCategories.length === 0 || selectedCategories.includes(project.category))
  )

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === 'az') return a.title.localeCompare(b.title)
    if (sortBy === 'za') return b.title.localeCompare(a.title)
    return 0 // 'latest' or default
  })

  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = sortedProjects.slice(indexOfFirstProject, indexOfLastProject)

  const totalPages = Math.ceil(sortedProjects.length / projectsPerPage)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Projects</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-1/4">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label htmlFor="search" className="text-sm font-medium mb-2 block">Search</label>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="search"
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-8"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Categories</label>
                {categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2 mt-1">
                    <Checkbox
                      id={category}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={(checked) => {
                        setSelectedCategories(
                          checked
                            ? [...selectedCategories, category]
                            : selectedCategories.filter((c) => c !== category)
                        )
                      }}
                    />
                    <label
                      htmlFor={category}
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {category}
                    </label>
                  </div>
                ))}
              </div>
              <div>
                <label htmlFor="sort" className="text-sm font-medium mb-2 block">Sort by</label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger id="sort">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="latest">Latest</SelectItem>
                    <SelectItem value="az">A-Z</SelectItem>
                    <SelectItem value="za">Z-A</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </aside>
        <main className="lg:w-3/4">
          <div className="grid gap-6 md:grid-cols-2">
            {currentProjects.map((project, index) => (
              <Card key={index} className="flex flex-col">
                <CardContent className="p-0">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                </CardContent>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex-grow flex flex-col justify-end">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        <Code className="mr-1 h-3 w-3" />
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Badge className="self-start">
                    {project.category === 'E-commerce' && <ShoppingCart className="mr-1 h-3 w-3" />}
                    {project.category === 'Portfolio' && <Globe className="mr-1 h-3 w-3" />}
                    {project.category === 'Mobile App' && <Smartphone className="mr-1 h-3 w-3" />}
                    {project.category === 'Web Application' && <Globe className="mr-1 h-3 w-3" />}
                    {project.category}
                  </Badge>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-8">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) paginate(currentPage - 1);
                    }}
                  />
                </PaginationItem>
                {[...Array(totalPages)].map((_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink 
                      href="#" 
                      isActive={currentPage === index + 1}
                      onClick={(e) => {
                        e.preventDefault();
                        paginate(index + 1);
                      }}
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                {totalPages > 5 && currentPage < totalPages - 2 && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}
                <PaginationItem>
                  <PaginationNext 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages) paginate(currentPage + 1);
                    }}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </main>
      </div>
    </div>
  )
}