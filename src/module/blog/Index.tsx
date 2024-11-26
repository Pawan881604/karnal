'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Calendar, User, Tag, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('')

  const blogPosts = [
    {
      title: "10 Essential Web Design Trends for 2023",
      excerpt: "Discover the cutting-edge design trends that are shaping the web in 2023. From immersive 3D elements to innovative color schemes, learn how to keep your website ahead of the curve.",
      date: "2023-05-15",
      author: "Alex Johnson",
      category: "Design",
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      title: "The Future of JavaScript: What's Coming in ES2023",
      excerpt: "Explore the exciting new features and improvements coming to JavaScript in the ES2023 specification. Get ready to enhance your coding skills with these powerful additions to the language.",
      date: "2023-05-10",
      author: "Samantha Lee",
      category: "Development",
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      title: "Optimizing Website Performance: A Comprehensive Guide",
      excerpt: "Learn the best practices and techniques to significantly improve your website's loading speed and overall performance. From image optimization to caching strategies, this guide covers it all.",
      date: "2023-05-05",
      author: "Michael Chen",
      category: "Performance",
      image: "/placeholder.svg?height=200&width=400"
    }
  ]

  const categories = [
    "Design",
    "Development",
    "Performance",
    "SEO",
    "Accessibility",
    "UX/UI"
  ]

  const recentPosts = [
    "The Rise of AI in Web Development",
    "Creating Accessible Websites: A Beginner's Guide",
    "5 SEO Mistakes to Avoid in 2023"
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Blog</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <main className="lg:w-2/3">
          {blogPosts.map((post, index) => (
            <Card key={index} className="mb-8">
              <CardContent className="p-0">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              </CardContent>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={post.author} />
                    <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{post.author}</p>
                    <p className="text-sm text-muted-foreground">
                      <Calendar className="inline-block w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <Badge>{post.category}</Badge>
              </CardFooter>
              <CardFooter>
                <Button variant="outline">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </main>
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
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <Badge key={index} variant="secondary">
                    <Tag className="mr-1 h-3 w-3" />
                    {category}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recent Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {recentPosts.map((post, index) => (
                  <li key={index}>
                    <Link href="#" className="text-sm hover:underline">
                      {post}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  )
}