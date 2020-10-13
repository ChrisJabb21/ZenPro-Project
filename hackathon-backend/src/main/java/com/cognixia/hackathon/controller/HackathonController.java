package com.cognixia.hackathon.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.cognixia.hackathon.dao.EventDAO;
import com.cognixia.hackathon.dao.OrderDAO;
import com.cognixia.hackathon.dao.ProductDAO;
import com.cognixia.hackathon.dao.SearchedDAO;
import com.cognixia.hackathon.dao.ShoppingCartDAO;
import com.cognixia.hackathon.dao.UserDAO;
import com.cognixia.hackathon.dao.ViewedDAO;
import com.cognixia.hackathon.model.Event;
import com.cognixia.hackathon.model.Order;
import com.cognixia.hackathon.model.Product;
import com.cognixia.hackathon.model.Searched;
import com.cognixia.hackathon.model.ShoppingCart;
import com.cognixia.hackathon.model.User;
import com.cognixia.hackathon.model.Viewed;

import javassist.NotFoundException;

@RequestMapping("/api")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HackathonController {

	@Autowired
	UserDAO userRepo;
	@Autowired
	ProductDAO productRepo;
	@Autowired
	ShoppingCartDAO shoppingCartRepo;
	@Autowired
	OrderDAO orderRepo;
	@Autowired
	SearchedDAO searchedRepo;
	@Autowired
	ViewedDAO viewedRepo;
	@Autowired
	EventDAO eventRepo;

	// I only added dummy data into the User Table, the following function should
	// print out 5 empty lists, but if you check
	// the URL you should see the dummy data I put in
	@GetMapping("/")
	public List<User> home() {
		// make get mappings to find all below by user id
		System.out.println(productRepo.findAll());
		System.out.println(shoppingCartRepo.findAll());
		System.out.println(orderRepo.findAll());
		System.out.println(searchedRepo.findAll());
		System.out.println(viewedRepo.findAll());
		return userRepo.findAll(); // http://localhost:8080/
	}

	@GetMapping("/products")
	public List<Product> getAllProducts() {
		return productRepo.findAll();
	}

	@GetMapping("/orders")
	public List<Order> getAllOrders() {
		return orderRepo.findAll();
	}

	// User resources
	@GetMapping("user/{id}")
	public User getUserById(@PathVariable int id) throws NotFoundException {
		User user = userRepo.findByUserId(id);
		return user;
	}

	@GetMapping("user/orders/{id}")
	public List<Order> getOrdersByUserId(@PathVariable int id) {
		List<Order> orders = orderRepo.findAllByUserId(id);
		return orders;
	}

	@GetMapping("/events")
	public List<Event> getAllEvents() {
		return eventRepo.findAll();
	}

	@GetMapping("/events/{id}")
	public Event getEventById(@PathVariable int id) {
		Optional<Event> event = eventRepo.findById(id);

		if (event.isPresent()) {
			return event.get();
		}

		return new Event();
	}

	@PostMapping("/events/add")
	public void addEvent(@RequestBody Event event) {
		event.setEventId(0);

		Event added = eventRepo.save(event);

		System.out.println("Added: " + added);
	}

	@PutMapping("/events/update")
	public @ResponseBody String updateEvent(@RequestBody Event event) {

		Optional<Event> found = eventRepo.findById(event.getEventId());

		if (found.isPresent()) {
			eventRepo.save(event);
			return "Saved: " + event.toString();
		} else {
			return "Could not update event";
		}

	}

	@DeleteMapping("/delete/event/{id}")
	public ResponseEntity<String> deleteEvent(@PathVariable int id) {

		Optional<Event> found = eventRepo.findById(id);

		if (found.isPresent()) {
			eventRepo.deleteById(id);

			return ResponseEntity.status(200).body("Event has been deleted");

		} else {
			return ResponseEntity.status(400).header("Event id", id + "").body("Event not found");
		}
	}

	// get all searched items by user id
	@GetMapping("user/searched/{id}")
	public List<Searched> findAllSearchedByUserId(@PathVariable int id) {
		List<Searched> searched = searchedRepo.findAllSearchedByUserId(id);
		return searched;
	}

	// Get all objects in shopping cart by userid of user
	@GetMapping("user/cart/{id}")
	public List<ShoppingCart> findAllInCartByUserId(@PathVariable int id) {
		List<ShoppingCart> shoppingCart = shoppingCartRepo.findAllInCartByUserId(id);
		return shoppingCart;
	}

	// view browse history of items by userid
	@GetMapping("user/history/{id}")
	public List<Viewed> findAllViewedByUserId(@PathVariable int id) {
		List<Viewed> browse_history = viewedRepo.findAllViewedByUserId(id);
		return browse_history;
	}

	@GetMapping("/users")
	public List<User> getAllUsers() {
		return userRepo.findAll();
	}
}
