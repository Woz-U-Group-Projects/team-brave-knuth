package com.example.groupproject.controller;

import java.util.List;

import com.example.groupproject.models.Project;
import com.example.groupproject.models.ProjectRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hobbylist")
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
public class ProjectController {

  @Autowired
  ProjectRepository projectRepository;

  @GetMapping()
  public List<Project> getProjects() {
    if (projectRepository.findAll().size() == 0) {
      Project seedProject = new Project();
      seedProject.setCreatedBy("User");
      seedProject.setName("Sam's Hobby");
      seedProject.setHobby("Fishing");
      seedProject.setRate("9");
      projectRepository.save(seedProject);
    }
    return projectRepository.findAll();
  }

  @PostMapping()
  public Project addProject(@RequestBody Project project) {
    return projectRepository.save(project);
  }

  @DeleteMapping("/{id}")
  public void deleteProject(@PathVariable Long id) {
    projectRepository.deleteById(id);
  }

  @PutMapping("/{id}")
  public Project updateProject(@PathVariable Long id, @RequestBody Project project) {
    Project foundProject = projectRepository.findById(id).orElse(null);
    if (foundProject != null) {
      foundProject.setCreatedBy(project.getCreatedBy());
      foundProject.setName(project.getName());
      foundProject.setHobby(project.getHobby());
      foundProject.setRate(project.getRate());
      projectRepository.save(foundProject);
      return foundProject;
    }
    return null;
  }

}