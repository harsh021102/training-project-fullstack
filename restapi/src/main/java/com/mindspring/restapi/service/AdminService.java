package com.mindspring.restapi.service;

import com.mindspring.restapi.models.Admin;
import com.mindspring.restapi.repo.AdminRepo;
import com.mindspring.restapi.repo.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
    @Autowired
    private AdminRepo repo;
    public Admin addAdmin(Admin admin)
    {
        return repo.save(admin);
    }
    public Admin login(Admin admin)
    {
        Admin existing = repo.findByEmail(admin.getEmail());
        if(existing!=null&&existing.getPassword().equals(admin.getPassword()))
            return existing;
        return null;
    }
}
