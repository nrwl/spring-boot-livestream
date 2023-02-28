package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class TodoItem {
    private static Integer counter = 0;
    @Id
    private String id;
    private String title;
    private boolean completed;

    public TodoItem() {
    }

    TodoItem(String title) {
        counter++;
        this.id = counter.toString();
        this.title = title;
        this.completed = false;
    }

    public void toggle() {
        this.completed = !this.completed;
    }

    public String getId() {
        return this.id;
    }

    public String getTitle() {
        return this.title;
    }

    public boolean getCompleted() {
        return this.completed;
    }

    // @Override
    // public boolean equals(Object o) {
    // if (this == o) {
    // return true;
    // }
    // if (!(o instanceof TodoItem)) {
    // return false;
    // }
    // TodoItem todoItem = (TodoItem) o;
    // return this.id == todoItem.id && this.title == todoItem.title &&
    // this.completed == todoItem.completed;
    // }

    // @Override
    // public String toString() {
    // return "TodoItem{" + "id=" + this.id + ", title='" + this.title + '\'' + ",
    // completed=" + this.completed + '}';
    // }

    // @Override
    // public int hashCode() {
    // return Objects.hash(this.id,this.title,this.completed);
}
