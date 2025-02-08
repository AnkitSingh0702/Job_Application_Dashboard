"use client"
import Link from "next/link"
import { MapPin, Bell, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ModeToggle } from "@/components/toggle"

function Navbar() {
  const navItems = [
    { label: "Find Job", href: "/", active: true },
    { label: "Applied Jobs", href: "/applied-jobs" },
    { label: "Messages", href: "/messages" },
    { label: "Hiring", href: "/hiring" },
    { label: "Community", href: "/community" },
    { label: "FAQ", href: "/faq" },
  ]
  return (
    <div>
      <header className="border-b border-border/40 bg-background">
        <div className="flex h-16 items-center justify-between px-9">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold">
              Eclipse
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`text-sm ${
                      item.active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    } pb-[1.25rem] border-b-2 border-transparent hover:border-foreground`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>New York, NY</span>
              </div>
            </div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <ModeToggle />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar

