package com.ProjetStage.GestionDocuments.models;

import jakarta.persistence.*;

import java.io.Serializable;
import java.time.LocalDate;

import com.ProjetStage.GestionDocuments.models.Document;

@Entity
@Table(name = "metadonnees_documents")
public class MetadonneesDocuments implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idMetadonnee;

    @ManyToOne
    @JoinColumn(name = "id_document")
    private Document document;

    private String auteur;

    private String motsCles;

    @Column(name = "date_creation")
    private LocalDate dateCreation;

    public MetadonneesDocuments() {
    }

    public MetadonneesDocuments(Integer idMetadonnee, Document document, String auteur, String motsCles,
            LocalDate dateCreation) {
        this.idMetadonnee = idMetadonnee;
        this.document = document;
        this.auteur = auteur;
        this.motsCles = motsCles;
        this.dateCreation = dateCreation;
    }

    public Integer getIdMetadonnee() {
        return idMetadonnee;
    }

    public void setIdMetadonnee(Integer idMetadonnee) {
        this.idMetadonnee = idMetadonnee;
    }

    public Document getDocument() {
        return document;
    }

    public void setDocument(Document document) {
        this.document = document;
    }

    public String getAuteur() {
        return auteur;
    }

    public void setAuteur(String auteur) {
        this.auteur = auteur;
    }

    public String getMotsCles() {
        return motsCles;
    }

    public void setMotsCles(String motsCles) {
        this.motsCles = motsCles;
    }

    public LocalDate getDateCreation() {
        return dateCreation;
    }

    public void setDateCreation(LocalDate dateCreation) {
        this.dateCreation = dateCreation;
    }

}
