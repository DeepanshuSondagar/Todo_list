import React from 'react'
import { motion } from 'framer-motion'
import { CheckSquare, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex justify-center mb-6">
            <CheckSquare className="h-20 w-20 text-emerald-500" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            TodoApp
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Your Simple & Powerful Task Manager
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Stay organized, boost productivity, and never forget a task again. 
            TodoApp helps you manage your daily tasks with ease and style.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className="bg-slate-800/60 backdrop-blur rounded-lg p-6 text-center">
            <div className="text-emerald-500 mb-4">
              <svg className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Easy to Use</h3>
            <p className="text-gray-400">Simple and intuitive interface for managing your tasks effortlessly</p>
          </div>

          <div className="bg-slate-800/60 backdrop-blur rounded-lg p-6 text-center">
            <div className="text-emerald-500 mb-4">
              <svg className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Fast & Responsive</h3>
            <p className="text-gray-400">Lightning-fast performance that works seamlessly on all devices</p>
          </div>

          <div className="bg-slate-800/60 backdrop-blur rounded-lg p-6 text-center">
            <div className="text-emerald-500 mb-4">
              <svg className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Secure</h3>
            <p className="text-gray-400">Your data is protected with secure authentication and encryption</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Get Started Today</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              Sign Up Free
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/login"
              className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-colors"
            >
              Login
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default LandingPage
