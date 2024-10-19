import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-800 rounded-xl text-gray-400 py-4 px-6 mt-3 mb-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm mb-4 md:mb-0">
          Powered by advanced AI algorithms for optimal route planning
        </div>
        <nav className="flex space-x-4">
          <Link href="/about" className="hover:text-gray-200 transition-colors">
            About
          </Link>
          <Link href="/privacyPolicy" className="hover:text-gray-200 transition-colors">
            Privacy
          </Link>
          <Link href="/termsOfService" className="hover:text-gray-200 transition-colors">
            Terms
          </Link>
          <Link href="/support" className="hover:text-gray-200 transition-colors">
            Support
          </Link>
        </nav>
      </div>
    </footer>
  )
}