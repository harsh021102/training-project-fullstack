package com.mindspring.restapi.controllers;

import com.mindspring.restapi.models.Course;
import com.mindspring.restapi.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/course")
@CrossOrigin
public class CourseController {
    @Autowired
    private CourseService service;
    @PostMapping
    public ResponseEntity<Course> addCourse(@RequestBody Course course){
        return  new ResponseEntity<>(service.addCourse(course), HttpStatus.CREATED);
    }
    @GetMapping
    public ResponseEntity<List<Course>> getAllCourses(){
        return  ResponseEntity.ok(service.getAllCourses());
    }
    @DeleteMapping("{id}")
    public void deleteCourse(@PathVariable Long id) {
        service.deleteCourseById(id);
    }


    @GetMapping("/courses")
    public List<Course> getCoursesByCategory(@RequestParam String category) {
        return service.getCoursesByCategory(category);
    }

    @GetMapping("{id}")
    public ResponseEntity<Optional<Course>> getCoursesById(@PathVariable Long id) {
        Optional<Course> course = service.getCourseById(id);
        return ResponseEntity.ok(course);
    }
}
