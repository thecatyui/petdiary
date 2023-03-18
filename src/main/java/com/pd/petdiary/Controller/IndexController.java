package com.pd.petdiary.Controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IndexController implements ErrorController{

    private static final String PATH = "/error";

    @GetMapping("/api")

    public List<String> Hello(){
        return Arrays.asList("서버 포트는 8080", "리액트 포트는 3000");
    }
    
    public String test() {
        return "Hello, world!";
    }

    public String getErrorPath() {
        return PATH;
    }
}