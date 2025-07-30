// Exportar toda la sección de resumen final a PDF manteniendo formato y estética
function exportFullPageToPDF() {
    const doc = new window.jspdf.jsPDF({ unit: 'pt', format: 'a4' });
    const resumen = document.getElementById('summarySection');
    doc.html(resumen, {
        callback: function (doc) {
            doc.save('Chequeo_Financiero_Ecommerce_COMPLETO.pdf');
        },
        x: 20,
        y: 20,
        width: 560 // ancho útil en pt para A4
    });
}
window.exportFullPageToPDF = exportFullPageToPDF;
// Este archivo contendrá la lógica para exportar el resumen a PDF y enviar por correo.
// Se usará jsPDF para PDF y mailto para correo (MVP).

// Exportar resumen a PDF
function exportSummaryToPDF() {
    const doc = new window.jspdf.jsPDF({ unit: 'pt', format: 'a4' });
    const resumen = document.getElementById('summaryContent');
    doc.html(resumen, {
        callback: function (doc) {
            doc.save('Resumen_Diagnostico_Shopify.pdf');
        },
        x: 20,
        y: 20,
        width: 560 // ancho útil en pt para A4
    });
}

// Enviar resumen por correo (abre cliente de correo con mailto)
function sendSummaryByEmail() {
    const resumen = document.getElementById('summaryContent').innerText;
    const subject = encodeURIComponent('Resumen Diagnóstico Shopify');
    const body = encodeURIComponent(resumen);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

window.exportSummaryToPDF = exportSummaryToPDF;
window.sendSummaryByEmail = sendSummaryByEmail;
