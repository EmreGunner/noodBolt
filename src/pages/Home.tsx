import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Briefcase, Users } from 'lucide-react'

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-20"
    >
      <section className="text-center py-20">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-text"
        >
          Your Gateway to <span className="text-primary">Digital Success</span>
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl mb-8 text-text max-w-3xl mx-auto"
        >
          Nood empowers entrepreneurs and freelancers with targeted skills and expert guidance for digital business success.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link to="/academy" className="btn-primary inline-flex items-center">
            Explore Our Programs <ArrowRight className="ml-2" size={20} />
          </Link>
        </motion.div>
      </section>

      <section className="py-20 bg-accent rounded-3xl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-text">Our Offerings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <BookOpen className="text-primary mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4 text-text">NOOD Academy</h3>
              <p className="text-text mb-4">Master digital skills for entrepreneurship. Courses in Graphic Design, E-commerce, Trading, and Content Creation.</p>
              <Link to="/academy" className="text-primary hover:text-secondary inline-flex items-center">
                Learn More <ArrowRight className="ml-1" size={16} />
              </Link>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <Briefcase className="text-primary mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4 text-text">NOOD Agency</h3>
              <p className="text-text mb-4">Transform your business with our expert digital marketing services. From strategy to execution, we've got you covered.</p>
              <Link to="/agency" className="text-primary hover:text-secondary inline-flex items-center">
                Our Services <ArrowRight className="ml-1" size={16} />
              </Link>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <Users className="text-primary mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4 text-text">NOOD Community</h3>
              <p className="text-text mb-4">Join our thriving Telegram-based community. Connect, learn, and grow with like-minded individuals.</p>
              <Link to="/community" className="text-primary hover:text-secondary inline-flex items-center">
                Join Now <ArrowRight className="ml-1" size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-text">Success Stories</h2>
          {/* Add success stories or testimonials here */}
        </div>
      </section>

      <section className="py-20 bg-accent rounded-3xl">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-text">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-text max-w-2xl mx-auto">
            Whether you're looking to learn new skills, grow your business, or join a community of like-minded individuals, Nood has something for you.
          </p>
          <Link to="/consultation" className="btn-secondary inline-flex items-center">
            Book a Free Consultation <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </motion.div>
  )
}

export default Home