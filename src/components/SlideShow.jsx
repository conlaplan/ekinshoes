"use client"
import * as React from "react"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"
import { cn } from "@/lib/utils"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function SlideShow(){
    return(
              
        <div className="w-full justify-center pt-16 lg:pt-20">
            <Carousel 
                plugins={[
                    Autoplay({
                      delay: 2000,
                      stopOnInteraction: false
                    })
                ]}
            >
                <CarouselContent>
                    <CarouselItem>
                        <Link href="#">
                            <Image src="/images/Slide1.png" width={1920} height={1080} className="w-full h-auto"/>
                        </Link>
                    </CarouselItem>
                    <CarouselItem>
                        <Link href="#">
                            <Image src="/images/Slide1.png" width={1920} height={1080} className="w-full h-auto"/>
                        </Link>
                    </CarouselItem>
                    <CarouselItem>
                        <Link href="#">
                            <Image src="/images/Slide1.png" width={1920} height={1080} className="w-full h-auto"/>
                        </Link>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    )
}