package com.example.caiobalieiro.todolist.service;

import java.time.Instant;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.caiobalieiro.todolist.entity.Task;
import com.example.caiobalieiro.todolist.repository.TaskRepository;


@Service
public class TaskService {
    private final TaskRepository taskRepository;

    @Autowired
    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public Task create(Task task) {
        if (task.getTitle() == null || task.getTitle().trim().isEmpty()) {
            throw new IllegalArgumentException("O título é obrigatório");
        }

        task.setCreatedAt(Instant.now());
        return taskRepository.save(task);
    }


    public List<Task> list() {
        Sort sort = Sort.by(Sort.Order.asc("createdAt"));
        return taskRepository.findAll(sort);
    }

    public Task update(String id, Task task) {
        if (task.getTitle() == null || task.getTitle().trim().isEmpty()) {
            throw new IllegalArgumentException("O título é obrigatório");
        }

        Optional<Task> existingTask = taskRepository.findById(id);
        if (existingTask.isPresent()) {
            Task t = existingTask.get();
            t.setTitle(task.getTitle());
            t.setDescription(task.getDescription());
            t.setPriority(task.getPriority());
            t.setStatus(task.getStatus());
            t.setCreatedAt(Instant.now());


            return taskRepository.save(t);
        }
        return null;
    }

    public List<Task> delete(String id) {
        taskRepository.deleteById(id);
        return list();
    }

    public Task getTaskById(String id) {
        Optional<Task> taskOptional = taskRepository.findById(id);

        return taskOptional.orElseThrow(() -> new IllegalArgumentException("Tarefa não encontrada com o ID: " + id));
    }

}
