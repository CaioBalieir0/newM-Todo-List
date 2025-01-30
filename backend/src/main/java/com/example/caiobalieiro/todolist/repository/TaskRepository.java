package com.example.caiobalieiro.todolist.repository;

import lombok.AllArgsConstructor;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.caiobalieiro.todolist.entity.Task;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends MongoRepository<Task, String>{
    
}
