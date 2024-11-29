import React from 'react'
import { Skeleton } from '../ui/skeleton'

const SkeletonLinesCard = ({ perPage,height=2 }: { perPage: number,height:number }) => {
    return (
        <div className={`flex flex-col space-y-[8px]`}>
            {[...Array(perPage)].map((_, i) =>
                <Skeleton key={i}
                    className={`h-${height} bg-gray-200 ${i % 2 === 0 ? 'w-[100%]' : 'w-[90%]'
                        }`} // Apply width based on even or odd index
                />
            )}
        </div>)
}

export default SkeletonLinesCard