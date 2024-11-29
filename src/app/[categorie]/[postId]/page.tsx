import { fetchData } from "@/lib/api";
import BlogPage from "@/module/blog/single-blog-page";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React, { cache, memo } from "react";

interface SlugPageProps {
  params: {
    postId: string;
    categorie: string;
  };
}

export async function generateMetadata({
  params: { postId, categorie },
}: SlugPageProps): Promise<Metadata> {
  try {
    const { data } = await fetchData(`post/blog/${postId}`);

    return {
      title: data?.title || "Default Title",
      description: data?.meta_description || "Default Description",
      openGraph: {
        images: [{ url: data?.canonical_url || "/default-image.jpg" }],
      },
    };
  } catch {
    return {
      title: "Default Title",
      description: "Default Description",
    };
  }
}
const MemoizedBlogPage = memo(BlogPage);
export default async function Blog({
  params: { postId, categorie },
}: SlugPageProps) {
  const { data } = await fetchData(`post/blog/${postId}`);
  console.log(categorie.toLowerCase());
  console.log(data?.categorie[0]?.title?.toLowerCase());
  if (categorie.toLowerCase() !== data.categorie[0].title.toLowerCase()) {
    notFound(); // Trigger 404 if category doesn't match
  }
  return (
    <div>
      <MemoizedBlogPage apidata={data} />
    </div>
  );
}
