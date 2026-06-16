import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Trash2, Check } from 'lucide-react'
import { useTodoStore } from '../libs/axios.js'
import { useUserStore } from '../libs/axios.js'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const { todos, getTodos, addTodo, toggleTodo, deleteTodo, loading } = useTodoStore()
  const { user } = useUserStore()
  const navigate = useNavigate()
  const [newTodo, setNewTodo] = useState('')

  useEffect(() => {
    if (!user) {
      navigate('/')
      return
    }
    getTodos()
  }, [user, navigate, getTodos])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (newTodo.trim()) {
      await addTodo(newTodo.trim())
      setNewTodo('')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-black">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-2">My Todos</h1>
          <p className="text-gray-400">Manage your tasks efficiently</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-slate-800/60 backdrop-blur rounded-lg p-6 mb-6"
        >
          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new todo..."
              className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
            <button
              type="submit"
              disabled={loading || !newTodo.trim()}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium flex items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Plus className="h-5 w-5" />
              Add
            </button>
          </form>
        </motion.div>

        {loading && todos.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400">Loading todos...</div>
          </div>
        ) : todos.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">No todos yet. Add one above!</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-3"
          >
            {todos.map((todo, index) => (
              <motion.div
                key={todo._id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`bg-slate-800/60 backdrop-blur rounded-lg p-4 flex items-center gap-4 group hover:bg-slate-700/60 transition-colors ${todo.done ? 'opacity-60' : ''}`}
              >
                <button
                  onClick={() => toggleTodo(todo._id)}
                  className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    todo.done
                      ? 'bg-emerald-500 border-emerald-500'
                      : 'border-slate-500 hover:border-emerald-500'
                  }`}
                >
                  {todo.done && <Check className="h-4 w-4 text-white" />}
                </button>
                <span
                  className={`flex-1 text-lg ${todo.done ? 'line-through text-gray-500' : 'text-white'}`}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => deleteTodo(todo._id)}
                  className="opacity-0 group-hover:opacity-100 p-2 text-red-400 hover:text-red-300 hover:bg-red-500/20 rounded-lg transition-all"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}

        {todos.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 text-center text-gray-400"
          >
            {todos.filter((t) => t.done).length} of {todos.length} completed
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default HomePage