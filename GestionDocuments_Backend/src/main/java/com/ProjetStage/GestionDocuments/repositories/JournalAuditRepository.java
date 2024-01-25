package com.ProjetStage.GestionDocuments.repositories;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.ProjetStage.GestionDocuments.models.JournalAudit;

@Repository
@EnableJpaRepositories
public interface JournalAuditRepository extends JpaRepository<JournalAudit, Integer> {
    List<JournalAudit> findByDocumentIdDocument(Integer documentId);
}