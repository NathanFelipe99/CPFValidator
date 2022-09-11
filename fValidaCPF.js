function fValidaCPF(pCpf) {
    let wSoma = 0;

    if (typeof pCpf != 'string') return false;
    const wCpf = pCpf.replace(/[\s.-]*/igm, '');

    if (!wCpf || (wCpf[0].repeat(wCpf.length) == wCpf) || wCpf.length != 11) return false;

    function fDigitValidation(pCpfParcial) {
        const wCpf = Array.from(pCpfParcial);

        let wCountDesc = wCpf.length + 1;

        wSoma = wCpf.reduce((wAc, wVal) => {
            wAc += (wCountDesc * parseInt(wVal));
            wCountDesc--;
            return wAc;
        }, 0);

        const wDigito = 11 - (wSoma % 11);
        return wDigito > 9 ? '0' : wDigito.toString();

    }

    const wDigito1 = fDigitValidation(wCpf.slice(0, -2));
    const wDigito2 = fDigitValidation(wCpf.slice(0, -2) + wDigito1);

    const wNovoCpf = wCpf.slice(0, -2) + wDigito1 + wDigito2;
    return wCpf == wNovoCpf;
}