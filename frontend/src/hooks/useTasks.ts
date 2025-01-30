import { useEffect, useState } from "react";
import axios from "axios";

interface Task {
  _id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  createdAt: string;
}

interface Filter {
  title?: string;
  priority?: string;
}

export default function useTasks(filters: Filter) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}`, {
          params: {
            title: filters.title,
            priority: filters.priority,
          },
        });
        setTasks(response.data.data);
      } catch (err: any) {
        setError(err.message || "Erro ao buscar tarefas.");
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [filters]);

  return { tasks, loading, error };
}
