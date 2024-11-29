import React from 'react'
import { RecentlyViewed } from '@/components/cards/RecentlyViewed';
import SkeletonLinesCard from '@/components/skeleton/skeleton-lines-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useGetAllCategorieQuery } from '@/state/categorieApi';
import { Search } from 'lucide-react';
import Link from 'next/link';
interface SidebarProps {
    searchQuery: string;
    setSearchQuery: (value: string) => void;
    apidata: any;
}
const Sidebar = ({ searchQuery, setSearchQuery, apidata }: SidebarProps) => {
    const { data, isLoading: CategorieLoading } = useGetAllCategorieQuery({
        type: "post",
        rowsPerPage: 100,
        page: 1,
    });
    const { data: categorieData } = data || {};
    return (
        <aside className="lg:w-1/3">
            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>Search</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="relative">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search blog posts..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-8"
                        />
                    </div>
                </CardContent>
            </Card>
            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent>
                    {CategorieLoading ? <SkeletonLinesCard perPage={7} height={3} /> :
                        categorieData?.result?.map((item: any) => (
                            <p> <Link href={item?.slug}>{item?.title}</Link></p>
                        ))}
                </CardContent>
            </Card>
            <RecentlyViewed apidata={apidata} path={"blog"} page_title={"Recently Viewed"} />
        </aside>
    )
}

export default Sidebar