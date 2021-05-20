package ecommerce;

public class NfseDto {

    private String numero;
    private String codigoVerificacao;

    public NfseDto() {
    }

    public NfseDto(String numero, String codigoVerificacao) {
        this.numero = numero;
        this.codigoVerificacao = codigoVerificacao;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getCodigoVerificacao() {
        return codigoVerificacao;
    }

    public void setCodigoVerificacao(String codigoVerificacao) {
        this.codigoVerificacao = codigoVerificacao;
    }

    @Override
    public String toString() {
        return "NfseDto{" +
                "numero='" + numero + '\'' +
                ", codigoVerificacao='" + codigoVerificacao + '\'' +
                '}';
    }
}
