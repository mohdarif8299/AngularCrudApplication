package com.rest.spring.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.rest.spring.entities.Student;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(path="students", collectionResourceRel = "student")
public interface StudentRepository extends JpaRepository<Student, Long> {	
//	 Page<Student> findById(@RequestParam("id") Long id,Pageable pageable);
}
