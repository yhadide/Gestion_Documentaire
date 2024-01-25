package com.ProjetStage.GestionDocuments.repositories;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.ProjetStage.GestionDocuments.models.FluxTravailDocuments;

@Repository
@EnableJpaRepositories
public interface FluxTravailDocumentsRepository extends JpaRepository<FluxTravailDocuments, Integer> {
    List<FluxTravailDocuments> findByDocumentIdDocument(Integer documentId);
}