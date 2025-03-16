package com.atalar.peace_of_mind.DTOs;

public class CityDto {
    private Long id;
    private String name;

    // Constructor
    public CityDto(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "CityDto{id=" + id + ", name='" + name + "'}";
    }
}
