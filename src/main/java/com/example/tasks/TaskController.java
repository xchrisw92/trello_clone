package com.example.tasks;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TaskController {
    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }
    @GetMapping("/api/tasks")
    public ResponseEntity<List<TaskEntity>> getTasks(){
        return new ResponseEntity<>(this.taskService.getAllTasks(), HttpStatus.OK);
    }
    @PostMapping("/api/task")
    public ResponseEntity<TaskEntity> saveTask(@RequestBody TaskEntity task) {
        return new ResponseEntity<>(this.taskService.saveTask(task), HttpStatus.CREATED);
    }
}