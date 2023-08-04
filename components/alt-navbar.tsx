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
          "items-center flex-col sticky top-0 z-40  bg-background" +
          (active ? "border-b border-slate-600" : "border-b")
        }
      >
        {active && (
          <>
            <hr className="h-0 border-solid border" />
            <div className="ml-20 mr-40 max-w-7xl flex justify-between  font-light text-gray-500 p2.5">
              <span className="hover:text-primary">Kırpart</span>
              <span className="hover:text-primary">Ürün Geliştirme</span>
              <span className="hover:text-primary">Kilomerte Taşları</span>
              <span className="hover:text-primary">Ürünler Proseler</span>
              <span className="hover:text-primary">AR&GE</span>
              <span className="hover:text-primary">Çözümler</span>
            </div>
          </>
        )}
      </header>
    </>
  )
}
