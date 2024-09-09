const unidades = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
const decenas = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
const decenasDiez = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
const centenas = ['', 'Cien', 'Doscientos', 'Trescientos', 'Cuatrocientos', 'Quinientos', 'Seiscientos', 'Setecientos', 'Ochocientos', 'Novecientos'];

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

function traducir() {
    const numero = document.getElementById('numero').value;
    const resultado = convertirNumeroALetras(parseInt(numero));
    document.getElementById('resultado-es').textContent = resultado;
}

