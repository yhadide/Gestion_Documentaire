package com.ProjetStage.GestionDocuments.services;

import com.ProjetStage.GestionDocuments.exceptions.ResourceNotFoundException;
import com.ProjetStage.GestionDocuments.models.Document;
import com.ProjetStage.GestionDocuments.models.MetadonneesDocuments;
import com.ProjetStage.GestionDocuments.repositories.MetadonneesDocumentsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MetadonneesDocumentsService {

    @Autowired
    private MetadonneesDocumentsRepository metadonneesDocumentsRepository;

    public List<MetadonneesDocuments> findAll() {
        return metadonneesDocumentsRepository.findAll();
    }

    public MetadonneesDocuments findById(Integer id) {
        return metadonneesDocumentsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Metadata not found with id=" + id));
    }

    public List<MetadonneesDocuments> findByDocument(Document document) {
        return metadonneesDocumentsRepository.findByDocument(document);
    }

    public List<MetadonneesDocuments> findByDocumentId(Integer documentId) {
        return metadonneesDocumentsRepository.findByDocumentIdDocument(documentId);
    }

    public MetadonneesDocuments save(MetadonneesDocuments metadonneesDocuments) {
        return metadonneesDocumentsRepository.save(metadonneesDocuments);
    }

    public void delete(MetadonneesDocuments metadonneesDocuments) {
        metadonneesDocumentsRepository.delete(metadonneesDocuments);
    }
}