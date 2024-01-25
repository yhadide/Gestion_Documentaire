package com.ProjetStage.GestionDocuments.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.ProjetStage.GestionDocuments.models.Document;

@Repository
@EnableJpaRepositories
public interface DocumentRepository extends JpaRepository<Document, Integer> {

    List<Document> findByTypeDocument(String type);

}