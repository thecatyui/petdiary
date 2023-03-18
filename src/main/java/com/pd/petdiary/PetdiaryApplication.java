package com.pd.petdiary;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.*;
import org.springframework.context.annotation.*;

@Configuration
@SpringBootApplication(exclude={DataSourceAutoConfiguration.class})
public class PetdiaryApplication {

	public static void main(String[] args) {
		SpringApplication.run(PetdiaryApplication.class, args);
	}

}
