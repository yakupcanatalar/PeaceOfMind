package com.atalar.peace_of_mind.admin.controller;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import com.atalar.peace_of_mind.model.Type;
import com.atalar.peace_of_mind.model.SubType;
import org.springframework.web.server.ResponseStatusException;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/type")
@CrossOrigin(origins = "http://localhost:5174")  // Allow CORS for this controller
public class TypeController {

    @GetMapping
    public List<Type> getType()
    {
        return Arrays.asList(Type.values());
    }

    @GetMapping("/subType/{tip}")
    public List<SubType> getSubType(@PathVariable("tip") String type) {
        try {
            // Convert the string 'type' to an enum value, handling the exception if invalid
            Type tip = Type.valueOf(type.toUpperCase());

            // Filter the SubTypes based on the Type and return the list
            return Arrays.stream(SubType.values())
                    .filter(altTip -> altTip.getType().equals(tip))
                    .collect(Collectors.toList());
        } catch (IllegalArgumentException e) {
            // Custom error message in case of invalid 'tip' value
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Geçersiz tip adı: " + type);
        }
    }

}
