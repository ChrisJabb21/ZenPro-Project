package com.cognixia.hackathon.dao;

import java.util.List;

import com.cognixia.hackathon.model.Viewed;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ViewedDAO extends JpaRepository<Viewed, Integer> {
	List<Viewed> findAll();
	List<Viewed> findAllViewedByUserId(int userId);
}
