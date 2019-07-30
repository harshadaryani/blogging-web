package com.harsha.bloggingweb.services;

import com.harsha.bloggingweb.persistence.model.User;
import com.harsha.bloggingweb.persistence.model.UserDto;

import java.util.List;

public interface UserService {

    User save(UserDto user);
    List<User> findAll();
    void delete(long id);
    User findOne(String username);

    User findById(Long id);
}
