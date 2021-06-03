package com.bmarques.supplier.api.supplier;

import com.bmarques.supplier.domain.supplier.SupplierService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/supplier")
public class SupplierController {

    private final SupplierService service;
    private final SupplierMapper mapper;


    public SupplierController(SupplierService service, SupplierMapper mapper) {
        this.service = service;
        this.mapper = mapper;
    }

    @GetMapping("/{state}")
    public SupplierResponse getSupplierByState(@PathVariable String state) {
        return mapper.toResponse(service.getSupplierByState(state));
    }
}
