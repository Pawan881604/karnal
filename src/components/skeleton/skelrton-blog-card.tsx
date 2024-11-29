import React from 'react'
import { Skeleton } from '../ui/skeleton'

const SkeletonBlogCard = () => {
    return (
        <div className="space-y-4 mb-4">
            <Skeleton className="h-[400px] bg-gray-300 w-full rounded-lg" />
            <div className="space-y-2">
                <Skeleton className="h-8 bg-gray-300 w-3/4" />
                <Skeleton className="h-4 bg-gray-300 w-full" />
                <Skeleton className="h-4 bg-gray-300 w-full" />
            </div>
            <div className="flex items-center space-x-4">
                <Skeleton className="h-10 bg-gray-300 w-10 rounded-full" />
                <Skeleton className="h-4 bg-gray-300 w-24" />
                <Skeleton className="h-4 bg-gray-300 w-24" />
            </div>
            <Skeleton className="h-10 bg-gray-300 w-32" />
        </div>

    )
}

export default SkeletonBlogCard