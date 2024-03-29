package JAX.WS.SOAP.domain.user;

import JAX.WS.SOAP.domain.util.DateAdapter;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter;
import java.util.Date;

public class TokenUsuario {

    @XmlElement(required = true)
    private String token;
    @XmlJavaTypeAdapter(DateAdapter.class)
    @XmlElement(required = true)
    private Date dataValidade;

    //JAX-B precisa desse construtor
    TokenUsuario() {
    }

    public TokenUsuario(String token, Date dataValidade) {
        this.token = token;
        this.dataValidade = dataValidade;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Date getDataValidade() {
        return dataValidade;
    }

    public void setDataValidade(Date dataValidade) {
        this.dataValidade = dataValidade;
    }


    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((token == null) ? 0 : token.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        TokenUsuario other = (TokenUsuario) obj;
        if (token == null) {
            if (other.token != null)
                return false;
        } else if (!token.equals(other.token))
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "TokenUsuario [token=" + token + ", dataValidade=" + dataValidade + "]";
    }
}
