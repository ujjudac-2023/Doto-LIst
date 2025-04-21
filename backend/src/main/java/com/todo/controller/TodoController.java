package com.todo.controller;

import com.todo.model.Todo;
import com.todo.model.User;
import com.todo.service.TodoService;
import com.todo.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todos")
@CrossOrigin(origins = "http://localhost:5173")
@Slf4j
public class TodoController {

    @Autowired
    private TodoService todoService;

    @Autowired
    private UserService userService;

    @GetMapping
    public List<Todo> getAllTodos() {
        log.info("Fetching all todos");
        List<Todo> todos = todoService.getAllTodos();
        log.info("Successfully fetched {} todos", todos.size());
        return todos;
    }

    @PostMapping
    public Todo createTodo(@RequestBody Todo todo) {
        log.info("Creating new todo: {}", todo.getText());
        Todo createdTodo = todoService.createTodo(todo);
        log.info("Todo created successfully with ID: {}", createdTodo.getId());
        return createdTodo;
    }

    @PutMapping("/{id}")
    public Todo updateTodo(@PathVariable Long id, @RequestBody Todo todo) {
        log.info("Updating todo with ID: {}", id);
        Todo updatedTodo = todoService.updateTodo(id, todo);
        log.info("Successfully updated todo with ID: {}", updatedTodo.getId());
        return updatedTodo;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTodo(@PathVariable Long id) {
        log.info("Attempting to delete todo with ID: {}", id);
        todoService.deleteTodo(id);
        log.info("Successfully deleted todo with ID: {}", id);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/signup")
    public ResponseEntity<String> signUp(@RequestBody User user) {
        try {
            log.info("Attempting to sign up user with username: {}, email: {}, password: {}",
                    user.getUsername(), user.getEmail(), user.getPassword());
            userService.registerUser(user);
            log.info("User successfully registered with username: {}", user.getUsername());
            return ResponseEntity.ok("User registered successfully");
        } catch (Exception e) {
            log.error("Registration failed for username: {}", user.getUsername(), e);
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Registration failed: " + e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User user) {
        log.info("Login attempt for username: {}", user.getUsername());
        try {
            User loggedInUser = userService.loginUser(user.getUsername(), user.getPassword());
            if (loggedInUser == null) {
                log.warn("Login failed: User not found for username: {}", user.getUsername());
                return ResponseEntity.status(404).body(null);
            }
            log.info("Login successful for username: {}", loggedInUser.getUsername());
            return ResponseEntity.ok(loggedInUser);
        } catch (RuntimeException e) {
            log.error("Login failed for username: {}. Error: {}", user.getUsername(), e.getMessage());
            return ResponseEntity.status(401).body(null);
        }
    }

}