// import { Quote } from 'lucide-react';

// const testimonialsData = [
//   {
//     name: 'Sarah Johnson',
//     role: 'Senior Developer at Tech Corp',
//     message: 'Pranav is an exceptional developer with a keen eye for detail. His ability to transform complex requirements into elegant solutions is truly impressive.',
//     avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
//   },
//   {
//     name: 'Michael Chen',
//     role: 'Project Manager at StartupX',
//     message: 'Working with Pranav was a pleasure. He brings creativity and technical excellence to every project, always delivering beyond expectations.',
//     avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
//   },
//   {
//     name: 'Emily Rodriguez',
//     role: 'UX Designer at Design Studio',
//     message: 'Pranav has an amazing ability to bridge the gap between design and development. His understanding of both worlds makes collaboration seamless.',
//     avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
//   },
//   {
//     name: 'David Kumar',
//     role: 'CTO at Innovation Labs',
//     message: 'A talented developer who consistently produces high-quality code. Pranav is proactive, communicative, and always eager to learn new technologies.',
//     avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200',
//   },
// ];

// export default function Testimonials() {
//   return (
//     <section
//       id="testimonials"
//       className="min-h-screen flex items-center justify-center px-6 py-20"
//     >
//       <div className="max-w-6xl mx-auto w-full">
//         <div className="text-center mb-16 animate-fade-in">
//           <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
//             Testimonials
//           </h2>
//           <div className="h-1 w-24 mx-auto bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
//           <p className="mt-4 text-gray-600 dark:text-gray-400">
//             What people say about working with me
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {testimonialsData.map((testimonial, index) => (
//             <div
//               key={index}
//               className="bg-white/40 dark:bg-black/40 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 dark:border-white/10 hover:scale-105 transition-all duration-300 relative overflow-hidden group animate-slide-up"
//               style={{ animationDelay: `${index * 150}ms` }}
//             >
//               <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//               <div className="relative z-10">
//                 <Quote className="w-10 h-10 text-purple-400 mb-4 opacity-50" />

//                 <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
//                   "{testimonial.message}"
//                 </p>

//                 <div className="flex items-center gap-4">
//                   <div className="relative">
//                     <img
//                       src={testimonial.avatar}
//                       alt={testimonial.name}
//                       className="w-14 h-14 rounded-full object-cover border-2 border-purple-400 shadow-lg"
//                     />
//                     <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
//                   </div>

//                   <div>
//                     <h4 className="font-bold text-gray-800 dark:text-white">
//                       {testimonial.name}
//                     </h4>
//                     <p className="text-sm text-purple-600 dark:text-purple-400">
//                       {testimonial.role}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
