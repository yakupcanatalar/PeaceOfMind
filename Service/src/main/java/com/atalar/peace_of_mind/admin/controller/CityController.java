package com.atalar.peace_of_mind.admin.controller;

import com.atalar.peace_of_mind.model.SubType;
import com.atalar.peace_of_mind.model.Type;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/city")
@CrossOrigin(origins = "http://localhost:5174")  // Allow CORS for this controller
public class CityController {
//
//    @GetMapping
//    public List<String> getCity()
//    {
//
//    }

    /*
    @GetMapping("/district/{city_id}")
    public List<String> getDistrict(@PathVariable("city_id") String type) {

    }

    @GetMapping("/area/{district_id}")
    public List<String> getDistrict(@PathVariable("district_id") String type) {

    }

    @GetMapping("/neighbour/{area_id}")
    public List<String> getDistrict(@PathVariable("area_id") String type) {

    }
    */

}
