package com.bmarques.store.domain.purchase;

import com.bmarques.store.domain.supplier.PurchaseOrderResponse;
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

    public PurchaseEntity generatePurchase(PurchaseDto purchaseDto) {
//        ResponseEntity<SupplierInfo> exchange = restTemplate.exchange("http://supplier/supplier/" + purchaseEntity.getAdress().getState(),
//                HttpMethod.GET, null, SupplierInfo.class);
// This is to list all instances
//        discoveryClient.getInstancesById("supplier")
//                .forEach(supplier -> System.out.println("localhost:"+supplier.getPort()));

        String state = purchaseDto.getAdress().getState();

        SupplierInfo supplierByState = supplierClient.getSupplierByState(state);

        PurchaseOrderResponse purchaseOrderResponse = supplierClient.generatePurchaseOrder(purchaseDto.getItems());

        return PurchaseEntity.builder()
                .purchaseOrderId(purchaseOrderResponse.getId())
                .preparationTime(purchaseOrderResponse.getPreparationTime())
                .addressDestiny(supplierByState.getAddress())
                .build();
    }
}
