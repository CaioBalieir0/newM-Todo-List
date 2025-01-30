package com.example.caiobalieiro.todolist.controller;

import java.time.Instant;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.caiobalieiro.todolist.entity.Task;
import com.example.caiobalieiro.todolist.service.TaskService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/todos")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
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
    public ResponseEntity<?> list(
            @RequestParam(required = false) String title,
            @RequestParam(required = false) String priority,
            @RequestParam(required = false) String status) {
        try {
            List<Task> tasks = taskService.list(title, priority, status);

            if (tasks.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(Collections.singletonMap("message", "Não existe nenhuma tarefa adicionada."));
            }

            Map<String, Object> response = new HashMap<>();
            response.put("message", "Tarefas encontradas com sucesso");
            response.put("data", tasks);

            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Collections.singletonMap("error", "Ocorreu um erro ao buscar as tarefas."));
        }
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
