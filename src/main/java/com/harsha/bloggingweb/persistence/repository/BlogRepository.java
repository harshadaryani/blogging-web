package com.harsha.bloggingweb.persistence.repository;

import com.harsha.bloggingweb.persistence.entity.Blog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;


public interface BlogRepository extends JpaRepository<Blog, Long>{
}
