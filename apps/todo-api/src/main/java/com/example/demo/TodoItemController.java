package com.example.demo;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController()
public class TodoItemController {
    private final TodoItemRepository repository;

    TodoItemController(TodoItemRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/todo")
    List<TodoItem> all() {
        return this.repository.findAll();
    }

    @PostMapping("/todo/create")
    TodoItem newTodoItem(@RequestBody CreateTodoRequestBody body) {
        return repository.save(body.createTodoItem());
    }

    @PostMapping("/todo/toggle")
    TodoItem toggle(@RequestBody ToggleTodoRequestBody body) {
        TodoItem toToggle = repository.getReferenceById(body.getId());
        toToggle.toggle();
        return repository.save(toToggle);
    }

    @DeleteMapping("/todo")
    void delete(@RequestBody ToggleTodoRequestBody body) {
        TodoItem toDelete = repository.getReferenceById(body.getId());
        repository.delete(toDelete);
        return;
    }
}