        // Cuando se empieza a arrastar
        function drag(event) {
            event.dataTransfer.setData("id", event.target.id);
            event.dataTransfer.setData("valor", event.target.dataset.valor)
        }
        // Cuando se está arrastrando
        function allowDrop(event) {
            event.preventDefault();
        }
        // Cuando se deja de arrastrar
        function drop(event) {
            event.preventDefault();

            var elementId = event.dataTransfer.getData("valor");
            if (event.target.dataset.valor == elementId) {
                var elementId = event.dataTransfer.getData("id");
                event.target.appendChild(document.getElementById(elementId));
            }
        }