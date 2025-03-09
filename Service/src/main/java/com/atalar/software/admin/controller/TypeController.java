package com.atalar.software.admin.controller;

import com.atalar.software.model.SubType;
import com.atalar.software.model.Type;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/type")
public class TypeController {

    @GetMapping
    public List<Type> getType()
    {
        return Arrays.asList(Type.values());
    }
    @GetMapping("/subType")
    public List<SubType> getSubType(@PathVariable("tip") String type)
    {
        try {
            Type tip = Type.valueOf(type.toUpperCase());
            return Arrays.stream(SubType.values())
                    .filter(altTip -> altTip.getType().equals(tip))
                    .collect(Collectors.toList());
        } catch (IllegalArgumentException e) {
            throw new RuntimeException("Geçersiz tip adı: " + type);
        }
    }
}
