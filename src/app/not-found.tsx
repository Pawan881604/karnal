import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto py-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Not Found</h2>
      <p className="mb-4">Sorry, the page you are looking for does not exist.</p>
      <p className="mb-4">This could be because:</p>
      <ul className="list-disc list-inside mb-4">
        <li>The category does not exist</li>
        <li>The post does not exist in this category</li>
        <li>The URL is incorrect</li>
      </ul>
      <Link href="/" className="text-blue-500 hover:underline">
        Return to Home
      </Link>
    </div>
  )
}

