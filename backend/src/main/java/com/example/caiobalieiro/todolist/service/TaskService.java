package com.example.caiobalieiro.todolist.service;

import java.time.Instant;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import com.example.caiobalieiro.todolist.entity.Task;
import com.example.caiobalieiro.todolist.repository.TaskRepository;


@Service
public class TaskService {
    private final TaskRepository taskRepository;
    private final MongoTemplate mongoTemplate;

    @Autowired
    public TaskService(TaskRepository taskRepository,MongoTemplate mongoTemplate) {
        this.taskRepository = taskRepository;
        this.mongoTemplate = mongoTemplate;
    }

    public Task create(Task task) {
        if (task.getTitle() == null || task.getTitle().trim().isEmpty()) {
            throw new IllegalArgumentException("O título é obrigatório");
        }

        task.setCreatedAt(Instant.now());
        return taskRepository.save(task);
    }


    public List<Task> list(String title, String priority, String status) {
        Query query = new Query();

        if (title != null && !title.trim().isEmpty()) {
            query.addCriteria(Criteria.where("title").regex(title, "i"));
        }
        if (priority != null && !priority.trim().isEmpty()) {
            query.addCriteria(Criteria.where("priority").is(priority));
        }
        if (status != null && !status.trim().isEmpty()) {
            query.addCriteria(Criteria.where("status").is(status));
        }

        return mongoTemplate.find(query, Task.class);
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
        return list(null,null,null);
    }

    public Task getTaskById(String id) {
        Optional<Task> taskOptional = taskRepository.findById(id);

        return taskOptional.orElseThrow(() -> new IllegalArgumentException("Tarefa não encontrada com o ID: " + id));
    }

}
