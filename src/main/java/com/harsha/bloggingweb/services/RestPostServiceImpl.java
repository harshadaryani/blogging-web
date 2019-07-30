package com.harsha.bloggingweb.services;

import com.harsha.bloggingweb.persistence.entity.Blog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.harsha.bloggingweb.persistence.repository.BlogRepository;

import java.util.List;

@Service
public class RestPostServiceImpl implements RestPostService{

    @Autowired
    BlogRepository blogRepository;

    public List<Blog> findAll() {
        return blogRepository.findAll();
    }

    public Blog findById(Long id) {
        return blogRepository.findById(id).orElse(null);
    }

    public Blog save(Blog blog) {
        return (Blog) blogRepository.save(blog);
    }

    /*public Blog update(Blog blog) {
        return blogRepository.
    }*/

    public void delete(Blog blog) {
        blogRepository.delete(blog);
    }
}
