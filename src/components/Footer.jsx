"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'

export function Footer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8 bg-slate-50">
            <div className="flex flex-col justify-start text-xs w-1/2 md:w-3/4 text-justify">
                <div className="text-sm md:text-base font-bold pb-4">THÔNG TIN CHỦ SỞ HỮU CÔNG TY</div>
                <div className=" pb-5">
                    <div className=" font-bold pb-2">CÔNG TY TNHH MTV ASH VIỆT NAM</div>
                    <div>
                        <p className=" md:leading-6">Giấy Chứng nhận đăng ký kinh doanh số 0317034047 do Sở Kế hoạch Đầu tư TP. HCM cấp ngày 17/11/2021.</p>
                    </div>
                </div>
                <div className=" pb-5">
                    <div className=" font-bold pb-2">Giới thiệu về ASH</div>
                    <div>
                        <p className=" md:leading-6">Địa chỉ trụ sở: Phòng 909 Tầng 9, Mapletree Business Center 1060 Nguyễn Văn Linh, Phường Tân Phong, Quận 7, Thành Phố Hồ Chí Minh, Việt Nam</p>
                    </div>
                </div>
                <div className=" pb-5">
                    <div className=" font-bold pb-2">Email: <span className=" font-normal">hello@ash.vn</span></div>
                    <div className=" font-bold">Hotline: <span className=" font-normal">(+84) 988 423 453 (Thứ 2 - Thứ 6 | 8h30 - 17h30)</span></div>
                    <div>
                        <p></p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="flex flex-col items-center md:items-start flex-grow">
                    <div className=" font-bold pb-4">CHÍNH SÁCH</div>
                    <div className="flex flex-col text-xs md:text-sm gap-3">
                        <Link href="#" className="link-hover-footer">ƯU ĐÃI THÀNH VIÊN ASH</Link>
                        <Link href="#" className="link-hover-footer">Chính Sách Thanh Toán</Link>
                        <Link href="#" className="link-hover-footer">Chính Sách Vận Chuyển</Link>
                        <Link href="#" className="link-hover-footer">Chính Sách Đổi Trả</Link>
                        <Link href="#" className="link-hover-footer">Chính Sách Xuất Hóa Đơn Điện Tử</Link>
                        <Link href="#" className="link-hover-footer">Chính Sách Thanh Toán B2B</Link>
                        <Link href="#" className="link-hover-footer">Chính Sách Bảo Mật</Link>
                        <Link href="#" className="link-hover-footer">Điều Khoản & Điều Kiện</Link>
                    </div>
                </div>
                <div className="flex flex-col items-center md:items-start flex-grow">
                    <div className=" font-bold pb-4">HỖ TRỢ KHÁCH HÀNG</div>
                    <div className="flex flex-col text-xs md:text-sm gap-3">
                        <Link href="#" className="link-hover-footer">Hướng Dẫn Đặt Hàng</Link>
                        <Link href="#" className="link-hover-footer">Hướng Dẫn Tạo Tài Khoản</Link>
                        <Link href="#" className="link-hover-footer">Kiểm Tra Đơn Hàng</Link>
                        <Link href="#" className="link-hover-footer">Thông Tin Liên Hệ</Link>
                        <Link href="#" className="link-hover-footer">Help and FAQs</Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-start">
                <div className="text-sm md:text-base font-bold pb-4">KẾT NỐI VỚI CHÚNG TÔI</div>
                {/* <table className=" border border-collapse">
                    <tbody>
                        <tr>
                            <td>
                                <Link href="#" className="hover:bg-slate-800 p-4 hover-icon">
                                    <FontAwesomeIcon icon={faFacebookF} size="lg" className="text-black" />
                                </Link>
                            </td>
                            <td className="border hover:bg-slate-800 p-4 hover-icon">
                                <Link href="#">
                                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                                </Link>
                            </td>
                            <td className="border hover:bg-slate-800 p-4 hover-icon">
                                <Link href="#">
                                    <FontAwesomeIcon icon={faTiktok} size="lg" />
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table> */}
                <div className="flex items-center border border-slate-300 h-14">
                    <Link href="#" className="flex items-center justify-center hover:bg-slate-800 hover-icon w-14 h-full ">
                        <FontAwesomeIcon icon={faFacebookF} size="lg" className="text-black" />
                    </Link>
                    <p className="h-full w-[1px] bg-slate-300"></p>
                    <Link href="#" className="flex items-center justify-center hover:bg-slate-800 hover-icon w-14 h-full ">
                        <FontAwesomeIcon icon={faInstagram} size="lg" className="text-black" />
                    </Link>
                    <p className="h-full w-[1px] bg-slate-300"></p>
                    <Link href="#" className="flex items-center justify-center hover:bg-slate-800 hover-icon w-14 h-full">
                        <FontAwesomeIcon icon={faTiktok} size="lg" className="text-black" />
                    </Link>
                </div>
            </div>
        </div>
    )
}