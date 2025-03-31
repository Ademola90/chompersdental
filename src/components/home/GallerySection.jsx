import { ArrowRight } from "lucide-react";
import badone from "../../assets/badone.jpeg";
import badtwo from "../../assets/badtwo.jpeg";
import badthree from "../../assets/badthree.jpeg";
import goodone from "../../assets/goodone.jpeg";
import goodtwo from "../../assets/goodtwo.jpeg";
import goodthree from "../../assets/goodthree.jpeg";

const GallerySection = () => {
  // Gallery data with images
  const galleryItems = [
    {
      id: 1,
      title: "Teeth Whitening",
      beforeImage: badone,
      afterImage: goodone,
    },
    {
      id: 2,
      title: "Dental Implants",
      beforeImage: badtwo,
      afterImage: goodtwo,
    },
    {
      id: 3,
      title: "Invisalign Treatment",
      beforeImage: badthree,
      afterImage: goodthree,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-[#F67F23] mb-12 text-center">
          Gallery
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-center py-4 bg-green-600 text-white">
                {item.title}
              </h3>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-center mb-2 font-medium">Before</p>
                    <img
                      src={item.beforeImage}
                      alt={`Before ${item.title}`}
                      className="w-full h-40 object-cover rounded"
                    />
                  </div>
                  <div>
                    <p className="text-center mb-2 font-medium">After</p>
                    <img
                      src={item.afterImage}
                      alt={`After ${item.title}`}
                      className="w-full h-40 object-cover rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="/gallery"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
          >
            View Full Gallery <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

// import { ArrowRight } from "lucide-react";

// const GallerySection = () => {
//   // Gallery data
//   const galleryItems = [
//     {
//       id: 1,
//       title: "Teeth Whitening",
//     },
//     {
//       id: 2,
//       title: "Dental Implants",
//     },
//     {
//       id: 3,
//       title: "Invisalign Treatment",
//     },
//   ];

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
//           Gallery
//         </h2>
//         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {galleryItems.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white rounded-lg overflow-hidden shadow-md"
//             >
//               <h3 className="text-xl font-semibold text-center py-4 bg-green-600 text-white">
//                 {item.title}
//               </h3>
//               <div className="p-6">
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <p className="text-center mb-2 font-medium">Before</p>
//                     <div className="w-full h-40 bg-gray-200 rounded flex items-center justify-center">
//                       <span className="text-gray-500 text-sm">Image</span>
//                     </div>
//                   </div>
//                   <div>
//                     <p className="text-center mb-2 font-medium">After</p>
//                     <div className="w-full h-40 bg-gray-200 rounded flex items-center justify-center">
//                       <span className="text-gray-500 text-sm">Image</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="text-center mt-10">
//           <a
//             href="/gallery"
//             className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
//           >
//             View Full Gallery <ArrowRight size={18} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GallerySection;
