import Index from "@/module/constact-us/Index";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Contact us',
  description: 'Explore our portfolio of innovative projects across various industries.',
  openGraph: {
    title: 'Our Projects | Company Name',
    description: 'Explore our portfolio of innovative projects across various industries.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Our Projects' }],
  },
}

export default function ContactUs() {
  return(
    <div>
      <Index/>
    </div>
  )
}