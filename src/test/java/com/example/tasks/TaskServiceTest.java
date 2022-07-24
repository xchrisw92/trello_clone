package com.example.tasks;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class TaskServiceTest {

    @Mock
    private TaskRepository taskRepository;

    private TaskService taskService;

    @BeforeEach
    void setUp(){
        taskService = new TaskService(taskRepository);
    }

    @Test
    void shouldGetAllTasks() {
        // Arrange
        TaskEntity taskOne = new TaskEntity();
        TaskEntity taskTwo = new TaskEntity();
        taskOne.setTitle("Take out trash");
        taskTwo.setTitle("Clean dishes");
        when(taskRepository.findAll()).thenReturn(List.of(taskOne, taskTwo));
        // Act
        List<TaskEntity> actualList = this.taskService.getAllTasks();
        // Assert
        assertThat(actualList.size()).isEqualTo(2);
        assertThat(actualList.get(0).getTitle()).isEqualTo(taskOne.getTitle());
    }

    @Test
    void shouldSaveATask() {
        // Arrange
        TaskEntity task = new TaskEntity();
        task.setId(1L);
        task.setTitle("Go poo");
        when(taskRepository.save(task)).thenReturn(task);
        // Act
        TaskEntity actual = taskService.saveTask(task);
        // Assert
        assertThat(actual).isEqualTo(task);
    }
}
