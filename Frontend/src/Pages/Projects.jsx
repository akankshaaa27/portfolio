import { FaLaptopCode, FaBook, FaNewspaper, FaGlobe, FaGraduationCap, FaCode, FaCloudSun, FaUtensils, FaPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Projects() {
  const academicProjects = [
    {
      title: "Health Insurance Price Prediction (2022-2023)",
      icon: <FaLaptopCode className="text-5xl text-blue-600" />,  
      description: "Built an advanced Machine Learning model to predict health insurance premiums...",
      github: "https://github.com/Dhirajpatil7721/College_Projects/blob/main/Health%20Insurence%20Price%20Prediction.zip",
    },
    {
      title: "Blood Bank System (2023-2024)",
      icon: <FaBook className="text-5xl text-green-600" />, 
      description: "Developed a centralized platform to manage blood donations, donor records, inventory levels, and hospital requests for efficient and timely blood supply..",
      github: "https://github.com/akankshaaa27/blood-bank",
    },
    {
      title: "Online News Portal (2021-2022)",
      icon: <FaNewspaper className="text-5xl text-yellow-600" />, 
      description: "Created a modern news platform offering real-time updates in multiple categories...",
      github: "https://github.com/Dhirajpatil7721/College_Projects/blob/main/Online%20News%20Portal.zip",
    },
  ];

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/project");
        console.log("Project data fetched:", response.data);
        setProjects(response.data.data);  // Access the `data` array
      } catch (error) {
        console.error("Error fetching project data:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProjects();
  }, []);
  
  useEffect(() => {
    console.log(projects);  // This will now log after projects are updated
  }, [projects]);  // Runs every time 'projects' state changes
  
  
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section id="projects" className="bg-white mt-5 py-16 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Academic Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 mb-2">
            Academic Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Research and academic projects developed during my studies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20"
        >
          {academicProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all"
            >
              <div className="flex flex-col items-center text-center h-full">
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="mb-4"
                >
                  {/* {project.icon} */}
                  <FaGlobe className="text-5xl text-orange-600" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow">{project.description}</p>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium w-full max-w-xs"
                >
                  View on GitHub
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400 mb-2">
            Hosted / Client Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional projects developed for clients and personal portfolio
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >

          {/* {projects.map((project, index) => ( */}
          {[...projects].reverse().map((project, index) => (

            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all"
            >
              <div className="flex flex-col items-center text-center h-full">
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="mb-4"
                >
                  {/* {project.ico} */}
                  <FaGlobe className="text-5xl text-orange-600" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow">{project.description}</p>
                <div className="flex gap-3 w-full justify-center">
                  <motion.a
                    href={project.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium text-sm flex-grow max-w-[120px]"
                  >
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.host}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm flex-grow max-w-[120px]"
                  >
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}