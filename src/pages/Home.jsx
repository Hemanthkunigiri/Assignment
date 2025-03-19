import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="flex flex-col items-center justify-center h-screen text-center p-4">
    <motion.h1 
      className="text-4xl font-bold mb-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Connecting People Across Faiths & Interests
    </motion.h1>
    <p className="text-gray-600">Connecting people of all faiths through events and community support.</p>
    <Link to="/events" className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-700">
      Explore Events
    </Link>
  </div>
);

export default Home;
