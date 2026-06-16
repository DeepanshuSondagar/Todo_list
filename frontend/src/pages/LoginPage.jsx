import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../libs/axios.js";


const LoginPage = () => {
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");
  const { login, loading, user } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/todos");
    }
  }, [user, navigate]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    await login({ email, password });
    navigate("/todos");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-black py-12">
        <div className="w-full max-w-md bg-slate-800/60 backdrop-blur rounded-lg p-8">
          <motion.div 
             className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl text-green-300 text-center">Welcome Back</h2>
          </motion.div>

            <motion.div  
            className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            >
              <div className="mt-1 relative rounded-md shadow sm-rounded-lg sm:px-18">
                <form className="space-y-6" onSubmit={handleSubmit}> 
                    

                <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email Address
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-slate-300" aria-hidden="true" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail( e.target.value )}
                      className="block w-full px-3 py-2 pl-10 bg-slate-700 border border-slate-700 rounded-md shadow-sm text-white
                       placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                      placeholder="jhonedoe@gmail.com"
                    />
                  </div>
                </div>

                    
                <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                    Password
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-slate-300" aria-hidden="true" />
                    </div>
                    <input
                      id="password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword( e.target.value )}
                      className="block w-full px-3 py-2 pl-10 bg-slate-700 border border-slate-700 rounded-md shadow-sm text-white
                       placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                      placeholder="*******"
                    />
                  </div>
                </div>   

                <button
                    type="submit"
                    disabled={loading}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? "Logging in..." : "Login"}
                    </button>                     
                </form>
                         <p className="mt-8 text-center text-sm text-gray-400">
                Create your account ? {" "}
                <Link to="/signup" className="font-medium text-emerald-400 hover:text-emerald-300">
                  Sign Up 
                </Link>
              </p>
                </div>  
            </motion.div>
        

        </div>
    </div>
  )
}

export default LoginPage;