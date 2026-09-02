// Función para redirigir directamente a WhatsApp con un mensaje predeterminado del producto elegido
function cotizarWhatsApp(producto) {
    // Número principal de atención (Sucursal Manquehue/Atención General)
    const telefono = "56965883781";
    const mensaje = `Hola! Estuve viendo la landing de The Popular Design y me gustaría cotizar e información sobre: ${producto}`;
    
    // Crear la URL codificada
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    
    // Abrir en nueva pestaña
    window.open(url, '_blank');
}