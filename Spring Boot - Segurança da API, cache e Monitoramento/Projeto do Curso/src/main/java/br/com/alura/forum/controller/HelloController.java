package br.com.alura.forum.controller;

import java.util.Optional;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloController {
	
	@RequestMapping("/")
	@ResponseBody
	public String hello() {
		return "Hello World!";
	}

	@GetMapping("/api")
	@ResponseBody
	public String getFoos(@RequestParam Optional<String> id){
		return "ID: " + id.orElseGet(() -> "not provided");
	}

}
