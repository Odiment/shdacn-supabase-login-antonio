/* import { useState } from "react" */
import Link from "next/link"
import { Menu } from "lucide-react"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { AltNavbar } from "@/components/alt-navbar"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

import LoginHeader from "./login-header"

/* const [active, setActive] = useState(false) */

const active = true

export function SiteHeader() {
  return (
    <>
      <header className="items-center flex-col sticky top-0 z-40  border-b bg-secondary">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <MainNav items={siteConfig.mainNav} />

          <div className="flex items-center  space-x-4">
            <nav className="flex flex-1 justify-end items-center space-x-1 gap-6">
              <Link className="link" href="/kurumsal">
                Kurumsal
              </Link>
              <Link className="link" href="/hizmetlerimiz">
                Hizmetlerimiz
              </Link>
              <Link className="link" href="/bilgimerkezi">
                BilgiMerkezi
              </Link>
              <Link className="link" href="/iletisim">
                İletişim
              </Link>
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={buttonVariants({
                    size: "icon",
                    variant: "ghost",
                  })}
                >
                  <Icons.gitHub className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
              <Link
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={buttonVariants({
                    size: "icon",
                    variant: "ghost",
                  })}
                >
                  <Icons.twitter className="h-5 w-5 fill-current" />
                  <span className="sr-only">Twitter</span>
                </div>
              </Link>
              <ThemeToggle />
              <LoginHeader />
            </nav>
          </div>
        </div>
        <div>
          <AltNavbar />
        </div>
        {/* Navbar altı küçük ilave menü denemesi */}
        {/*       <hr className="w-full h-0 border-solid border" />
      <div className="flex justify-between font-light text-gray-500 p2.5">
        <span>Test</span>
        <span>Test2</span>
      </div> */}
      </header>
    </>
  )
}
