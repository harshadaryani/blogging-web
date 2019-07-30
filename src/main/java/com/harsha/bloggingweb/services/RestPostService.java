package com.harsha.bloggingweb.services;

import com.harsha.bloggingweb.persistence.entity.Blog;

import java.util.List;

public interface RestPostService {
    List<Blog> findAll();

    Blog findById(Long id);

    Blog save(Blog blog);

    /*Blog update(Blog blog);*/

    void delete(Blog blog);


}
