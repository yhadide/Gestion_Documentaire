package com.ProjetStage.GestionDocuments.repositories;
import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.ProjetStage.GestionDocuments.models.Document;

import com.ProjetStage.GestionDocuments.models.MetadonneesDocuments;

@Repository
@EnableJpaRepositories
public interface MetadonneesDocumentsRepository extends JpaRepository<MetadonneesDocuments, Integer> {
    List<MetadonneesDocuments> findByDocument(Document document);

    List<MetadonneesDocuments> findByDocumentIdDocument(Integer documentId);
}