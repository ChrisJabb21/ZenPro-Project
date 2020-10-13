package com.cognixia.hackathon.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognixia.hackathon.model.Event;

public interface EventDAO extends JpaRepository<Event, Integer>{
	List<Event> findAll();
	Event getEventByEventId(int id);
}
