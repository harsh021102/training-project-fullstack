package com.mindspring.restapi.service;

import com.mindspring.restapi.models.Course;
import com.mindspring.restapi.repo.CourseRepo;
import com.mindspring.restapi.repo.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseService {
    @Autowired
    private CourseRepo repo;
    public Course addCourse(Course course){
        return  repo.save(course);
    }
    public List<Course> getAllCourses(){
        return repo.findAll();
    }
    public void deleteCourseById(Long id) {
        repo.deleteById(id);
    }
    public List<Course> getCoursesByCategory(String category){
        return repo.findByCategory(category);
    }
    public Optional<Course> getCourseById(Long id)
    {
        return repo.findById(id);
    }
}
