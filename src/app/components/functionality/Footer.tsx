import Link from "next/link";
import { Facebook, Linkedin } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Github } from 'lucide-react';

// // Footer Component
// export default function Footer() {
//   return (
//     <footer className="bg-zinc-900 border-t w-full">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center justify-center">
//           <div>
//             <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Quick Links</h3>
//             <ul className="mt-4 space-y-2">
//               <li><Link href="/" className="text-base text-gray-500 hover:text-gray-900">Home</Link></li>
//               <li><Link href="/comingup" className="text-base text-gray-500 hover:text-gray-900">Features</Link></li>
//               <li><Link href="/comingup" className="text-base text-gray-500 hover:text-gray-900">Pricing</Link></li>
//               <li><Link href="/support" className="text-base text-gray-500 hover:text-gray-900">Contact</Link></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Resources</h3>
//             <ul className="mt-4 space-y-2">
//               <li><Link href="/comingup" className="text-base text-gray-500 hover:text-gray-900">Documentation</Link></li>
//               <li><Link href="/comingup" className="text-base text-gray-500 hover:text-gray-900">Tutorials</Link></li>
//               <li><Link href="/blog" className="text-base text-gray-500 hover:text-gray-900">Blog</Link></li>
//               <li><Link href="/support" className="text-base text-gray-500 hover:text-gray-900">Support</Link></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Company</h3>
//             <ul className="mt-4 space-y-2">
//               <li><Link href="/privacyPolicy" className="text-base text-gray-500 hover:text-gray-900">Privacy Policy</Link></li>
//               <li><Link href="/termsAndServices" className="text-base text-gray-500 hover:text-gray-900">Terms of Service</Link></li>
//             </ul>
//           </div>
//           <div>
//             {/* You can add any other content here if needed */}
//           </div>
//         </div>
//         <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-center items-center text-center">
//           <p className="text-base text-gray-500">&copy; {new Date().getFullYear()} Triptify. All rights reserved.</p>
//           <div className="flex space-x-6 mt-4 sm:mt-0">
//             <a href="/comingup" className="text-gray-400 hover:text-gray-500">
//               <span className="sr-only">Facebook</span>
//               <Facebook className="h-6 w-6" />
//             </a>
//             <a href="/comingup" className="text-gray-400 hover:text-gray-500">
//               <span className="sr-only">Twitter</span>
//               <Twitter className="h-6 w-6" />
//             </a>
//             <a href="/comingup" className="text-gray-400 hover:text-gray-500">
//               <span className="sr-only">Instagram</span>
//               <Instagram className="h-6 w-6" />
//             </a>
//             <a href="/comingup" className="text-gray-400 hover:text-gray-500">
//               <span className="sr-only">LinkedIn</span>
//               <Linkedin className="h-6 w-6" />
//             </a>
//             <a href="/comingup" className="text-gray-400 hover:text-gray-500">
//               <span className="sr-only">GitHub</span>
//               <Github className="h-6 w-6" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
