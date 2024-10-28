"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "./ui/button"
import Image from "next/image"


export function Content() {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="text-base py-2 md:text-xl lg:text-3xl text-center font-bold md:py-5">THƯƠNG HIỆU</div>
            <div className="flex justify-center">
                <Tabs defaultValue="nike">
                    <TabsList className="flex">
                        <TabsTrigger value="nike" className="tabs-trigger">NIKE</TabsTrigger>
                        <TabsTrigger value="adidas" className="tabs-trigger">ADIDAS</TabsTrigger>
                        <TabsTrigger value="puma" className="tabs-trigger">PUMA</TabsTrigger>
                        <TabsTrigger value="yonex" className="tabs-trigger">YONEX</TabsTrigger>
                        <TabsTrigger value="converse" className="tabs-trigger">CONVERSE</TabsTrigger>
                    </TabsList>
                    <TabsContent value="nike">
                        <div className="container-tabscontent">
                            <div className="flex flex-col justify-center">
                                <Image src="/images/Slide1.png" width={1920} height={1080} className="image-tabscontent" />
                                abc
                            </div>
                            <div className="flex flex-col justify-center">
                                <Image src="/images/Slide1.png" width={1920} height={1080} className="image-tabscontent" />
                                abc
                            </div>
                            <div className="flex flex-col justify-center">
                                <Image src="/images/Slide1.png" width={1920} height={1080} className="image-tabscontent" />
                                abc
                            </div><div className="flex flex-col justify-center">
                                <Image src="/images/Slide1.png" width={1920} height={1080} className="image-tabscontent" />
                                abc
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="adidas">
                        <div className="container-tabscontent">
                            <div className="flex flex-col justify-center">
                                <Image src="/images/Slide1.png" width={1920} height={1080} className="image-tabscontent" />
                                abcd
                            </div>
                            <div className="flex flex-col justify-center">
                                <Image src="/images/Slide1.png" width={1920} height={1080} className="image-tabscontent" />
                                abcd
                            </div><div className="flex flex-col justify-center">
                                <Image src="/images/Slide1.png" width={1920} height={1080} className="image-tabscontent" />
                                abcd
                            </div><div className="flex flex-col justify-center">
                                <Image src="/images/Slide1.png" width={1920} height={1080} className="image-tabscontent" />
                                abcd
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="puma">
                        <div className="container-tabscontent">
                            <div className="flex flex-col justify-center">
                                <Image src="/images/Slide1.png" width={1920} height={1080} className="image-tabscontent" />
                                abcde
                            </div>
                            <div className="flex flex-col justify-center">
                                <Image src="/images/Slide1.png" width={1920} height={1080} className="image-tabscontent" />
                                abcde
                            </div><div className="flex flex-col justify-center">
                                <Image src="/images/Slide1.png" width={1920} height={1080} className="image-tabscontent" />
                                abcde
                            </div><div className="flex flex-col justify-center">
                                <Image src="/images/Slide1.png" width={1920} height={1080} className="image-tabscontent" />
                                abcde
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="yonex">
                        <div className="container-tabscontent">
                            <div className="flex flex-col justify-center">
                                <Image src="/images/Slide1.png" width={1920} height={1080} className="image-tabscontent" />
                                ab
                            </div>
                            <div className="flex flex-col justify-center">
                                <Image src="/images/Slide1.png" width={1920} height={1080} className="image-tabscontent" />
                                ab
                            </div><div className="flex flex-col justify-center">
                                <Image src="/images/Slide1.png" width={1920} height={1080} className="image-tabscontent" />
                                ab
                            </div><div className="flex flex-col justify-center">
                                <Image src="/images/Slide1.png" width={1920} height={1080} className="image-tabscontent" />
                                ab
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="converse">
                        <div className="container-tabscontent">
                            <div className="flex flex-col justify-center">
                                <Image src="/images/Slide1.png" width={1920} height={1080} className="image-tabscontent" />
                                ac
                            </div>
                            <div className="flex flex-col justify-center">
                                <Image src="/images/Slide1.png" width={1920} height={1080} className="image-tabscontent" />
                                ac
                            </div><div className="flex flex-col justify-center">
                                <Image src="/images/Slide1.png" width={1920} height={1080} className="image-tabscontent" />
                                ac
                            </div><div className="flex flex-col justify-center">
                                <Image src="/images/Slide1.png" width={1920} height={1080} className="image-tabscontent" />
                                ac
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
            <div className="py-5">
                <Button className="w-[200px] text-xl font-bold border-[2px] border-slate-700 rounded bg-black text-white hover:text-black transition duration-200 ease-linear">MUA NGAY</Button>
            </div>
            <div className="flex flex-wrap w-full pb-5">
                <div className="md:w-6/12">
                    <Image src="/images/Slide1.png" width={1920} height={1080} className="w-full h-auto" />
                </div>
                <div className="flex w-full md:w-6/12 justify-center items-center">
                    <div>ABC</div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 mb-4">
                <Link href="#" className="flex items-center"><Image src="/images/brands/adidas.png" width={1920} height={1080} className="w-[100px] h-auto" /></Link>
                <Link href="#" className="flex items-center"><Image src="/images/brands/converse.png" width={1920} height={1080} className="w-[100px] h-auto" /></Link>
                <Link href="#" className="flex items-center"><Image src="/images/brands/nike.png" width={1920} height={1080} className="w-[100px] h-auto" /></Link>
                <Link href="#" className="flex items-center"><Image src="/images/brands/puma.png" width={1920} height={1080} className="w-[100px] h-auto" /></Link>
                <Link href="#" className="flex items-center"><Image src="/images/brands/yonex.png" width={1920} height={1080} className="w-[100px] h-auto" /></Link>
            </div>
        </div>
    )
}