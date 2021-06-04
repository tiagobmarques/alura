package com.bmarques.store.domain.supplier;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@FeignClient("supplier")
public interface SupplierClient {

    @RequestMapping("supplier/{state}")
    SupplierInfo getSupplierByState(@PathVariable String state);
}
