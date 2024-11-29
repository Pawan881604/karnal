'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useGetAllPostQuery } from '@/state/postApi'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import useFilteredAndSorted from '@/hook/useFilteredAndSorted'
import { BlogFooter } from '../layout/footer/blog-footer'
import Sidebar from '../layout/sidebar/blog-sidebar'
import SkeletonBlogCard from '@/components/skeleton/skelrton-blog-card'
export default function Index({ cat_id }: { cat_id: any }) {
  console.log(cat_id)
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [perPage, setPerPage] = useState<number>(6)

  const { data, error, isLoading } = useGetAllPostQuery({
    categorie: cat_id && cat_id,
    rowsPerPage: Number(perPage),
    page: currentPage,
  });

  const { data: apiData } = data || {};

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'az' | 'za' | 'latest'>('latest');

  const sortedProjects = useFilteredAndSorted({
    projects: apiData?.result,
    searchQuery,
    selectedCategories,
    sortBy,
  });


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Blog</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <main className="lg:w-2/3">
          {isLoading ? [...Array(perPage)].map((_: any, i: number) => <SkeletonBlogCard />) :
            sortedProjects.length === 0 ? (
              <div className="text-center">
                <p className="text-xl mb-4">There are no posts in this category yet.</p>
                <Link href="/blog" className="text-blue-500 hover:underline">
                  Return to blog page
                </Link>
              </div>
            ) :
              sortedProjects?.map((post: any, index: number) => (
                <Card key={index} className="mb-8 overflow-hidden">
                  <CardContent className="p-0">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link href={`/${post?.categorie[0]?.slug}/${post?.slug}`}>
                        <Image
                          src={post?.feature_image?.path}
                          alt={post?.feature_image?.altText || post?.title}
                          priority
                          width={600}
                          height={400}
                          className="w-full h-48 object-cover"
                        /></Link>
                    </motion.div>
                  </CardContent>
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={`/upload/avarat.png?height=40&width=40`} alt={post.author} />
                        <AvatarFallback>{post.audit_log?.name.split(' ').map((n: any) => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{post.audit_log?.name}</p>
                        <p className="text-sm text-muted-foreground">
                          <Calendar className="inline-block w-4 h-4 mr-1" />
                          {new Date(post.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <Badge>{post.category?.title}</Badge>
                  </CardFooter>
                  <CardFooter>
                    <Button variant="outline" onClick={() => router.push(`/${post?.categorie[0]?.slug}/${post?.slug}`)}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
        </main>
        <Sidebar searchQuery={searchQuery} setSearchQuery={setSearchQuery} apidata={apiData?.result} />

      </div>
      <BlogFooter
        currentPage={currentPage}
        totalPages={apiData?.rowsPerPage}
        setCurrentPage={setCurrentPage}
        data_length={apiData?.dataCounter}
        perPage={perPage}
        setPerPage={setPerPage}
      />
    </div>
  )
}