package com.bmarques.store.domain.purchase;

import com.bmarques.store.domain.supplier.SupplierClient;
import com.bmarques.store.domain.supplier.SupplierInfo;
import org.springframework.stereotype.Service;

@Service
public class PurchaseService {

//    private final RestTemplate restTemplate;
//    private DiscoveryClient discoveryClient;
    private SupplierClient supplierClient;

    public PurchaseService(SupplierClient supplierClient) {
        this.supplierClient = supplierClient;
    }

    public void generatePurchase(PurchaseEntity purchaseEntity) {
//        ResponseEntity<SupplierInfo> exchange = restTemplate.exchange("http://supplier/supplier/" + purchaseEntity.getAdress().getState(),
//                HttpMethod.GET, null, SupplierInfo.class);
// This is to list all instances
//        discoveryClient.getInstancesById("supplier")
//                .forEach(supplier -> System.out.println("localhost:"+supplier.getPort()));

        SupplierInfo supplierByState = supplierClient.getSupplierByState(purchaseEntity.getAdress().getState());

        System.out.println(supplierByState.getState());
    }
}
