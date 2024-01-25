package com.ProjetStage.GestionDocuments.models;

import com.ProjetStage.GestionDocuments.models.Document;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Table(name = "flux_travail_documents")
public class FluxTravailDocuments implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idFluxTravail;

    @ManyToOne
    @JoinColumn(name = "id_document")
    private Document document;

    @Column(name = "etape_flux_travail")
    private String etapeFluxTravail;

    @ManyToOne
    @JoinColumn(name = "id_utilisateur")
    private Utilisateurs utilisateur;

    private String statut;

    public FluxTravailDocuments() {
    }

    public FluxTravailDocuments(Integer idFluxTravail, Document document, String etapeFluxTravail,
            Utilisateurs utilisateur, String statut) {
        this.idFluxTravail = idFluxTravail;
        this.document = document;
        this.etapeFluxTravail = etapeFluxTravail;
        this.utilisateur = utilisateur;
        this.statut = statut;
    }

    public Integer getIdFluxTravail() {
        return idFluxTravail;
    }

    public void setIdFluxTravail(Integer idFluxTravail) {
        this.idFluxTravail = idFluxTravail;
    }

    public Document getDocument() {
        return document;
    }

    public void setDocument(Document document) {
        this.document = document;
    }

    public String getEtapeFluxTravail() {
        return etapeFluxTravail;
    }

    public void setEtapeFluxTravail(String etapeFluxTravail) {
        this.etapeFluxTravail = etapeFluxTravail;
    }

    public Utilisateurs getUtilisateur() {
        return utilisateur;
    }

    public void setUtilisateur(Utilisateurs utilisateur) {
        this.utilisateur = utilisateur;
    }

    public String getStatut() {
        return statut;
    }

    public void setStatut(String statut) {
        this.statut = statut;
    }

}
