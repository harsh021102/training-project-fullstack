package com.mindspring.restapi.repo;

import com.mindspring.restapi.models.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepo extends JpaRepository<Admin,Integer> {

    Admin findByEmail(String email);
}
