package com.cognixia.hackathon.dao;

import java.util.List;

import com.cognixia.hackathon.model.ShoppingCart;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ShoppingCartDAO extends JpaRepository<ShoppingCart, Integer>{
	List<ShoppingCart> findAll();
	List<ShoppingCart> findAllInCartByUserId(int userId);
	
}
