package com.harsha.bloggingweb.persistence.model;

import com.harsha.bloggingweb.persistence.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao extends CrudRepository<User, Long> {
    User findByUsername(String username);
}
