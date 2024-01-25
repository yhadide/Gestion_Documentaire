package com.ProjetStage.GestionDocuments.models;

import java.io.Serializable;
import java.sql.Timestamp;



import com.ProjetStage.GestionDocuments.models.Document;

import jakarta.persistence.*;

@Entity
@Table(name = "journal_audit")
public class JournalAudit implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idJournal;

    @ManyToOne
    @JoinColumn(name = "id_document")
    private Document document;

    @ManyToOne
    @JoinColumn(name = "id_utilisateur")
    private Utilisateurs utilisateur;

    @Column(name = "type_activite")
    private String typeActivite;

    private Timestamp horodatage;

    public JournalAudit() {
    }

    public JournalAudit(Integer idJournal, Document document, Utilisateurs utilisateur, String typeActivite,
            Timestamp horodatage) {
        this.idJournal = idJournal;
        this.document = document;
        this.utilisateur = utilisateur;
        this.typeActivite = typeActivite;
        this.horodatage = horodatage;
    }

    public Integer getIdJournal() {
        return idJournal;
    }

    public void setIdJournal(Integer idJournal) {
        this.idJournal = idJournal;
    }

    public Document getDocument() {
        return document;
    }

    public void setDocument(Document document) {
        this.document = document;
    }

    public Utilisateurs getUtilisateur() {
        return utilisateur;
    }

    public void setUtilisateur(Utilisateurs utilisateur) {
        this.utilisateur = utilisateur;
    }

    public String getTypeActivite() {
        return typeActivite;
    }

    public void setTypeActivite(String typeActivite) {
        this.typeActivite = typeActivite;
    }

    public Timestamp getHorodatage() {
        return horodatage;
    }

    @PrePersist
    public void setHorodatage() {this.horodatage = new Timestamp(System.currentTimeMillis());}

}
