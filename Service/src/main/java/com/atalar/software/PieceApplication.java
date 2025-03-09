package com.atalar.software;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
public class PieceApplication {

	public static void main(String[] args) {

		SpringApplication.run(PieceApplication.class, args);
	}

}
