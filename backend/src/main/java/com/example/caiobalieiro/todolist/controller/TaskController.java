package com.example.caiobalieiro.todolist.controller;

import java.time.Instant;
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
    public ResponseEntity<Task> create(@RequestBody Task task) {
        try {
            // Validação do título
            if (task.getTitle() == null || task.getTitle().trim().isEmpty()) {
                throw new IllegalArgumentException("O título é obrigatório");
            }

            task.setCreatedAt(Instant.now());

            // Criando a tarefa
            Task createdTask = taskService.create(task);

            // Retorna a tarefa criada
            return ResponseEntity.status(HttpStatus.CREATED).body(createdTask);
        } catch (IllegalArgumentException e) {
            // Retorna erro 400 com a mensagem de exceção
            return ResponseEntity.badRequest().body(null);  // Ou pode colocar a mensagem no corpo
        }
    }


    @GetMapping
    public List<Task> list() {
        return taskService.list();
    }
    @GetMapping("/{id}")
    public ResponseEntity<Task> getTaskById(@PathVariable("id") String id) {
        try {
            Task task = taskService.getTaskById(id);
            return ResponseEntity.ok(task);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Task> update(@PathVariable("id") String id, @RequestBody Task task) {
        Task updatedTask = taskService.update(id, task);
        if (updatedTask == null) {
            return ResponseEntity.notFound().build();
        }
        if (task.getTitle() == null || task.getTitle().trim().isEmpty()) {
            return ResponseEntity.badRequest().body(null);
        }
        return ResponseEntity.ok(updatedTask);
    }

    @DeleteMapping("{id}")
    public List<Task> delete(@PathVariable("id") String id) {
        return taskService.delete(id);
    }


}
