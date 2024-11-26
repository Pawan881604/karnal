import { apiUrl, useGetSingleQuery } from "@/state/postApi";
import { Metadata } from "next";
import React, { cache } from "react";

interface SlugPageProps {
  params: {
    postId: string;
  };
}
// const getPost = cache(async(postId:string)=>{
//   const post = await prisma.post.
// })
export async function generateMetadata({
  params: { postId },
}: SlugPageProps): Promise<Metadata> {
  const response = await fetch(`${apiUrl}/v2/post/blog/${postId}`);
  const {data}: any = await response.json();
  return {
    title: data.seo.title,
    description:data.seo.meta_description,
    openGraph:{
      images:[
        {
          url:data.seo.canonical_url,
        }
      ]
    }
  };
}

export default async function Blog({ params:{postId} }: SlugPageProps) {
  
  const response = await fetch(`${apiUrl}/v2/post/blog/${postId}`);
  const post: any = await response.json();
  console.log(post)
  return (
    <div>
      <h1>{postId}</h1>
    </div>
  );
}
