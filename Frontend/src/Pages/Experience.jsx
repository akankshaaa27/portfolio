import axios from "axios";
import { motion } from "framer-motion";
import { Briefcase, Laptop, GraduationCap } from 'lucide-react';
import { useEffect, useState } from "react";

export default function Experience() {
  const [workExperiences, setWorkExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/experience");
        console.log("API response:", response.data);

        if (response.data.success && Array.isArray(response.data.data)) {
          const reversedData = [...response.data.data].reverse(); // Reverse to show latest first
          setWorkExperiences(reversedData);
        } else {
          console.error("Unexpected data format", response.data);
        }
      } catch (error) {
        console.error("Error fetching experience:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExperience();
  }, []);

  return (
    <section id="experience" className="bg-white mt-5 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 mb-4">
            Professional Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My career path, learning experiences, and professional growth
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-16">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="flex items-start">
              <div className="hidden sm:flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg mr-6 mt-1 flex-shrink-0">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 w-full hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="sm:hidden flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg mr-4">
                    <Briefcase className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    <span className="bg-gradient-to-r from-green-600 to-emerald-500 text-transparent bg-clip-text">
                      Work Experience
                    </span>
                  </h3>
                </div>

                <div className="space-y-6 pl-2 sm:pl-0">
                  {loading ? (
                    <p>Loading...</p>
                  ) : (
                    workExperiences.map((exp, idx) => (
                      <div key={idx} className="border-l-4 border-emerald-400 pl-4 py-1">
                        <h4 className="text-xl font-bold text-gray-800">{exp.company}</h4>
                        <p className="text-emerald-600 text-sm font-semibold">{exp.position}</p>
                        <p className="text-gray-500 text-sm italic mb-2">{exp.startDate} – {exp.endDate}</p>
                        <p className="text-gray-700 text-sm">{exp.description}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Internships */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="flex items-start">
              <div className="hidden sm:flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg mr-6 mt-1 flex-shrink-0">
                <Laptop className="h-6 w-6 text-white" />
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 w-full hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="sm:hidden flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg mr-4">
                    <Laptop className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-500 text-transparent bg-clip-text">
                      Internships
                    </span>
                  </h3>
                </div>

                <div className="space-y-6 pl-2 sm:pl-0">
                  <div className="border-l-4 border-indigo-400 pl-4 py-1">
                    <h4 className="text-xl font-semibold text-gray-800">Prodigy InfoTech</h4>
                    <p className="text-indigo-600 mb-2 text-sm font-medium">Mar 2024 (4 weeks)</p>
                    <p className="text-gray-600">Virtual internship focused on modern web development practices</p>
                  </div>

                  <div className="border-l-4 border-indigo-400 pl-4 py-1">
                    <h4 className="text-xl font-semibold text-gray-800">Codsoft</h4>
                    <p className="text-indigo-600 mb-2 text-sm font-medium">Feb-Mar 2024 (4 weeks)</p>
                    <p className="text-gray-600">Hands-on experience building web applications from scratch</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

         
        </div>
      </div>
    </section>
  );
}
