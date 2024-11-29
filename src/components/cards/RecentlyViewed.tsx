"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
interface Post {
    id: string
    title: string
    image: string
    alt: string
    time: string
}
interface RecentlyViewedProps {
    apidata: any;
    page_title: string;
    path:string;
}
export const RecentlyViewed = ({ apidata, page_title,path }: RecentlyViewedProps) => {
    const [recentlyViewed, setRecentlyViewed] = useState<Post[]>([])

    useEffect(() => {
        // Load recently viewed posts from localStorage
        const storedPosts = localStorage.getItem('recentlyViewedPosts')
        const parsedPosts: Post[] = storedPosts ? JSON.parse(storedPosts) : []
        setRecentlyViewed(parsedPosts)

        // Add current post to recently viewed
        const currentPost = {
            id: apidata?.slug,
            title: apidata?.title,
            image: apidata?.feature_image?.path,
            alt: apidata?.feature_image?.altText || 'Karnalwebtech',
            time: apidata?.createdAt,
        }

        const updatedPosts = [currentPost, ...parsedPosts.filter(post => post.id !== currentPost.id)]
        const limitedPosts = updatedPosts.slice(0, 4) // Keep only the 3 most recent

        // Update state and localStorage
        setRecentlyViewed(limitedPosts)
        localStorage.setItem('recentlyViewedPosts', JSON.stringify(limitedPosts))
    }, [apidata])

    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>{page_title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {recentlyViewed?.map((item: Post,) => (
                        <div key={item.id} className="flex gap-2">
                            <Image
                                src={item?.image}
                                alt={item?.alt || "karnalwebtech"}
                                width={60}
                                height={60}
                                priority
                                className="rounded-lg object-cover bg-cover"
                                style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
                            />
                            <div>
                                <Link href={`/${path}/${item.id}`}>
                                    <h3 className="text-sm font-medium">{item?.title}</h3>
                                </Link>
                                <p className="text-xs text-muted-foreground">{item?.time}</p>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    )
}
