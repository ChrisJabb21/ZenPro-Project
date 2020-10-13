package com.cognixia.hackathon.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.cognixia.hackathon.model.User;

public interface UserDAO extends CrudRepository<User, Integer>{
	List<User> findAll();
	User findByUserId(int userId);
}
