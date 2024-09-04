package com.mindspring.restapi.controllers;

import com.mindspring.restapi.models.Course;
import com.mindspring.restapi.models.Student;
import com.mindspring.restapi.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/student")
@CrossOrigin
public class StudentController {
    @Autowired
    private StudentService service;
    @PostMapping
    public ResponseEntity<Student> addStudent(@RequestBody Student student){
        return  new ResponseEntity<>(service.addStudent(student), HttpStatus.CREATED);
    }
    @GetMapping
    public ResponseEntity<List<Student>> getAllStudents(){
        return  ResponseEntity.ok(service.getAllStudents());
    }

    @PutMapping("/add/{sid}/course/{cid}")
    public void registerCourse(@PathVariable Long sid,@PathVariable Long cid){
        service.updateCourseById(cid,sid);
    }
    @PostMapping("/login")
    public ResponseEntity<Student> login(@RequestBody Student student){
        Student student1= service.login(student);
        System.out.println(student1);
        if(student1!=null)
            return ResponseEntity.ok(student1);
        else
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
    }
    @PostMapping("/searchidbyemail/{email}")
    public ResponseEntity<Long> searchEmail(@PathVariable String email)
    {
        Student student1 = service.getStudentByEmail(email);
        if(student1!=null)
            return ResponseEntity.ok(student1.getId());
        else
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
    }
    @PostMapping("/search/{email}")
    public ResponseEntity<Student> searchStudentDetails(@PathVariable String email)
    {
        Student student1 = service.getStudentByEmail(email);
        if(student1!=null)
            return ResponseEntity.ok(student1);
        else
            return new ResponseEntity<>(null);
    }

    @PostMapping("/studentcoursedetails/{email}")
    public ResponseEntity<Set<Course>> getCourseOfStudent(@PathVariable String email)
    {
        Student student1 = service.getStudentByEmail(email);
        if(student1!=null)
            return ResponseEntity.ok(student1.getCourses());
        else
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
    }
    @DeleteMapping("{id}")
    public void deleteStudent(@PathVariable Long id) {
        service.deleteStudentById(id);
    }
}
