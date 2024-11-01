"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import Link from 'next/link'
import React from 'react'
import { useState } from "react";
import PriceSlider from "./PriceSlider"

export default function FilterBar() {
    return (
        <Accordion type="multiple" collapsible>
            <div className="border-t"></div>
            <AccordionItem value="item-1">
                <AccordionTrigger className="hover:no-underline font-bold">THƯƠNG HIỆU</AccordionTrigger>
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
                <AccordionTrigger className="hover:no-underline font-bold">LOẠI SẢN PHẨM</AccordionTrigger>
                <AccordionContent className="text-xs">
                    <div className="flex items-center py-1">
                        <Checkbox /><label className="pl-2">Giày</label>
                    </div>
                    <div className="flex items-center py-1">
                        <Checkbox /><label className="pl-2">Giày bóng đá</label>
                    </div>
                    <div className="flex items-center py-1">
                        <Checkbox /><label className="pl-2">Giày 1</label>
                    </div>
                    <div className="flex items-center py-1">
                        <Checkbox /><label className="pl-2">Giày 2</label>
                    </div>
                    <div className="flex items-center py-1">
                        <Checkbox /><label className="pl-2">Giày 3</label>
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="hover:no-underline font-bold">PHÁI</AccordionTrigger>
                <AccordionContent className="text-xs">
                    <div className="flex items-center py-1">
                        <Checkbox /><label className="pl-2">Nam</label>
                    </div>
                    <div className="flex items-center py-1">
                        <Checkbox /><label className="pl-2">Nữ</label>
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger className="hover:no-underline font-bold">GIÁ</AccordionTrigger>
                <AccordionContent className="text-xs items-center flex  justify-center">
                    <PriceSlider />
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}