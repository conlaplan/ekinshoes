"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { AlignJustify, Heart, Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MenuMobile } from "@/components/MenuMobile";


const brands = [
    {
        title: "Nike",
        href: "/brands/nike",
        description:
            "Nike là một thương hiệu nổi tiếng với các sản phẩm thể thao và thời trang. Trang này cung cấp thông tin và các sản phẩm liên quan đến Nike.",
        url: "/images/brands/nike.png"
    },
    {
        title: "Adidas",
        href: "/brands/adidas",
        description:
            "Adidas là một thương hiệu hàng đầu trong ngành thể thao và thời trang. Trang này giới thiệu các sản phẩm và thông tin về Adidas.",
        url: "/images/brands/adidas.png"
    },
    {
        title: "Puma",
        href: "/brands/puma",
        url: "/images/brands/puma.png",
        description:
            "Puma cung cấp các sản phẩm thể thao và thời trang chất lượng cao. Trang này chứa thông tin về các sản phẩm và tin tức mới nhất từ Puma.",
    },
    {
        title: "Yonex",
        href: "/brands/yonex",
        url: "/images/brands/yonex.png",
        description: "Jordan là một thương hiệu nổi tiếng với các sản phẩm thể thao và thời trang, đặc biệt là giày thể thao. Trang này cung cấp thông tin về các sản phẩm và lịch sử của thương hiệu Jordan.",
    },
    {
        title: "Converse",
        href: "/brands/converse",
        url: "/images/brands/converse.png",
        description:
            "Converse là thương hiệu nổi tiếng với các mẫu giày thể thao và trang phục. Trang này cung cấp các sản phẩm và thông tin liên quan đến Converse.",
    }
];


export function Header() {
    return (
        <header className="bg-white shadow-sm px-2 top-0 left-0 right-0 z-50 sticky">
            <div className="flex items-center p-2 container justify-between">
                <div className="items-center pl-5 hidden md:flex">
                    <Search />
                    <Input type="text" placeholder="Bạn đang tìm kiếm gì?" className="h-7 border-none	text-stone-400" />
                </div>
                <div className="flex flex-col items-center">
                    <Link href="/"><Image src="/images/ekin_logo.jpg" width={1920} height={1080} priority alt="Logo Image" className="w-[150px] h-auto" /></Link>
                    <div className="hidden lg:block pt-3">
                        <NavigationMenu>
                            <NavigationMenuList>
                                {/* Trang chủ */}
                                <NavigationMenuItem>
                                    <Link href="/" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            <div className="transition-transform duration-300 transform hover:scale-105">Trang chủ</div>
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>

                                {/* Thương hiệu */}
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger><Link href="/shoes/brands" className="transition-transform duration-300 transform hover:scale-105">Thương hiệu</Link></NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[600px] bg-white">
                                            {brands.map((component) => (
                                                <ListItem
                                                    key={component.title}
                                                    title={component.title}
                                                    href={component.href}
                                                    url={component.url}
                                                >
                                                    {component.description}
                                                </ListItem>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                {/* Giày nam*/}
                                <NavigationMenuItem>
                                    <Link href="/shoes/men" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            <div className="transition-transform duration-300 transform hover:scale-105">Giày nam</div>
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>

                                {/* Giày nữ */}
                                <NavigationMenuItem>
                                    <Link href="/shoes/women" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            <div className="transition-transform duration-300 transform hover:scale-105">Giày nữ</div>
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>

                                {/* Liên hệ */}
                                <NavigationMenuItem>
                                    <Link href="/contact" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            <div className="transition-transform duration-300 transform hover:scale-105">Liên hệ</div>
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>
                <div className="flex items-center gap-5 pr-5">
                    <Link href="/search" className="md:hidden">
                        <Search />
                    </Link>
                    <Link href="/wishlist">
                        <Heart />
                    </Link>
                    <Link href="/cart">
                        <ShoppingCart />
                    </Link>
                    <Link href='/auth/login' className="hidden lg:block">
                        <Button className="border-[2px] border-slate-700 rounded hover:bg-black hover:text-white transition duration-200 ease-linear">Đăng nhập</Button>
                    </Link>
                    <MenuMobile />
                </div>
            </div>
        </header>
    )
}

const ListItem = ({ className, title, children, url, ...props }) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    className={cn(
                        "block select-none space-y-1 rounded p-3 leading-none no-underline outline-none transition-colors hover:text-accent-foreground hover:bg-slate-100 focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="flex items-center gap-2 h-[40px]">
                        {url &&
                            <Image src={url} alt={`${title} Logo`} width={40} height={40} className="rounded-[2px] w-auto h-auto" />
                        }
                        <p className="text-base font-semibold leading-none">{title}</p>
                    </div>
                </a>
            </NavigationMenuLink>
        </li>
    )
}

ListItem.displayName = "ListItem"
