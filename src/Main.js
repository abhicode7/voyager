import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import { FaSearchengin } from "react-icons/fa6";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import images from "./images";
import { motion, AnimatePresence, transform, useScroll, useTransform } from 'framer-motion';
import { navSearch } from "./animationVariants";

function Main({ showModal, setShowModal,  selectedImageRef }) {

    const [searchText, setSearchText] = useState("");
    const [filteredImages, setFilteredImages] = useState(images);
    const [visibleImages, setVisibleImages] = useState(10); // Initial number of visible images
    const containerRef = useRef(null); // Reference to the container div
    const [loading, setLoading] = useState(true);
    const searchBarRef = useRef(null); // Reference to the search bar
    const [isSearchInNavbar, setIsSearchInNavbar] = useState(false); // State to track search bar position
    const [goObserver, setGoObserver] = useState(true);
    const { scrollY } = useScroll(); // Track the scroll position
    const y = useTransform(scrollY, [0, 400], [0, 150], { type: 'tween' }); // Adjust y based on scroll
   

    useEffect(() => {
 
        setVisibleImages(10);
        setLoading(true); //this is executing the moment setLoading changes
      
    }, [searchText]);

    useEffect(() => {
      // Function to handle intersection observer
      const handleIntersection = (entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting && loading && goObserver) { 
                  setVisibleImages(prevVisibleImages => prevVisibleImages + 10); // Load 10 more images
                  
                  console.log(visibleImages, goObserver);
                  setGoObserver(false);
                  
              }
          });
      };

      // Create an intersection observer
      const observer = new IntersectionObserver(handleIntersection, {
          root: null,
          rootMargin: "80%",
          threshold: 0
      });

      // Observe the container element
      if (containerRef.current) {
          observer.observe(containerRef.current);
      }

      // Cleanup function
      return () => {
          // observer.disconnect();
          if (containerRef.current) {
              observer.unobserve(containerRef.current);

      //         setVisibleImages(10);
      // setLoading(true);
              
             
          }
      };
  }, [searchText, visibleImages, filteredImages]);


    useEffect(() => {

      const debounceTimeout = setTimeout(() => {
      const lowercasedFilter = searchText.toLowerCase();
      const filteredData = images.filter(item => {
        return Object.keys(item).some(key =>{
          
          if (key === "imageUrl") {
            return false; // Skip the imageUrl field
        }

        if (key === "nprompt") {
          return false; // Skip the nprompt field
      }

         return item[key].toString().toLowerCase().includes(lowercasedFilter)
      });
      });

      // setFilteredImages(filteredData);
      setFilteredImages(filteredData.slice(0, visibleImages));
      setGoObserver(true);
      console.log("Filter: ", visibleImages);
      
      

      if (filteredData.length <= visibleImages) {
        setLoading(false);

        
       
      }

    }, 1000); // 300ms delay

    return () => {
      clearTimeout(debounceTimeout); // Clear the timeout if searchText changes before delay is over
      
  };

    }, [searchText, visibleImages]);




    useEffect(() => {
      const handleScroll = () => {
          const searchBarTop = searchBarRef.current.getBoundingClientRect().top;
          const navbarBottom = 35; // Assuming navbar height is 64px, adjust as needed
          if (searchBarTop <= navbarBottom) {
              setIsSearchInNavbar(true);
          } else {
              setIsSearchInNavbar(false);
          }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
  }, []);


 const handleModal = (image) => {

  selectedImageRef.current = image;
    setShowModal(true);
   
    
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent any default action
      // Handle the search here
      console.log("Searching for:", searchText);
      // Add your search logic here, such as updating state or making an API call
    }
  };




  return (
    <div className={`w-full h-full`}>
      <Navbar className='z-50' isSearchInNavbar={isSearchInNavbar}>
        <AnimatePresence mode="wait">
      {isSearchInNavbar && (
                    <motion.div 
                    variants={navSearch}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    
                    className="navSearch absolute top-[50%] left-[50%] w-[90%] xl:w-full max-w-[500px] xl:max-w-[500px] flex flex-row justify-center items-center xl:mx-0">
                       <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            onKeyDown={handleKeyDown}
            className="w-[100%] max-w-[600px] pl-[60px] py-2 h-[50px] rounded-full bg-[#1C1C1C] focus:outline-none text-white placeholder:text-[#565656]"
          />
          <button
            type="submit"
            className="bg-[#CC5C6D] absolute left-0 p-2 rounded-full h-[40px] w-[40px] items-center justify-center flex ml-[5px] text-white pointer-events-none"
          >
            <FaSearchengin className="w-[30px] h-[30px]" />
          </button>
                       
                    </motion.div>
                )}

        </AnimatePresence>

      </Navbar>
      

      <div className="w-[100%] h-[50svh] overflow-hidden">

        
        <motion.img
          src="./bgnew.png"
          alt="hero"
          className="h-full w-auto lg:w-full lg:h-auto object-cover"
          style={{y}} 
          transition={{ type: 'tween', stiffness: 50, damping: 10 }}
        />

      </div>
      <form className="absolute top-[1/2] left-0 -translate-y-1/2 w-[100%] z-10 flex flex-row justify-center"
      ref={searchBarRef}
      >
        <div className="relative w-[95%] max-w-[600px] flex flex-row justify-center items-center">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            onKeyDown={handleKeyDown}
            className="w-[100%] max-w-[600px] pl-[80px] py-2 h-[70px] rounded-full bg-[#1C1C1C] focus:outline-none text-white placeholder:text-[#565656]"
          />
          <button
            type="submit"
            className="bg-[#CC5C6D] absolute left-0 p-2 rounded-full h-[60px] w-[60px] items-center justify-center flex ml-[5px] text-white pointer-events-none "
          >
            <FaSearchengin className="w-[30px] h-[30px]" />
          </button>
        </div>
      </form>
      <div className="w-full h-full relative">
      <ResponsiveMasonry
        
        columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 5 }}
        className=""
      >
        <Masonry gutter="0.5rem" className="p-[0.5rem]">
          {filteredImages.map((image, index) => (
            <img
              key={index}
              src={image.imageUrl}
              alt="image"
             
              onClick={() => handleModal(image)}
              className={`w-full h-auto object-cover hover:scale-95 transition-transform duration-300`}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>

      <div ref={containerRef} className="h-[1px]" /> {/* Sentinel element to trigger loading more images */}

          <h2 className="text-white p-10 text-center"
              
          >{loading ? "Loading..." : "No More Images"}</h2>
      </div>
      </div>
  );
}

export default Main;
