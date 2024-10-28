"use client"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import Link from "next/link"
import { useState } from "react";

export default function InputForm() {
  const form = useForm({
    defaultValues: {
      username: "",
    },
  })
  const [isEmailFocused, setisEmailFocused] = useState(false);
  const [isPasswordFocused, setisPasswordFocused] = useState(false);


  return (
    <div className="flex flex-col h-screen pb-10 lg:pb-0">
      <div className="flex flex-col justify-center items-center h-full pt-24 lg:pt-40">
        <div className="mt-0 mb-10 md:mb-15 text-center">
          <h1 className="text-3xl font-bold mb-3 md:mb-5">ĐĂNG NHẬP</h1>
          <p className="text-xs">Vui lòng nhập tài khoản email và mật khẩu của bạn</p>
        </div>
        <Form {...form}>
          <form className="w-3/4 md:w-1/2 lg:w-1/3" onSubmit={form.handleSubmit((data) => console.log(data))}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="md:mb-2">
                  <FormLabel className={`transition-opacity duration-300 ${isEmailFocused ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'} ease-in-out`}>Email</FormLabel>
                  <FormControl>
                    <Input placeholder={isEmailFocused ? "" : "Email"}
                      className={`md:h-16 md:p-5 border-slate-300 rounded transition-opacity duration-500 ${isEmailFocused ? 'border-slate-500 border-[1px]' : 'opacity-100 text-slate-500'}`}{...field}
                      onFocus={() => setisEmailFocused(true)}
                      onBlur={() => setisEmailFocused(false)} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="md:mb-2">
                  <FormLabel className={`transition-opacity duration-300 ${isPasswordFocused ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'} ease-in-out`}>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder={isPasswordFocused ? "" : "Password"}
                      className={`md:h-16 md:p-5 border-slate-300 rounded transition-opacity duration-500 ${isPasswordFocused ? 'border-slate-500 border-[1px]' : 'opacity-100 text-slate-500'}`}{...field}
                      onFocus={() => setisPasswordFocused(true)}
                      onBlur={() => setisPasswordFocused(false)} />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex justify-between items-center">
              <div className="flex-grow"></div>
              <Link href="/auth/forgot_password" className="text-xs underline underline-offset-2 hover:no-underline hover:font-bold">Quên mật khẩu?</Link>
            </div>
            <div className="flex justify-center my-2">
              <Button type="submit"
                className="w-full 
              border-[2px] border-slate-700 rounded
               hover:bg-black hover:text-white 
               transition duration-300 ease-linear 
               font-bold 
               md:h-16 md:p-5">
                ĐĂNG NHẬP
              </Button>
            </div>
            <div className="flex justify-center items-center mb-2 text-xs">
              <p className="mr-2">Bạn là khách hàng mới?</p>
              <Link href="/auth/register" className="underline underline-offset-2 hover:no-underline hover:font-bold">Tạo tài khoản mới</Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
