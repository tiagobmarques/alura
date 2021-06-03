package com.bmarques.supplier.domain.supplier;

import org.springframework.stereotype.Service;

@Service
public class SupplierService {

    private SupplierRepository repository;

    public SupplierService(SupplierRepository repository) {
        this.repository = repository;
    }

    public SupplierEntity getSupplierByState(final String state) {
        return repository.findByState(state);
    }
}
