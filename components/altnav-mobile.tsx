"use client"

import { Menu } from "lucide-react"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { SecondMobilemenu } from "@/components/second-mobile-menu"
import { Sidebar } from "@/components/sidebar"

export const AltNavMobile = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4">
        <Menu />
      </SheetTrigger>
      <SheetContent side="right" className="p-0 bg-secondary pt-10 w-32">
        <SecondMobilemenu />
      </SheetContent>
    </Sheet>
  )
}
