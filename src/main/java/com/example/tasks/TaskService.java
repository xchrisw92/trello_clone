package com.example.tasks;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {
    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<TaskEntity> getAllTasks(){
        return this.taskRepository.findAll();
    }

    public TaskEntity saveTask(TaskEntity task) {
        return this.taskRepository.save(task);
    }
}