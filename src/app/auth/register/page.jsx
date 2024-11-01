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
  const [isFirstNameFocused, setisFirstNameFocused] = useState(false);
  const [isLastNameFocused, setisLastNameFocused] = useState(false);
  const [isEmailFocused, setisEmailFocused] = useState(false);
  const [isPasswordFocused, setisPasswordFocused] = useState(false);
  const [isRePasswordFocused, setisRePasswordFocused] = useState(false);


  return (
    <div className="flex flex-col h-screen sm:h-full sm:pb-4">
      <div className="flex flex-col justify-center items-center h-full md:pt-10">
        <div className="mt-0 mb-5 text-center">
          <h1 className="text-3xl font-bold mb-3 md:mb-5">ĐĂNG KÝ</h1>
          <p className="text-xs">Xin điền thông tin vào các ô dưới đây</p>
        </div>
        <Form {...form}>
          <form className="w-3/4 md:w-1/2 lg:w-1/3" onSubmit={form.handleSubmit((data) => console.log(data))}>
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem className="md:mb-2">
                  <FormLabel className={`transition-opacity duration-300 ${isFirstNameFocused ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'} ease-in-out`}>Firstname</FormLabel>
                  <FormControl>
                    <Input placeholder={isFirstNameFocused ? "" : "Firstname"}
                      className={`md:p-5 border-slate-300 rounded transition-opacity duration-500 ${isFirstNameFocused ? 'border-slate-500 border-[1px]' : 'opacity-100 text-slate-500'}`}{...field}
                      onFocus={() => setisFirstNameFocused(true)}
                      onBlur={() => setisFirstNameFocused(false)} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem className="md:mb-2">
                  <FormLabel className={`transition-opacity duration-300 ${isLastNameFocused ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'} ease-in-out`}>Lastname</FormLabel>
                  <FormControl>
                    <Input placeholder={isLastNameFocused ? "" : "Lastname"}
                      className={`md:p-5 border-slate-300 rounded transition-opacity duration-500 ${isLastNameFocused ? 'border-slate-500 border-[1px]' : 'opacity-100 text-slate-500'}`}{...field}
                      onFocus={() => setisLastNameFocused(true)}
                      onBlur={() => setisLastNameFocused(false)} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="md:mb-2">
                  <FormLabel className={`transition-opacity duration-300 ${isEmailFocused ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'} ease-in-out`}>Email</FormLabel>
                  <FormControl>
                    <Input placeholder={isEmailFocused ? "" : "Email"}
                      className={`md:p-5 border-slate-300 rounded transition-opacity duration-500 ${isEmailFocused ? 'border-slate-500 border-[1px]' : 'opacity-100 text-slate-500'}`}{...field}
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
                      className={`md:p-5 border-slate-300 rounded transition-opacity duration-500 ${isPasswordFocused ? 'border-slate-500 border-[1px]' : 'opacity-100 text-slate-500'}`}{...field}
                      onFocus={() => setisPasswordFocused(true)}
                      onBlur={() => setisPasswordFocused(false)} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="repassword"
              render={({ field }) => (
                <FormItem className="md:mb-2">
                  <FormLabel className={`transition-opacity duration-300 ${isRePasswordFocused ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'} ease-in-out`}>Re-enter the password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder={isRePasswordFocused ? "" : "Re-enter the password"}
                      className={`md:p-5 border-slate-300 rounded transition-opacity duration-500 ${isRePasswordFocused ? 'border-slate-500 border-[1px]' : 'opacity-100 text-slate-500'}`}{...field}
                      onFocus={() => setisRePasswordFocused(true)}
                      onBlur={() => setisRePasswordFocused(false)} />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex justify-center my-2">
              <Button type="submit"
                className="w-full 
              border-[2px] border-slate-700 rounded
               hover:bg-black hover:text-white 
               transition duration-300 ease-linear 
               font-bold 
               md:h-16 md:p-5">
                ĐĂNG KÝ
              </Button>
            </div>
            <div className="flex justify-center items-center mb-2 text-xs">
              <p className="mr-2">Bạn đã có tài khoản?</p>
              <Link href="/auth/login" className="underline underline-offset-2 hover:no-underline hover:font-bold">Đăng nhập</Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
