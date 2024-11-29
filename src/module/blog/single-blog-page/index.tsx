import { Breadcrumbdata } from '@/components/common/Breadcrumb'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Facebook, Twitter } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Blogsidebar from './blog-sidebar'
import Blogfooter from './blog-footer'
interface BlogPageProps {
    apidata: any;
}
const BlogPage: React.FC<BlogPageProps> = ({ apidata }) => {
  
    return (
        <div className="max-w-[1180px] m-auto bg-background">
            {/* Header */}
            <div className="container flex h-16 items-center px-4">
                <Breadcrumbdata categorie={apidata?.categorie[0]} />
            </div>

            {/* Main Content */}
            <main className="container grid grid-cols-1 gap-6 px-4 py-6 md:grid-cols-3 lg:py-8">
                {/* Article Content */}
                <article className="col-span-1 space-y-6 md:col-span-2">
                    <h1 className="text-3xl font-bold tracking-tight">
                        {apidata?.title}
                    </h1>
                    <Image
                        src={`${apidata?.feature_image?.path}`}
                        alt={`${apidata?.altText || "karnal web tech"}`}
                        width={800}
                        height={300} // Updated height to 300
                        priority
                        className="rounded-lg object-cover bg-cover h-[350px]"
                        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
                    />
                    <div className="prose max-w-none dark:prose-invert">
                        <div
                            className="prose max-w-none dark:prose-invert"
                            dangerouslySetInnerHTML={{ __html: apidata?.content }}
                        />
                    </div>
                    <Blogfooter apidata={apidata}/>
                </article>
                <Blogsidebar apidata={apidata}/>

            </main>
        </div>
    )
}

export default BlogPage