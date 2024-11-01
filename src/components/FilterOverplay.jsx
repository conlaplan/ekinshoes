import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import FilterBar from "./FilterBar"
import { Button } from "./ui/button"


export default function FilterOverplay() {
    return (
        <Sheet>
            <SheetTrigger>Bộ lọc</SheetTrigger>
            <SheetContent side='left' className='bg-white'>
                <SheetHeader className="h-full flex flex-col justify-between">
                    <SheetDescription >
                        <div className="mt-10">
                            <FilterBar />
                        </div>

                        {/* <Button className="w-[100px] text-base font-bold border-[2px] border-slate-700 rounded bg-black text-white
                         hover:text-black transition duration-200 ease-linear"
                        >
                            Lọc
                        </Button> */}
                    </SheetDescription>
                    <Button
                        className='bg-black text-white py-6 font-bold text-base rounded
                    hover:border-[2px] hover:border-black hover:text-black transition duration-200 ease-linear'
                        size='lg'
                    >
                        Lọc sản phẩm
                    </Button>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}
