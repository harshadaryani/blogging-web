package com.harsha.bloggingweb.controllers;

import com.harsha.bloggingweb.persistence.entity.Blog;
import com.harsha.bloggingweb.services.RestPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collections;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api/posts")
@CrossOrigin("*")
public class PostResource {
    @Autowired
    RestPostService restPostService;

    private final Logger log = LoggerFactory.getLogger(PostResource.class);


    /* Get all blogs*/
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Blog> getAllposts() {
        return restPostService.findAll();
    }

    @GetMapping("/{id}")
    public Blog getBlogById(@PathVariable(value = "id") Long id) {
        Blog blog = restPostService.findById(id);
        if(blog == null) {
            return null;
        }
        log.info("blog getbyId" + blog);
        return blog;
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public Blog createBlog(@Valid @RequestBody Blog blog) {
        return restPostService.save(blog);
    }

    @PutMapping("/{id}")
    @ResponseBody
    public ResponseEntity<Blog> updateBlog(@PathVariable(value = "id") Long id, @Valid @RequestBody Blog blogDetails) {
        Blog blog = restPostService.findById(id);
        if(blog == null) {
            return ResponseEntity.notFound().build();
        }

        Blog updateBlog = restPostService.save(blogDetails);
        return ResponseEntity.ok().body(updateBlog);
    }

    /*delete a blog by id*/
    @DeleteMapping("/{id}")
    public ResponseEntity<Blog> deleteBlog(@PathVariable(value = "id") Long id) {
        Blog blog = restPostService.findById(id);
        if(blog == null) {
            return  ResponseEntity.notFound().build();
        }
        restPostService.delete(blog);
        return ResponseEntity.ok().build();
    }
}
