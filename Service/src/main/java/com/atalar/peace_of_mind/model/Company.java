package com.atalar.peace_of_mind.model;

import jakarta.persistence.*;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="company")
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native")
    private Long id;
    private String name;
    private String city;
    private String district;
    private String neighborhood;
    private String address;
    @Enumerated
    private Type type;
    @Enumerated
    private SubType subType;
    private String location;
    private Double averagePoint;
    private long createdDate;
    private long updatedDate;
    @Enumerated
    private Status status = Status.ACTIVE;

}
