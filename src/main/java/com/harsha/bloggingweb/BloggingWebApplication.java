package com.harsha.bloggingweb;

import com.harsha.bloggingweb.controllers.Post;
import com.harsha.bloggingweb.services.PostService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class BloggingWebApplication {

	public static void main(String[] args) {

		SpringApplication.run(BloggingWebApplication.class, args);
	}

}
