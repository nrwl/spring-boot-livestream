package com.example.demo;

public class TodoItemNotFoundException extends RuntimeException {
    TodoItemNotFoundException(String id) {
        super("Could not find employee " + id);
    }
}
