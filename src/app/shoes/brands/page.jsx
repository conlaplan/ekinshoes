import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import Link from 'next/link'
import React from 'react'

export default function ShoesBrands() {
    return (
        <div className='pt-32 text-xs'>
            <div className='flex gap-1 p-4'>
                <Link href="/">Trang chủ</Link>
                /
                <p>TẤT CẢ SẢN PHẨM</p>
            </div>
            <div className="p-4">
                <Accordion type="multiple" collapsible className="w-1/6">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="hover:no-underline">THƯƠNG HIỆU</AccordionTrigger>
                        <AccordionContent className="text-xs">
                            <div className="flex items-center py-1">
                                <Checkbox /><label className="pl-2">Adidas</label>
                            </div>
                            <div className="flex items-center py-1">
                                <Checkbox /><label className="pl-2">Converse</label>
                            </div>
                            <div className="flex items-center py-1">
                                <Checkbox /><label className="pl-2">Nike</label>
                            </div>
                            <div className="flex items-center py-1">
                                <Checkbox /><label className="pl-2">Puma</label>
                            </div>
                            <div className="flex items-center py-1">
                                <Checkbox /><label className="pl-2">Yonex</label>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="hover:no-underline">PHÁI</AccordionTrigger>
                        <AccordionContent className="text-xs">
                            <div className="flex items-center py-1">
                                <Checkbox /><label className="pl-2">Nam</label>
                            </div>
                            <div className="flex items-center py-1">
                                <Checkbox /><label className="pl-2">Nữ</label>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="hover:no-underline">GIÁ</AccordionTrigger>
                        <AccordionContent className="text-xs">
                            <div className="flex items-center py-1">
                                <Checkbox /><label className="pl-2">Adidas</label>
                            </div>
                            <div className="flex items-center py-1">
                                <Checkbox /><label className="pl-2">Converse</label>
                            </div>
                            <div className="flex items-center py-1">
                                <Checkbox /><label className="pl-2">Nike</label>
                            </div>
                            <div className="flex items-center py-1">
                                <Checkbox /><label className="pl-2">Puma</label>
                            </div>
                            <div className="flex items-center py-1">
                                <Checkbox /><label className="pl-2">Yonex</label>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}
