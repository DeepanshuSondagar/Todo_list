  import { create } from "zustand";
import axios from "axios";
// API base URL (use Vite env var if provided)
const API_URL = import.meta.env.VITE_API_URL || "/api";
axios.defaults.baseURL = API_URL;
// send cookies for auth (backend sets JWT cookie)
axios.defaults.withCredentials = true;
import toast from "react-hot-toast";



export const useUserStore = create((set,get)=>({
    user: null, 
    loading: false,

    signup: async({name, email, password})=>{
        set ({loading : true});

        try {
            const res = await axios.post("/auth/signup",{name,email,password});
            set({user: res.data, loading:false})
        } catch (error) {
             set({loading: false});
            toast.error(error.response?.data?.message || "Could not sign up. Check your server connection")
        }
    },

    login: async({ email, password})=>{
        set ({loading : true});

        try {
            const res = await axios.post("/auth/login",{email,password});
            set({user: res.data, loading:false})
        } catch (error) {
             set({loading: false});
            toast.error(error.response?.data?.message || "Could not sign up. Check your server connection")
        }
    },

    logout: async() =>{
        set({loading: true});

        try {
            const res = await axios.post("/auth/logout");
             set({user: null});
        } catch (error) {
            toast.error(error.response?.data?.message || "An error occurred during logout")
        }
    },
}))


export const useTodoStore = create((set, get) => ({
    todos: [],
    loading: false,

    getTodos: async () => {
        set({ loading: true });
        try {
            const res = await axios.get("/task");
            set({ todos: res.data, loading: false });
        } catch (error) {
            set({ loading: false });
            toast.error(error.response?.data?.message || "Failed to fetch todos");
        }
    },

    addTodo: async (text) => {
        set({ loading: true });
        try {
            const res = await axios.post("/task", { text });
            set((state) => ({ todos: [...state.todos, res.data], loading: false }));
             toast.success("Todo added successfully");
        } catch (error) {
            set({ loading: false });
            toast.error(error.response?.data?.message || "Failed to add todo");
        }
    },

   toggleTodo: async (id) => {
    set({ loading: true });
    try {
        // get current todo to toggle its done value
        const todo = get().todos.find((t) => t._id === id); 
        const res = await axios.put(`/task/${id}`, { done: !todo.done }); 
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo._id === id ? { ...todo, done: res.data.done } : todo
            ),
            loading: false,
        }));
    } catch (error) {
        set({ loading: false });
        toast.error(error.response?.data?.message || "Failed to toggle todo");
    }
},

    deleteTodo: async (id) => {
        set({ loading: true });
        try {
            await axios.delete(`/task/${id}`);
            set((state) => ({
                todos: state.todos.filter((todo) => todo._id !== id),
                loading: false,
            }));
            toast.success("Todo deleted successfully");
        } catch (error) {
            set({ loading: false });
            toast.error(error.response?.data?.message || "Failed to delete todo");
        }
    },
}))