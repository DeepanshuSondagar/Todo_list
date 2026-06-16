import  Todo from "../model/todo.model.js";

export const getTodos = async (req, res) => {
  const todos = await Todo.find({ userId: req.userId }).sort({ createdAt: -1 });
  res.json(todos);
  console.log(todos);
};
 
export const createTodo = async (req, res) => {
  if (!req.body.text) return res.status(400).json({ message: "Text required" });
  const todo = await new Todo({ text: req.body.text, userId: req.userId }).save();
  res.status(201).json(todo);
  
};

export const updateTodo = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: "Request body is missing. Check express.json() middleware." });
  }

  const todo = await Todo.findOneAndUpdate(
    { _id: req.params.id, userId: req.userId },
    { done: req.body.done },
    { returnDocument: "after" }  // ← new way
);

  if (!todo) return res.status(404).json({ message: "Todo not found" });
  res.json(todo);
};

export const deleteTodo = async (req, res) => {
  const todo = await Todo.findOneAndDelete({ _id: req.params.id, userId: req.userId });
  if (!todo) return res.status(404).json({ message: "Todo not found" });
  res.json({ message: "Deleted" });
};