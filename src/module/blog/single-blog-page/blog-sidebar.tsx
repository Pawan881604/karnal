import { RecentlyViewed } from '@/components/cards/RecentlyViewed';
import { RelatiedPost } from '@/components/cards/RelatiedPost';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { apiUrl } from '@/state/postApi';
interface BlogsSidebarProps {
    apidata: any
}
const Blogsidebar = async ({ apidata }: BlogsSidebarProps) => {

    const response = await fetch(`${apiUrl}/v2/post/store?rowsPerPage=4&page=1&categorie=67455565a8c44e237984700b`);
    const { data }: any = await response.json();

    return (

        <aside className="space-y-6" >
            <RelatiedPost data={data?.result} path={"blog"} page_title={"Related post"} />
            <RecentlyViewed apidata={apidata} path={"blog"} page_title={"Recently Viewed"} />
        </aside >
    )
}

export default Blogsidebar