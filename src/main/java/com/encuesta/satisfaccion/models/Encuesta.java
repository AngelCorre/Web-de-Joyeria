package com.encuesta.satisfaccion.models;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Entity
@Table(name = "encuesta_s")
public class Encuesta {

    @Id
    @Setter @Column(name = "Id")
    private long id;

    @Setter @Getter @Column(name = "satisfaccion")
    private float satisfaccion;

}
