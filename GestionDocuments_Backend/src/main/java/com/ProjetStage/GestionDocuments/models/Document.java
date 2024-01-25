package com.ProjetStage.GestionDocuments.models;

import java.io.Serializable;
import java.time.LocalDate;

import jakarta.persistence.*;

@Entity
@Table(name = "documents")
public class Document implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idDocument;

	@Column(name = "type_document")
	private String typeDocument;

	private String expediteur;

	private String destinataire;

	private String contenu;

	@Lob
	@Column(name = "document_img")
	private byte[] documentImg; // Store the image data as a byte array

	@Column(name = "date")
	private LocalDate date;

	public Document() {
	}

	public Document(Integer idDocument, String typeDocument, String expediteur, String destinataire, String contenu,
					LocalDate date) {
		super();
		this.idDocument = idDocument;
		this.typeDocument = typeDocument;
		this.expediteur = expediteur;
		this.destinataire = destinataire;
		this.contenu = contenu;
		this.date = date;
	}

	public Integer getIdDocument() {
		return idDocument;
	}

	public void setIdDocument(Integer idDocument) {
		this.idDocument = idDocument;
	}

	public String getTypeDocument() {
		return typeDocument;
	}

	public void setTypeDocument(String typeDocument) {
		this.typeDocument = typeDocument;
	}

	public String getExpediteur() {
		return expediteur;
	}

	public void setExpediteur(String expediteur) {
		this.expediteur = expediteur;
	}

	public String getDestinataire() {
		return destinataire;
	}

	public void setDestinataire(String destinataire) {
		this.destinataire = destinataire;
	}

	public String getContenu() {
		return contenu;
	}

	public void setContenu(String contenu) {
		this.contenu = contenu;
	}

	public byte[] getDocumentImg() {
		return documentImg;
	}

	public void setDocumentImg(byte[] documentImg) {
		this.documentImg = documentImg;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

}
