// 'use client';

// import React, { useState } from 'react';
// import { Eye, EyeOff, Lock, Mail, Loader2 } from 'lucide-react';
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Checkbox } from "@/components/ui/checkbox";

// export default function LoginPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 2000));
//     console.log('Login attempted with:', { email, password, rememberMe });
//     setIsLoading(false);
//   };

//   return (
//     <div className="flex flex-col min-h-screen lg:flex-row">
//       {/* Left side: Login form */}
//       <div className="flex flex-col w-full lg:w-1/2 items-center justify-center bg-zinc-900 px-4 py-8">
//         <Card className="w-full max-w-md space-y-6 sm:space-y-8 bg-zinc-800/30 backdrop-blur-lg border-zinc-700 p-6">
//           <CardHeader className="space-y-2 sm:space-y-3">
//           <CardTitle className="text-center text-4xl font-thin text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600 leading-[1.5]">
//           Sign in to Triptify
//         </CardTitle>

//           </CardHeader>
//           <CardContent>
//             <form className="space-y-4 sm:space-y-6" onSubmit={handleLogin}>
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1">
//                   Email address
//                 </label>
//                 <div className="relative rounded-md shadow-sm">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-zinc-500" aria-hidden="true" />
//                   </div>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     autoComplete="email"
//                     required
//                     className="bg-zinc-700/50 border-zinc-600 text-zinc-100 focus:ring-zinc-500 focus:border-zinc-500 block w-full pl-10 text-sm sm:text-base rounded-md"
//                     placeholder="you@example.com"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     disabled={isLoading}
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="password" className="block text-sm font-medium text-zinc-300 mb-1">
//                   Password
//                 </label>
//                 <div className="relative rounded-md shadow-sm">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-zinc-500" aria-hidden="true" />
//                   </div>
//                   <Input
//                     id="password"
//                     name="password"
//                     type={showPassword ? 'text' : 'password'}
//                     autoComplete="current-password"
//                     required
//                     className="bg-zinc-700/50 border-zinc-600 text-zinc-100 focus:ring-zinc-500 focus:border-zinc-500 block w-full pl-10 pr-10 text-sm sm:text-base rounded-md"
//                     placeholder="••••••••"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     disabled={isLoading}
//                   />
//                   <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
//                     <button
//                       type="button"
//                       className="text-zinc-500 hover:text-zinc-400 focus:outline-none focus:text-zinc-400"
//                       onClick={() => setShowPassword(!showPassword)}
//                       disabled={isLoading}
//                     >
//                       {showPassword ? (
//                         <EyeOff className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
//                       ) : (
//                         <Eye className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
//                       )}
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
//                 <div className="flex items-center">
//                   <Checkbox
//                     id="remember-me"
//                     checked={rememberMe}
//                     onCheckedChange={(checked) => setRememberMe(checked as boolean)}
//                     disabled={isLoading}
//                     className="bg-white"
//                   />
//                   <label htmlFor="remember-me" className="ml-2 block text-sm text-zinc-300">
//                     Remember me
//                   </label>
//                 </div>

//                 <div className="text-sm">
//                   <a href="#" className="font-medium text-zinc-400 hover:text-zinc-300">
//                     Forgot your password?
//                   </a>
//                 </div>
//               </div>

//               <div>
//                 <Button
//                   type="submit"
//                   className="w-full flex justify-center py-2 px-4 bg-green-500 border border-transparent rounded-md shadow-sm text-sm font-medium text-zinc-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500 disabled:opacity-50 disabled:cursor-not-allowed"
//                   disabled={isLoading}
//                 >
//                   {isLoading ? (
//                     <>
//                       <Loader2 className="animate-spin mr-2 h-4 w-4" />
//                       Signing in...
//                     </>
//                   ) : (
//                     'Sign in'
//                   )}
//                 </Button>
//               </div>
//             </form>
//           </CardContent>
//           <CardFooter>
//             <p className="w-full text-center text-sm text-zinc-400">
//               Not a member?{' '}
//               <a href="#" className="font-medium text-zinc-300 hover:text-zinc-200">
//                 Start a 14-day free trial
//               </a>
//             </p>
//           </CardFooter>
//         </Card>
//       </div>

//       {/* Right side: Image */}
//       <div className="hidden lg:flex w-full lg:w-1/2 justify-start items-center bg-zinc-900">
//         <div
//           className="bg-no-repeat bg-center"
//           style={{
//             backgroundImage: "url('/F.png')",
//             backgroundSize: 'cover',  // Change to cover for a larger image
//             width: '73%',              // Increased width of the image
//             height: '73%',             // Increased height of the image to fill the container
//             marginLeft: '0%',          // Adjusted marginLeft for alignment
//           }}
//         >
//           {/* You can place any content here if needed */}
//         </div>
//       </div>
//     </div>
//   );
// }
