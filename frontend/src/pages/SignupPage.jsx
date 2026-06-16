import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../libs/axios.js";



const SignupPage = () => {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:""
    });
    
    const navigate = useNavigate();
    const {signup, loading} = useUserStore();
    const [error, setError] = useState(null);

    const handleSubmit= async(e) => {
        e.preventDefault();
        setError(null);
        await signup(formData);
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
            <h2 className="text-2xl text-green-300 text-center">Create you account</h2>
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
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Full name
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-slate-300" aria-hidden="true" />
                    </div>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="block w-full px-3 py-2 pl-10 bg-slate-700 border border-slate-700 rounded-md shadow-sm text-white
                       placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Email Address
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-slate-300" aria-hidden="true" />
                    </div>
                    <input
                      id="email"
                      type="text"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="block w-full px-3 py-2 pl-10 bg-slate-700 border border-slate-700 rounded-md shadow-sm text-white
                       placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                      placeholder="jhonedoe@gmail.com"
                    />
                  </div>
                </div>

                    
                <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Passwrod
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-slate-300" aria-hidden="true" />
                    </div>
                    <input
                      id="password"
                      type="password"
                      required
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="block w-full px-3 py-2 pl-10 bg-slate-700 border border-slate-700 rounded-md shadow-sm text-white
                       placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                      placeholder="*******"
                    />
                  </div>
                </div>   

                <button
                    type="submit"                    
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                >
                    Signup
                    </button>                     
                </form>
                         <p className="mt-8 text-center text-sm text-gray-400">
                Already have an account ? {" "}
                <Link to="/login" className="font-medium text-emerald-400 hover:text-emerald-300">
                  Login here 
                </Link>
              </p>
                </div>  
            </motion.div>
        

        </div>
    </div>
  )
}

export default SignupPage