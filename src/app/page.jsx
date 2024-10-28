import { Content } from "@/components/Content";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SlideShow } from "@/components/SlideShow";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <SlideShow/>
      <Content/>
    </div>
  );
}
