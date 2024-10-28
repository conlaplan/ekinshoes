import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
import { AlignJustify, User } from "lucide-react"
import Link from "next/link"

export function MenuMobile() {
    return (
        <div className="lg:hidden ">
            <Sheet >
                <SheetTrigger asChild>
                    {/* <Button variant="outline"> */}
                    <AlignJustify className="cursor-pointer" />
                    {/* </Button> */}
                </SheetTrigger>
                <SheetContent className="bg-white">
                    <SheetHeader>
                        <Link href='/auth/login' className="flex justify-center">
                            <User className=" mr-2" />
                            <p className=" font-bold">ĐĂNG NHẬP</p>
                        </Link>
                        <SheetTitle></SheetTitle>
                        <SheetDescription>

                        </SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input id="name" value="Pedro Duarte" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Username
                            </Label>
                            <Input id="username" value="@peduarte" className="col-span-3" />
                        </div>

                    </div>
                    <SheetFooter>
                        <SheetClose asChild>

                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    )
}
