package com.example.caiobalieiro.todolist.service;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.caiobalieiro.todolist.entity.Task;
import com.example.caiobalieiro.todolist.repository.TaskRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class TaskService {
    private final TaskRepository taskRepository;
    
    public List<Task> create(Task task) {
        taskRepository.save(task);   
        return list();  
    }

    public List<Task> list() {
        Sort sort = Sort.by(Sort.Order.asc("createdAt")); 
        return taskRepository.findAll(sort);  
    }

    public List<Task> update(Task task) {
        taskRepository.save(task);  
        return list();  
    }

    public List<Task> delete(String id) {
        taskRepository.deleteById(id);
        return list();
    }
}
