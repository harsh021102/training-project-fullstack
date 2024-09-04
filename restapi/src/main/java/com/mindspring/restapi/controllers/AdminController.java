package com.mindspring.restapi.controllers;


import com.mindspring.restapi.models.Admin;
import com.mindspring.restapi.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin
public class AdminController {
    @Autowired
    private AdminService service;

    @PostMapping
    public ResponseEntity<Admin> addStudent(@RequestBody Admin admin){
        return  new ResponseEntity<>(service.addAdmin(admin), HttpStatus.CREATED);
    }
    @PostMapping("/login")
    public ResponseEntity<Admin> login(@RequestBody Admin admin){
        Admin adm= service.login(admin);
        if(adm!=null)
            return ResponseEntity.ok(adm);
        else
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
    }
}
