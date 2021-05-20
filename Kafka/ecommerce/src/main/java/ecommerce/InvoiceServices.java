package ecommerce;

import org.apache.kafka.clients.consumer.ConsumerRecord;

import java.util.HashMap;

public class InvoiceServices {

    public static void main(String[] args) {
        InvoiceServices invoiceServices = new InvoiceServices();
        try (KafkaService service = new KafkaService<>(InvoiceServices.class.getSimpleName(),
                "INVOICE_NOT_CARRIED",
                invoiceServices::parse,
                NfseDto.class,
                new HashMap<String, String>())) {
            service.run();
        }
    }

    private void parse(ConsumerRecord<String, NfseDto> record) {
        System.out.println("------------------------------------------");
        System.out.println("Processing new order, checking for fraud");
        System.out.println(record.key());
        System.out.println(record.value());
        System.out.println(record.partition());
        System.out.println(record.offset());
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            // ignoring
            e.printStackTrace();
        }
        System.out.println("Order processed");
    }

}

