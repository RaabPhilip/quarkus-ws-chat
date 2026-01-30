package at.htl.pipo.entities;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;

import java.time.Instant;

@Entity
public class Message extends PanacheEntity {

    public Instant timestamp;

    @Column(columnDefinition = "text")
    public String text;

    public String userId;
}