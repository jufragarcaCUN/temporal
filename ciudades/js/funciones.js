// ======================================================
// 1. NAVEGACIÓN ENTRE PESTAÑAS (TABS) - GLOBAL
// ======================================================

function openTab(evt, tabId) {

    var i, tabcontent, tablinks;

    // Ocultar todas las pestañas
    tabcontent = document.getElementsByClassName("tab-pane");

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }

    // Desactivar todos los botones
    tablinks = document.getElementsByClassName("nav-btn");

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Mostrar la pestaña seleccionada
    var tab = document.getElementById(tabId);

    if (tab) {
        tab.style.display = "block";
        tab.classList.add("active");
    }

    // Activar el botón clickeado
    if (evt) {
        evt.currentTarget.classList.add("active");
    }
}


// ======================================================
// 2. FUNCIONES QUE SE EJECUTAN AL CARGAR LA PÁGINA
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Funciones cargadas correctamente");

    inicializarTabs();
    inicializarBotonRegresar();
    inicializarAccordion();

});


// ======================================================
// 3. INICIALIZAR PRIMERA PESTAÑA AUTOMÁTICAMENTE
// ======================================================

function inicializarTabs() {

    // Buscar si hay una pestaña activa por defecto
    var primeraTab = document.querySelector(".tab-pane.active");

    // Si no hay ninguna activa, tomar la primera
    if (!primeraTab) {
        primeraTab = document.querySelector(".tab-pane");
    }

    if (primeraTab) {
        primeraTab.style.display = "block";
        primeraTab.classList.add("active");
    }

    // Activar el botón correspondiente
    if (primeraTab) {
        var tabId = primeraTab.getAttribute("id");
        var botones = document.getElementsByClassName("nav-btn");
        for (var i = 0; i < botones.length; i++) {
            var onclickAttr = botones[i].getAttribute("onclick");
            if (onclickAttr && onclickAttr.includes(tabId)) {
                botones[i].classList.add("active");
            }
        }
    }
}


// ======================================================
// 4. BOTÓN REGRESAR AL INDEX
// ======================================================

function inicializarBotonRegresar() {

    var backBtn = document.getElementById("back-btn");

    if (!backBtn) {
        return;
    }

    backBtn.addEventListener("click", function () {

        console.log("Redirigiendo al index...");

        window.location.href = "index.html";

    });

}


// ======================================================
// 5. ACORDEÓN (Mostrar / ocultar contenido)
// ======================================================

function toggleAccordion(accordionId) {

    var content, icon;

    if (accordionId) {
        // Si se pasa un ID específico
        content = document.getElementById("accordion-content-" + accordionId);
        icon = document.getElementById("acc-icon-" + accordionId);
    } else {
        // Si no, usar los IDs por defecto
        content = document.getElementById("accordion-content");
        icon = document.getElementById("acc-icon");
    }

    if (!content) {
        return;
    }

    if (content.style.display === "block") {

        content.style.display = "none";

        if (icon) {
            icon.innerText = "+";
        }

    } else {

        content.style.display = "block";

        if (icon) {
            icon.innerText = "-";
        }

    }

}


// ======================================================
// 6. SCROLL SUAVE (opcional)
// ======================================================

function scrollToSection(id) {

    var section = document.getElementById(id);

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }

}


// ======================================================
// 7. DEBUG GENERAL (opcional)
// ======================================================

function debugElemento(id) {

    var el = document.getElementById(id);

    if (el) {
        console.log("Elemento encontrado:", el);
    } else {
        console.log("Elemento NO encontrado:", id);
    }

}