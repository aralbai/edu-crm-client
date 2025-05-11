import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex overflow-hidden">
      {/* LEFT  */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] lg:p-4 overflow-y-scroll h-[100vh]">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold">EDU-CRM</span>
        </Link>

        <Menu />
      </div>

      {/* RIGHT  */}
      <div className="w-[86%] md:w-[92%] lg:w[84%] xl:w-[86%] bg-[#f7f8fa] overflow-y-scroll flex flex-col">
        <Navbar />

        {children}
      </div>
    </div>
  );
}
