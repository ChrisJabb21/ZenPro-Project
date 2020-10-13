package com.cognixia.hackathon.dao;

import com.cognixia.hackathon.model.Tweets;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TweetsDAO extends CrudRepository<Tweets, String> {
	List <Tweets> findAll();
    Optional<Tweets> findByUsername(String username);
    boolean existsTweetsByUsername(String username);
    void deleteByUsername(String username);

}
