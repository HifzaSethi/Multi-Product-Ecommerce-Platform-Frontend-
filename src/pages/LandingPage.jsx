import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion"; // <- import framer motion
import Header from "../components/Header";
import Footer from "../components/Footer";

const LandingPage = () => {
  const pictures = [
    { id: 1, price: 15, imgsrc: "./assets/image1.jpeg" },
    { id: 2, price: 12, imgsrc: "./assets/image2.jpeg" },
    { id: 3, price: 20, imgsrc: "./assets/image3.jpeg" },
    { id: 4, price: 25, imgsrc: "./assets/image4.jpeg" },
  ];

  return (
    <>
      <Header variant="landing" />

      {/* HERO SECTION */}
      <section className="px-4">
        <h1 className="mt-12 text-4xl md:text-6xl lg:text-7xl font-bold text-center">
          Get your desired
        </h1>

        <h2
          className="mt-2 text-4xl md:text-6xl lg:text-7xl 
          font-semibold text-center italic
          bg-gradient-to-r from-pink-400 to-purple-700 
          bg-clip-text text-transparent"
        >
          designs at unbeatable prices
        </h2>

        {/* Cards with animation */}
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {pictures.map((picture, index) => (
            <motion.div
              key={picture.id}
              className="w-64 h-80 bg-gray-400 rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: -50 }} // start above and invisible
              animate={{ opacity: 1, y: 0 }} // move to position and fade in
              transition={{
                delay: index * 0.2,
                duration: 1.3,
                ease: "easeOut",
              }} // stagger
            >
              <img
                src={picture.imgsrc}
                alt={`Design ${picture.id}`}
                className="w-full h-full object-cover" // cover full block
              />
            </motion.div>
          ))}
        </div>

        {/* Learn More */}
        <div className="mt-8 text-center text-xl font-semibold bg-gray-300 py-3 hover:border-y-2 border-blue-900">
          Learn more
        </div>

        {/* Down Arrow */}
        <div className="mt-6 text-4xl text-purple-600 animate-bounce text-center">
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="px-4 mt-20 space-y-28">
        {/* Section Heading */}
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Bring your ideas to life
          </h1>
          <p className="mt-4 italic text-2xl md:text-3xl text-gray-800">
            with our custom designs
          </p>
        </div>

        {/* Feature Block */}
        {["Search by Mood", "Search by Category", "Search by Color"].map(
          (title, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              } items-center justify-center gap-10`}
            >
              <div className="w-full md:w-96 h-72 bg-gray-400 rounded-xl shadow-lg" />

              <div className="w-full md:w-96 text-center">
                <h2 className="text-3xl md:text-4xl font-semibold">{title}</h2>
                <p className="mt-3 italic text-xl text-gray-800">
                  Browse our collection of digital designs
                </p>
                <button className="mt-6 px-8 py-3 bg-purple-800 hover:bg-purple-950 text-white rounded-2xl">
                  Join Now
                </button>
              </div>
            </div>
          )
        )}
      </section>
      <Footer />
    </>
  );
};

export default LandingPage;
