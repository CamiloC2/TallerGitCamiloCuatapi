const unidades = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
const decenas = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
const decenasDiez = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
const centenas = ['', 'Cien', 'Doscientos', 'Trescientos', 'Cuatrocientos', 'Quinientos', 'Seiscientos', 'Setecientos', 'Ochocientos', 'Novecientos'];

const unidadesIngles = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const decenasIngles = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const decenasDiezIngles = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const centenasIngles = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

function convertirNumeroALetras(num) {
    if (num < 10) {
        return unidades[num];
    } else if (num >= 10 && num < 20) {
        return decenas[num - 10];
    } else if (num >= 20 && num < 100) {
        const unidad = num % 10;
        return decenasDiez[Math.floor(num / 10)] + (unidad ? ' y ' + unidades[unidad] : '');
    } else if (num >= 100 && num < 1000) {
        const resto = num % 100;
        const centena = Math.floor(num / 100);
        if (num === 100) {
            return 'cien';
        }
        return centenas[centena] + (resto ? ' ' + convertirNumeroALetras(resto) : '');
    } else if (num >= 1000 && num < 1000000) {
        const miles = Math.floor(num / 1000);
        const restoMiles = num % 1000;
        const milesTexto = miles === 1 ? 'mil' : convertirNumeroALetras(miles) + ' mil';
        return milesTexto + (restoMiles ? ' ' + convertirNumeroALetras(restoMiles) : '');
    }
}

function convertirNumeroALetrasIngles(num) {
    if (num < 10) {
        return unidadesIngles[num];
    } else if (num >= 10 && num < 20) {
        return decenasIngles[num - 10];
    } else if (num >= 20 && num < 100) {
        const unidad = num % 10;
        return decenasDiezIngles[Math.floor(num / 10)] + (unidad ? '-' + unidadesIngles[unidad] : '');
    } else if (num >= 100 && num < 1000) {
        const resto = num % 100;
        const centena = Math.floor(num / 100);
        if (num === 100) {
            return 'one hundred';
        }
        return centenasIngles[centena] + (resto ? ' and ' + convertirNumeroALetrasIngles(resto) : '');
    } else if (num >= 1000 && num < 1000000) {
        const miles = Math.floor(num / 1000);
        const restoMiles = num % 1000;
        const milesTexto = miles === 1 ? 'one thousand' : convertirNumeroALetrasIngles(miles) + ' thousand';
        return milesTexto + (restoMiles ? ' ' + convertirNumeroALetrasIngles(restoMiles) : '');
    }
}

function traducir() {
    const numero = document.getElementById('numero').value;
    const resultado = convertirNumeroALetras(parseInt(numero));
    document.getElementById('resultado-es').textContent = resultado;
}

function traducirIngles() {
    const numero = document.getElementById('numero').value;
    const resultado = convertirNumeroALetrasIngles(parseInt(numero));
    document.getElementById('resultado-en').textContent = resultado;
}
