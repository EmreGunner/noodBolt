import React from 'react'
import { ArrowRight } from 'lucide-react'

const courses = [
  { id: 1, title: 'Graphic Design Mastery', category: 'Graphic Design', image: 'https://source.unsplash.com/random/800x600?design', price: 199.99 },
  { id: 2, title: 'E-commerce Entrepreneurship', category: 'E-commerce', image: 'https://source.unsplash.com/random/800x600?ecommerce', price: 249.99 },
  { id: 3, title: 'Trading Fundamentals', category: 'Trading', image: 'https://source.unsplash.com/random/800x600?trading', price: 179.99 },
  { id: 4, title: 'Content Creation Strategies', category: 'Content Creation', image: 'https://source.unsplash.com/random/800x600?content', price: 149.99 },
]

const Academy: React.FC = () => {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4 nood-gradient-text">NOOD Academy</h1>
        <p className="text-xl text-text max-w-3xl mx-auto">
          Unlock your potential! Master digital skills for entrepreneurship with our expert-led courses.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map(course => (
            <div key={course.id} className="nood-card">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover rounded-t-2xl" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-text mb-4">{course.category}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">${course.price.toFixed(2)}</span>
                  <button className="btn-primary text-sm px-4 py-2">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center py-12 bg-accent rounded-3xl">
        <h2 className="text-2xl font-bold mb-4">Not Sure Where to Start?</h2>
        <p className="text-lg text-text mb-6">
          Take our skills assessment to get personalized course recommendations.
        </p>
        <button className="btn-secondary inline-flex items-center">
          Start Assessment <ArrowRight className="ml-2" size={20} />
        </button>
      </section>
    </div>
  )
}

export default Academy