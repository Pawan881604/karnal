"use client"
import React from 'react'

import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from 'lucide-react'
import { useGetAllCategorieQuery } from '@/state/categorieApi'
import SkeletonLinesCard from '@/components/skeleton/skeleton-lines-card'
interface PostsidebarProps {
    searchQuery: string;
    setSearchQuery: (value: string) => void;
    selectedCategories: any;
    setSelectedCategories: any;
    sortBy: any;
    setSortBy: any;
}
const Postsidebar = ({ searchQuery, setSearchQuery, selectedCategories, setSelectedCategories, sortBy,
    setSortBy }: PostsidebarProps) => {
    const { data, error, isLoading } = useGetAllCategorieQuery({
        type: "portfolio",
        rowsPerPage: 100,
        page: 1,
    });
    const { data: apiData } = data || {}

    return (
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
                        {isLoading ?  <SkeletonLinesCard perPage={7} /> :
                            apiData?.result?.map((category: any) => (
                                <div key={category._id} className="flex items-center space-x-2 mt-1">
                                    <Checkbox
                                        id={category._id}
                                        checked={selectedCategories.includes(category._id)}
                                        onCheckedChange={(checked) => {
                                            setSelectedCategories((prevSelected: string[]) =>
                                                checked
                                                    ? [...prevSelected, category._id]
                                                    : prevSelected.filter((id) => id !== category._id)
                                            );
                                        }}
                                    />
                                    <label
                                        htmlFor={category.title}
                                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        {category.title}
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
    )
}

export default Postsidebar