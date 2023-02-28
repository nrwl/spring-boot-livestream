package com.example.demo;

public class CreateTodoRequestBody {
    private String title;

    public TodoItem createTodoItem() {
        return new TodoItem(this.title);
    }

    public String getTitle() {
        return this.title;
    }
}