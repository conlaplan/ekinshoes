"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const sorttype = [
    {
        value: "1",
        label: "Bán chạy nhất",
    },
    {
        value: "2",
        label: "Thứ tự bảng chữ cái (từ A-Z)",
    },
    {
        value: "3",
        label: "Thứ tự bảng chữ cái (từ Z-A)",
    },
    {
        value: "4",
        label: "Giá (từ thấp đến cao)",
    },
    {
        value: "5",
        label: "Giá (từ cao xuống thấp)",
    },
]

export function SortCombobox() {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="justify-between border-none text-xs font-normal"
                >
                    {value
                        ? sorttype.find((sorttype) => sorttype.value === value)?.label
                        : "Lựa chọn"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[230px] p-0 bg-white py-2">
                <Command>
                    <CommandList>
                        <CommandGroup>
                            {sorttype.map((sorttype) => (
                                <CommandItem
                                    className=" text-xs hover:cursor-pointer hover:font-bold"
                                    key={sorttype.value}
                                    value={sorttype.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === sorttype.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {sorttype.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
