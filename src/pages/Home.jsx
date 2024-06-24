import { useNavigate } from "react-router-dom";
import { getTodos, todoApi } from "../api/todos";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  // TODO: useQuery 로 리팩터링 하세요.

  const { data, isPending, error } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error(error);
    return (
      <div style={{ fontSize: 24 }}>에러가 발생했습니다: {error.message}</div>
    );
  }

  return (
    <>
      <h2>서버통신 투두리스트 by useState</h2>
      <TodoForm todos={data} />
      <TodoList todos={data} />
    </>
  );
}
