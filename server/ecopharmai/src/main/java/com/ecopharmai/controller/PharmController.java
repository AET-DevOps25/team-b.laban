package com.ecopharmai.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class PharmController {

    @GetMapping("/hello")
    public String sayHello() {
        return "Hello from Spring Boot REST API!";
    }

    @PostMapping("/echo")
    public String echo(@RequestBody String message) {
        return "You said: " + message;
    }
}