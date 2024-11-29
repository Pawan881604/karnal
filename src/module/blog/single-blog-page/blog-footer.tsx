import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ShareButtons } from '@/components/common/ShareButtons/ShareButtons';
import { apiUrl } from '@/state/postApi';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
interface BlogfooterProps {
    apidata: any;
}
const Blogfooter: React.FC<BlogfooterProps> = ({ apidata }) => {
    return (
        <>
            <ShareButtons shareUrl={`${apiUrl}/blog/${apidata?.slug}`} shareText={apidata?.title} />
            <div className='flex gap-2'>
                {apidata?.tag?.map((tech: any) => (
                    <Link key={tech._id} href={`/tag/${tech?.slug}`}>
                        <Badge variant="outline" >{tech?.title}</Badge>
                    </Link>
                ))}
            </div>
            {/* Related Articles */}
            <section className="grid gap-4 pt-6 md:grid-cols-3">
                <Card>
                    <CardHeader className="space-y-0 p-4">
                        <CardTitle className="text-sm">About The Author</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                        <p className="text-xs text-muted-foreground">
                            Written by {apidata?.audit_log?.name}
                        </p>
                    </CardContent>
                </Card>
            </section>
        </>
    )
}

export default Blogfooter