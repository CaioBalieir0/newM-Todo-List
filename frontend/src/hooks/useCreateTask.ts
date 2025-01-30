import { useState } from "react";
import axios from "axios";

interface Task {
  title: string;
  description: string;
  status: string;
  priority: string;
}

export default function useCreateTask() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const createTask = async (newTask: Task) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    setMessage("");

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}`,
        newTask
      );

      if (response.status === 201) {
        setSuccess(true);
        setMessage(response.data.message);
      }
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || "Erro ao criar tarefa.");
    } finally {
      setLoading(false);
    }
  };

  return { createTask, loading, error, success, message };
}
