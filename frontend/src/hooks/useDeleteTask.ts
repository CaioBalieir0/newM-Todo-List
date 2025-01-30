import axios from "axios";
import { useState } from "react";

export default function useDeleteTask() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const deleteTask = async (taskId: string) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/${taskId}`
      );

      if (response.status === 200) {
        setSuccess(true);
        setMessage(response.data.message);
      }
    } catch (err: any) {
      console.log(err);
      setError(err.message || "Erro ao deletar tarefa.");
    } finally {
      setLoading(false);
    }
  };

  return { deleteTask, loading, error, success, message };
}
