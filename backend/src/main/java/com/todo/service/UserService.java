package com.todo.service;

import com.todo.model.User;
import com.todo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;


    public void registerUser(User user) {
        if (userRepo.findByUsername(user.getUsername()) != null) {
            throw new RuntimeException("Username already exists");
        }
        user.setPassword(user.getPassword());
        userRepo.save(user);
    }

    public User loginUser(String username, String password) {
        return userRepo.findByUsername(username);
    }
}
