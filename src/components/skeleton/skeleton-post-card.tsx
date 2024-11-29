import React from 'react'
import { Skeleton } from '../ui/skeleton'

const SkeletonPostCard = () => {
    return (
        <div className="flex flex-col space-y-3">
            <Skeleton className="h-[380px] bg-gray-200 rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-4  bg-gray-200 w-[250px]" />
                <Skeleton className="h-4  bg-gray-200 w-[200px]" />
            </div>
        </div>
    )
}

export default SkeletonPostCard