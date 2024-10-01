import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Menu, Search, Github } from 'lucide-react'

export default function DocsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Acme Docs</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="/docs">Docs</Link>
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="/guides">Guides</Link>
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="/blog">Blog</Link>
            </nav>
          </div>
          <button className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </button>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search documentation..." className="pl-8 md:w-[300px] lg:w-[400px]" type="search" />
              </div>
            </div>
            <nav className="flex items-center">
              <Link href="https://github.com" target="_blank" rel="noreferrer">
                <div className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <ScrollArea className="h-full py-6 pl-8 pr-6 lg:py-8">
            <div className="w-full">
              <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-medium">Getting Started</h4>
              <div className="grid grid-flow-row auto-rows-max text-sm">
                <Link className="flex w-full items-center rounded-md p-2 hover:underline" href="/docs/installation">
                  Installation
                </Link>
                <Link className="flex w-full items-center rounded-md p-2 hover:underline" href="/docs/introduction">
                  Introduction
                </Link>
                <Link className="flex w-full items-center rounded-md p-2 hover:underline" href="/docs/architecture">
                  Architecture
                </Link>
              </div>
              <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-medium">Components</h4>
              <div className="grid grid-flow-row auto-rows-max text-sm">
                <Link className="flex w-full items-center rounded-md p-2 hover:underline" href="/docs/components/button">
                  Button
                </Link>
                <Link className="flex w-full items-center rounded-md p-2 hover:underline" href="/docs/components/input">
                  Input
                </Link>
                <Link className="flex w-full items-center rounded-md p-2 hover:underline" href="/docs/components/select">
                  Select
                </Link>
              </div>
            </div>
          </ScrollArea>
        </aside>
        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
          <div className="mx-auto w-full min-w-0">
            <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
              <div className="overflow-hidden text-ellipsis whitespace-nowrap">Docs</div>
              <span>/</span>
              <div className="font-medium text-foreground">Introduction</div>
            </div>
            <div className="space-y-2">
              <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Introduction</h1>
              <p className="text-lg text-muted-foreground">
                Welcome to the Acme documentation. This is an example of how you can structure your documentation.
              </p>
            </div>
            <div className="pb-12 pt-8">
              <div className="prose max-w-none">
                <p>
                  This documentation site is built using Next.js and styled with Tailwind CSS. It's designed to be
                  responsive, accessible, and easy to navigate.
                </p>
                <h2>Getting Started</h2>
                <p>
                  To get started with our product, please follow the installation guide. Once installed, you can explore
                  the various components and features available.
                </p>
                <h2>Components</h2>
                <p>
                  We offer a wide range of components to help you build your application. Each component is designed
                  with accessibility and ease of use in mind.
                </p>
                <h2>Need Help?</h2>
                <p>
                  If you need any assistance or have questions, please don't hesitate to reach out to our support team.
                  We're here to help!
                </p>
              </div>
            </div>
          </div>
          <div className="hidden text-sm xl:block">
            <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
              <div className="space-y-2">
                <p className="font-medium">On This Page</p>
                <ul className="m-0 list-none">
                  <li className="mt-0 pt-2">
                    <a className="inline-block no-underline transition-colors hover:text-foreground" href="#getting-started">
                      Getting Started
                    </a>
                  </li>
                  <li className="mt-0 pt-2">
                    <a className="inline-block no-underline transition-colors hover:text-foreground" href="#components">
                      Components
                    </a>
                  </li>
                  <li className="mt-0 pt-2">
                    <a className="inline-block no-underline transition-colors hover:text-foreground" href="#need-help">
                      Need Help?
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built by Acme Inc. The source code is available on GitHub.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}