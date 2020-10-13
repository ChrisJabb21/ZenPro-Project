package com.cognixia.hackathon.dao;

import java.util.List;

import com.cognixia.hackathon.model.Order;

import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderDAO extends JpaRepository<Order, Integer>	{
	List<Order> findAll();
	List<Order> findAllByUserId(int userId);


}
