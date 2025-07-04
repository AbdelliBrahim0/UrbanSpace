"use client"

import { Navbar } from "@/components/navbar"
import { MobileNavigation } from "@/components/mobile/mobile-navigation"
import { usePathname } from "next/navigation"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHome = pathname === "/"
  return (
    <div className="relative">
      {!isHome && <Navbar />}
      {children}
      {!isHome && <MobileNavigation />}
    </div>
  )
} 