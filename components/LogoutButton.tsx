"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

import { buttonVariants } from "@/components/ui/button"

export default function LogoutButton() {
  const router = useRouter()

  // Create a Supabase client configured to use cookies
  const supabase = createClientComponentClient()

  const signOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  const iconSize = 30

  const currentUser = {
    id: 1,
    username: "Fatih Yalınbaş",
    isSeller: true,
  }

  return (
    <>
      <Link href="/">
        <div className="hover:cursor-pointer flex justify-center items-center space-x-2">
          <Image
            src="https://i.pinimg.com/564x/eb/46/75/eb4675380d672e6cc77c228e49d02b0c.jpg"
            alt="clickable image"
            width={iconSize}
            height={iconSize}
            className="rounded-full"
          />
          <p className="bg-white dark:bg-black font-medium h-7 w-5">
            {currentUser.username}
          </p>
        </div>
      </Link>
      <div className="absolute top-16 p-5 bg-white dark:bg-black rounded-lg border-solid border-2 border-emerald-500 flex flex-col gap-2.5 text-slate-900 dark:text-slate-200 w-52 font-light">
        <Link className="link" href="/">
          Gigs
        </Link>
        <Link className="link" href="/">
          Add New Gig
        </Link>
        <Link className="link" href="/">
          Orders
        </Link>
        <Link className="link" href="/">
          Messages
        </Link>
        <Link className="link" href="/login" onClick={signOut}>
          Logout
        </Link>
      </div>
    </>
  )
}
