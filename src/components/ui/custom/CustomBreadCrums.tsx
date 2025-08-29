import { Link } from "react-router";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SlashIcon } from "lucide-react";

interface Props {
    currentPage: string;
    breadCrums?:  Breadcrumb[];
}

interface Breadcrumb {
    label: string
    to:    string
}

export const CustomBreadCrums = ({currentPage, breadCrums}:Props) => {

    return(
    <Breadcrumb className="my-5">
        <BreadcrumbList>

            <BreadcrumbItem>
                <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                </BreadcrumbLink>
            </BreadcrumbItem>

            {
                breadCrums?.map( crumb => (
                    <div className="flex items-center">
                        <BreadcrumbSeparator>
                            <SlashIcon />
                        </BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link to={ crumb.to }>{ crumb.label }</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </div>
                ))
            }

            <BreadcrumbSeparator>
                <SlashIcon />
            </BreadcrumbSeparator>

            <BreadcrumbItem>
                <BreadcrumbLink className="text-black">
                    { currentPage }
                </BreadcrumbLink>
            </BreadcrumbItem>

        </BreadcrumbList>
    </Breadcrumb>
    )
}
