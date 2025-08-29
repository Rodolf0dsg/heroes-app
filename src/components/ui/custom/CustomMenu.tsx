
import { NavigationMenuList } from '@radix-ui/react-navigation-menu'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink } from '../navigation-menu'
import { Link, useLocation } from 'react-router'
import { cn } from '@/lib/utils';

export const CustomMenu = () => {

    const { pathname } = useLocation();

    const isActive = (path: string) => {
        return pathname === path;
    }

    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild
                        className={ cn( isActive('/') && 'bg-slate-200', 'p-2  rounded-md') }
                    >
                        <Link to="/">Home</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink asChild
                        className={ cn( isActive('/search') && 'bg-slate-200', 'p-2  rounded-md') }
                    >
                        <Link to="/search">Search</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>


            </NavigationMenuList>
        </NavigationMenu>
    )
}

