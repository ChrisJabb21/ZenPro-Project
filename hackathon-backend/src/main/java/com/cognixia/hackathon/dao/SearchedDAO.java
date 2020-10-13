package com.cognixia.hackathon.dao;

import java.util.List;

import com.cognixia.hackathon.model.Searched;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SearchedDAO extends JpaRepository<Searched, Integer>{
	List<Searched> findAll();
	List<Searched> findAllSearchedByUserId(int userId);


}
