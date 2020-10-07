package com.cognixia.hackathon.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognixia.hackathon.dao.EventDAO;
import com.cognixia.hackathon.dao.OrderDAO;
import com.cognixia.hackathon.dao.ProductDAO;
import com.cognixia.hackathon.dao.SearchedDAO;
import com.cognixia.hackathon.dao.ShoppingCartDAO;
import com.cognixia.hackathon.dao.UserDAO;
import com.cognixia.hackathon.dao.ViewedDAO;
import com.cognixia.hackathon.model.Event;
import com.cognixia.hackathon.model.User;

@RequestMapping("/api")
@RestController
public class HackathonController {
	
	@Autowired
	UserDAO userRepo;
	@Autowired
	ProductDAO productRepo;
	@Autowired
	ShoppingCartDAO ShoppingCartRepo;
	@Autowired
	OrderDAO OrderRepo;
	@Autowired
	SearchedDAO SearchedRepo;
	@Autowired
	ViewedDAO ViewedRepo;
	@Autowired
	EventDAO eventRepo;
	
	//I only added dummy data into the User Table, the following function should print out 5 empty lists, but if you check
	//the URL you should see the dummy data I put in
	@GetMapping("/")
	public List <User> home() {
		System.out.println(productRepo.findAll());
		System.out.println(ShoppingCartRepo.findAll());
		System.out.println(OrderRepo.findAll());
		System.out.println(SearchedRepo.findAll());
		System.out.println(ViewedRepo.findAll());
		return userRepo.findAll();  //   http://localhost:8080/
	}

	@GetMapping("/events")
	public List<Event> getAllEvents() {
		return eventRepo.findAll();
	}
	
	
	
}
