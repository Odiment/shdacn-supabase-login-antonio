"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { AltNavMobile } from "@/components/altnav-mobile"

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
      {/*       <header
        className={
          "items-center flex-col sticky top-0 z-40  bg-background" +
          (active ? "border-b border-slate-600" : "border-b")
        }
      >
        {active && (
          <>
            <hr className="h-0 border-solid border" />
            <div className="mr-40 max-w-7xl flex justify-between  font-light text-gray-500 p2.5">
              <span className="hover:text-primary">Kırpart</span>
              <span className="hover:text-primary">Ürün Geliştirme</span>
              <span className="hover:text-primary">Kilomerte Taşları</span>
              <span className="hover:text-primary">Ürünler Proseler</span>
              <span className="hover:text-primary">AR&GE</span>
              <span className="hover:text-primary">Çözümler</span>
            </div>
          </>
        )}
      </header> */}

      {active && (
        <>
          <nav className="bg-secondary font-medium text-muted-foreground">
            <div className="ml-auto md:ml-20 lg:ml-20 max-w-6xl mx-auto border-b px-8">
              <div className="flex justify-between">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="flex items-center py-3 px-2 text-primary/4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mr-1 hover:text-primary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                      />
                    </svg>
                    <span className="font-bold hover:text-primary">
                      Better Dev
                    </span>
                  </a>

                  <div className="hidden md:flex items-center space-x-2">
                    <a href="" className="py-5 px-3 hover:text-primary">
                      Features
                    </a>
                    <a href="" className="py-5 px-3 hover:text-primary">
                      Pricing
                    </a>
                  </div>
                </div>
                <div className="hidden md:flex items-center ">
                  <a href="" className="py-5 px-3 hover:text-primary">
                    Login
                  </a>
                  <Link
                    href="/"
                    rel="noreferrer"
                    className={buttonVariants({ variant: "blueish" })}
                  >
                    Signup
                  </Link>
                </div>
                <div className="md:hidden flex items-center">
                  <AltNavMobile />
                </div>
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  )
}
