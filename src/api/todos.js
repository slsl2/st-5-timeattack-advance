import axios from "axios";

export const todoApi = axios.create({
  baseURL: "http://localhost:4000",
});

export const getTodos = async () => {
  try {
    const response = await todoApi.get("/todos");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addTodo = async (newTodo) => {
  try {
    const { data } = await todoApi.post("/todos", newTodo);
    return data;
  } catch (error) {
    console.log(error);
  }
};
