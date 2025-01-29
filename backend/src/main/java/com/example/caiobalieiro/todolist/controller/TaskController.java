package com.example.caiobalieiro.todolist.controller;

import java.util.List;

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
    private TaskService taskService;

    @PostMapping
    List<Task> create(@RequestBody Task task) {
        return taskService.create(task);
    }

    @GetMapping
    List<Task> list(){
        return taskService.list();
    }

    @PutMapping
    List<Task> update(@RequestBody Task task){
        return taskService.update(task);
    }

    @DeleteMapping("{id}")
    List<Task> delete(@PathVariable("id") String id){
        return taskService.delete(id);
    }
}
