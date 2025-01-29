package com.example.caiobalieiro.todolist.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.CreatedDate;

import com.example.caiobalieiro.todolist.entity.enums.Status;
import com.example.caiobalieiro.todolist.entity.enums.Priority;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "tasks")  
public class Task {
    @Id
    private String id;
    private String title;
    private String description;
    private Priority priority;
    private Status status;

    @CreatedDate
    private Instant createdAt; 
}
