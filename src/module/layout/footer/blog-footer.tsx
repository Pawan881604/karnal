import React from 'react'
import ShadcnPagination from '../../../components/common/pagination'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
interface footerProps {
    currentPage: number;
    totalPages: number;
    setCurrentPage: (page: number) => void;
    data_length: number;
    perPage: any,
    setPerPage: any
}
export const BlogFooter: React.FC<footerProps> = ({
    currentPage,
    totalPages,
    setCurrentPage,
    perPage,
    setPerPage,
    data_length, }) => {
    return (
        <div className='flex gap-2 justify-center items-center'>
            <div>
                {data_length > Number(totalPages) &&
                    <ShadcnPagination
                        currentPage={currentPage}
                        totalPages={Number(totalPages)}
                        setCurrentPage={setCurrentPage}
                        data_length={Number(data_length)}
                    />
                }
            </div>
            <div>
                <p>Row per page</p>
                <Select value={perPage} onValueChange={setPerPage}>
                    <SelectTrigger className="w-[100px]">
                        <SelectValue placeholder="No: rows" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="5">5</SelectItem>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="25">25</SelectItem>
                        <SelectItem value="50">50</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}
