"use client"
import FilterBar from "@/components/FilterBar"
import { SortCombobox } from "@/components/SortCombobox"
import Image from "next/image"
import Link from 'next/link'
import React from 'react'
import { useState } from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
    BreadcrumbEllipsis,
} from "@/components/ui/breadcrumb"
import FilterOverplay from "@/components/FilterOverplay"



export default function ShoesBrands() {
    const products = [
        { id: 1, name: "Giày thể thao A", price: 500000, image: "/images/brands/adidas.png", hoverImage: "/images/brands/nike.png" },
        { id: 2, name: "Giày cao gót B", price: 800000, image: "/images/brands/adidas.png", hoverImage: "/images/brands/adidas-hover.png" },
        { id: 3, name: "Giày sandal C", price: 300000, image: "/images/brands/adidas.png", hoverImage: "/images/brands/adidas-hover.png" },
        { id: 4, name: "Giày thể thao A", price: 500000, image: "/images/brands/adidas.png", hoverImage: "/images/brands/adidas-hover.png" },
        { id: 5, name: "Giày cao gót B", price: 800000, image: "/images/brands/adidas.png", hoverImage: "/images/brands/adidas-hover.png" },
        { id: 6, name: "Giày sandal C", price: 300000, image: "/images/brands/adidas.png", hoverImage: "/images/brands/adidas-hover.png" },
        { id: 7, name: "Giày thể thao A", price: 500000, image: "/images/brands/adidas.png", hoverImage: "/images/brands/adidas-hover.png" },
        { id: 8, name: "Giày cao gót B", price: 800000, image: "/images/brands/adidas.png", hoverImage: "/images/brands/adidas-hover.png" },
        { id: 9, name: "Giày sandal C", price: 300000, image: "/images/brands/adidas.png", hoverImage: "/images/brands/adidas-hover.png" },
        { id: 10, name: "Giày thể thao A", price: 500000, image: "/images/brands/adidas.png", hoverImage: "/images/brands/nike.png" },
        { id: 11, name: "Giày cao gót B", price: 800000, image: "/images/brands/adidas.png", hoverImage: "/images/brands/adidas-hover.png" },
        { id: 12, name: "Giày sandal C", price: 300000, image: "/images/brands/adidas.png", hoverImage: "/images/brands/adidas-hover.png" },
    ];
    return (
        <div className='text-xs'>
            <div className='flex gap-1 p-4'>
                <Link href="/" className=" hover:underline hover:font-bold">Trang chủ</Link>
                /
                <p>TẤT CẢ SẢN PHẨM</p>
            </div>
            <div className="w-full flex justify-center items-center p-10 text-xl font-bold">TẤT CẢ SẢN PHẨM</div>
            <div className="p-4 sm:hidden ">
                <FilterOverplay />

            </div>
            <div className="hidden sm:flex">
                <div className="w-1/6 pl-8 text-sm font-bold">
                    BỘ LỌC
                </div>
                <div className="w-5/6 pl-10 flex">
                    <div className=" flex-grow"></div>
                    <div className="pr-4 flex justify-center items-center">
                        <p className="text-slate-500">Sắp xếp theo:</p>
                        <SortCombobox />
                    </div>
                </div>
            </div>
            <div className="p-4 flex">
                <div className="w-1/6 hidden sm:block pl-4">
                    <FilterBar />
                </div>
                <div className="sm:w-5/6 flex flex-col items-center">
                    <div className="flex flex-wrap sm:justify-start sm:gap-10 sm:pl-10 justify-between gap-4">
                        {products.map(product => {
                            const [currentImage, setCurrentImage] = useState(product.image);
                            return (
                                <div key={product.id} className="border w-[190px] h-[250px] flex flex-col items-center justify-between">
                                    <Link href="#" className="w-full flex flex-col items-center ">
                                        <Image
                                            src={currentImage}
                                            width={1920}
                                            height={1080}
                                            className="w-full h-[150px]  transition-all duration-700"
                                            alt={product.name}
                                            onMouseEnter={() => setCurrentImage(product.hoverImage)}
                                            onMouseLeave={() => setCurrentImage(product.image)}
                                        />
                                        <div className="p-4">
                                            <p>{product.name}</p>
                                        </div>
                                    </Link>
                                    <div className="p-4">
                                        <p>Giá: {product.price.toLocaleString()} VNĐ</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="py-10">
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <Link href="#">1</Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbEllipsis />
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <Link href="#"></Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <Link href="#"></Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>

            </div>
        </div>
    )
}
