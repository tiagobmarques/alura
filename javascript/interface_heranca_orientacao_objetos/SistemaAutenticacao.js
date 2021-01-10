export class SistemaAutenticacao{
    static login(autenticar, senha) {
        if (SistemaAutenticacao.ehAutenticavel(autenticar)) {
            return autenticar.autenticavel(senha);
        }

        return false;
    }

    static ehAutenticavel(autenticar) {
        return "autenticavel" in autenticar &&
        autenticar.autenticavel instanceof Function;
    }
}