package com.example.caiobalieiro.todolist.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.caiobalieiro.todolist.entity.Task;
import com.example.caiobalieiro.todolist.service.TaskService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/todos")
@AllArgsConstructor
public class TaskController {

    @Autowired
    private TaskService taskService;

    @PostMapping
    public ResponseEntity<List<Task>> create(@RequestBody Task task) {
        if (task.getTitle() == null || task.getDescription() == null) {
            return ResponseEntity.badRequest().body(null); // Retorna erro 400 se title ou description forem nulos
        }
        List<Task> tasks = taskService.create(task);
        return ResponseEntity.status(HttpStatus.CREATED).body(tasks);
    }

    @GetMapping
    public List<Task> list() {
        // Retorna todas as tarefas
        return taskService.list();
    }

    @PutMapping
    public List<Task> update(@RequestBody Task task) {
        // Atualiza uma tarefa
        return taskService.update(task);
    }

    @DeleteMapping("{id}")
    public List<Task> delete(@PathVariable("id") String id) {
        // Deleta uma tarefa pelo ID
        return taskService.delete(id);
    }
}
