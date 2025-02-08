"use client";
import { useState } from "react";
import Link from "next/link";
import { MapPin, Bell, Settings, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/toggle";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Find Job", href: "/" },
    { label: "Applied Jobs", href: "/applied-jobs" },
    { label: "Messages", href: "/messages" },
    { label: "Hiring", href: "/hiring" },
    { label: "Community", href: "/community" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <header className="border-b border-border/40 bg-background">
      <div className="flex h-16 items-center justify-between px-5 md:px-9">
        {/* Left - Logo */}
        <div className="flex items-center gap-4 md:gap-8">
          <Link href="/" className="text-2xl font-bold">
            Eclipse
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground pb-[1.25rem] border-b-2 border-transparent hover:border-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right - User & Settings (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>New York, NY</span>
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

        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-50 bg-background transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden w-64 p-5 border-r border-border`}
      >
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4"
          onClick={() => setIsOpen(false)}
        >
          <X className="h-6 w-6" />
        </Button>
        <div className="mt-6 border-b border-border pt-6 pb-4">
          <div className="flex flex-col items-center gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <ModeToggle />
            </div>
          </div>
        </div>
        {/* Mobile Menu Items */}
        <nav>
          <ul className="flex flex-col gap-4 mt-10">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* User Profile & Settings (Mobile) */}
        
      </div>
    </header>
  );
}

export default Navbar;
