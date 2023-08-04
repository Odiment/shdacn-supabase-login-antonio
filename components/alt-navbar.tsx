"use client"

import { useEffect, useState } from "react"

export function AltNavbar() {
  const [active, setActive] = useState(false)

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", isActive)
    return () => {
      window.removeEventListener("scrooll", isActive)
    }
  }, [])

  return (
    <>
      <header
        className={
          "items-center flex-col sticky top-0 z-40 w-full bg-background" +
          (active ? " border-b border-t border-green-500" : "border-b ")
        }
      >
        {active && (
          <>
            <hr className="w-full h-0 border-solid border" />
            <div className="flex justify-between font-light text-gray-500 p2.5">
              <span>Kırpart</span>
              <span>Ürün Geliştirme</span>
              <span>Kilomerte Taşları</span>
              <span>Ürünler Proseler</span>
              <span>AR&GE</span>
              <span>Çözümler</span>
            </div>
          </>
        )}
      </header>
    </>
  )
}
