'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useGetAllPortfolioQuery } from '@/state/portfolioApi'
import PortfolioCard from '@/components/cards/PortfolioCard'
import Postsidebar from '@/module/layout/sidebar/post-sidebar'
import { usePostSidebar } from '@/hook/usePostSidebar'
import { BlogFooter } from '../layout/footer/blog-footer'
import SkeletonPostCard from '@/components/skeleton/skeleton-post-card'

export default function Index() {
  const [selectedCategories,
    setSelectedCategories] = useState([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [perPage, setPerPage] = useState<number>(6)
  const { data, isLoading } = useGetAllPortfolioQuery({
    categorie: selectedCategories.length > 0 ? selectedCategories.join(',') : undefined,
    rowsPerPage: perPage,
    page: currentPage,
  });
  const { data: postApiData } = data || {};
  const {
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    filterApiData,
  } = usePostSidebar({ postApiData: postApiData?.result });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Projects</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <Postsidebar searchQuery={searchQuery}
          setSearchQuery={setSearchQuery} selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
        <main className="lg:w-3/4">
          <div className="grid gap-6 lg:grid-cols-3">
            {
              isLoading ? [...Array(perPage)].map((_: any, i: number) => <SkeletonPostCard key={i} />) :

                filterApiData?.map((project: any) => (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    className="w-full max-w-sm mx-auto"
                  >
                    <PortfolioCard item={project} />
                  </motion.div>
                ))}
          </div>
          <div className="mt-8">
            <BlogFooter
              currentPage={currentPage}
              totalPages={postApiData?.resultPerPage}
              setCurrentPage={setCurrentPage}
              data_length={postApiData?.dataCounter}
              perPage={perPage}
              setPerPage={setPerPage}
            />
          </div>
        </main>
      </div>
    </div>
  )
}