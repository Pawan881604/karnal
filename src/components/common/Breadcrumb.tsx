import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link";
interface BreadcrumbdataProps {
    categorie: {
        title?: string;
        slug?: string;
    } | null;
}
export function Breadcrumbdata({ categorie }: BreadcrumbdataProps) {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <Link href={'/'}>
                        Home
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <Link href={`/${categorie?.slug}`}>
                        {categorie?.title}
                    </Link>

                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}
