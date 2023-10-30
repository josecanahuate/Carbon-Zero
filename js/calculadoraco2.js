document.querySelector('.step-1 .next-step').addEventListener('click', function() {
document.getElementById('calculateButton').addEventListener('click', function () {
  // Mostrar el gif animado
  const loadingGif = document.getElementById('loadingGif');
  loadingGif.style.display = 'block';

  let totalEmissions = 0;

  // Simular un retraso de 2 segundos (2000 milisegundos)
  setTimeout(function () {

    // Definir las emisiones y las horas de uso por dispositivo
    const devices = [
      { name: 'Televisor', emissions: 0.195, hours: 10 },
      { name: 'Computadora', emissions: 0.234, hours: 5 },
      { name: 'Aspiradora', emissions: 1.3, hours: 1.5 },
      { name: 'Microondas', emissions: 1.365, hours: 0.3 },
      { name: 'Lavavajillas', emissions: 1.950, hours: 1.0 }
      // Añadir otros dispositivos aquí
    ];

    // Obtener los checkboxes seleccionados de los dispositivos en casa
    const devicesCheckboxes = document.querySelectorAll('.form-check-input:checked');

    // Sumar las emisiones de los dispositivos en casa seleccionados
    devicesCheckboxes.forEach(checkbox => {
      const deviceName = checkbox.value;
      const selectedDevice = devices.find(device => device.name === deviceName);

      if (selectedDevice) {
        const deviceEmissions = selectedDevice.emissions * selectedDevice.hours * 4;
        totalEmissions += deviceEmissions;
      }
    });

    // Obtener valores de las nuevas preguntas

    // HOGAR
    const airConditionerOption = document.querySelector('[name="question1"]:checked').value;
    const cookingOption = document.querySelector('[name="cocina"]:checked').value;
    const laundryOption = document.querySelector('[name="lavadoraSecadora"]:checked').value;

    // ALIMENTOS
    const carneOption = document.querySelector('[name="carne"]:checked').value;
    const pescadoOption = document.querySelector('[name="pescado"]:checked').value;
    const lacteoOption = document.querySelector('[name="lacteo"]:checked').value;

    // Electricidad y Gas
    const electricidadOption = document.querySelector('[name="electricidad"]:checked').value;
    const calefaccionOption = document.querySelector('[name="calefaccion"]:checked').value;
    const gascocinaOption = document.querySelector('[name="gascocina"]:checked').value;

    // Obtener el valor introducido en los campos de texto correspondientes - Transporte 1/3
    const gasolinaValue = document.getElementById('gasolina').value;
    const dieselValue = document.getElementById('diesel').value;
    const gasNaturalValue = document.getElementById('gasnatural').value;

    // Obtener el valor introducido en los campos de texto correspondientes - Transporte 2/3
    const busValue = document.getElementById('bus').value;
    const taxiValue = document.getElementById('taxi').value;
    /* const gasNaturalValue = document.getElementById('gasnatural').value; */

    // Obtener el valor introducido en los campos de texto correspondientes - Transporte 2/3
    const internacionalValue = document.getElementById('viajesinternacionales').value;
    const nacionalValue = document.getElementById('viajesnacionales').value;


    ///////////////////////////////////////////////////// Calcular emisiones de HOGAR
    if (airConditionerOption === 'aire510') {
      totalEmissions += (2 * 8) * 4;
    } else if (airConditionerOption === 'aire15') {
      totalEmissions += (2 * 20) * 4;
    }

    if (cookingOption === 'cocinar34') {
      totalEmissions += (0.3325 * 4);
    } else if (cookingOption === 'cocinarmas5') {
      totalEmissions += (6.4675 * 4);
    }

    if (laundryOption === 'secadora13') {
      totalEmissions += (5.655 * 3) * 4;
    } else if (laundryOption === 'secadora5') {
      totalEmissions += (5.655 * 5) * 4;
    }


    /////////////////////////////////////////////////// Calcular emisiones de ALIMENTOS
    if (carneOption === 'carne12') {
      totalEmissions += (10 * 4);
    } else if (carneOption === 'carne3') {
      totalEmissions += (20 * 4);
    }

    if (pescadoOption === 'pescado12') {
      totalEmissions += (15 * 4);
    } else if (pescadoOption === 'pescado3') {
      totalEmissions += (25 * 4);
    }

    if (lacteoOption === 'lacteo12') {
      totalEmissions += (5.2 * 4);
    } else if (lacteoOption === 'lacteo3') {
      totalEmissions += (10 * 4);
    }

    /////////////////////////////////////////////////// Calcular emisiones de Electricidad y Gas

    if (electricidadOption === 'electricidad25') {
      totalEmissions += (15 * 0.45);
    } else if (electricidadOption === 'electricidad50') {
      totalEmissions += (30 * 0.45);
    } else if (electricidadOption === 'electricidad50150') {
      totalEmissions += (100 * 0.45);
    } else if (electricidadOption === 'electricidad150') {
      totalEmissions += (200 * 0.45);
    }

    if (calefaccionOption === 'calefaccion25') {
      totalEmissions += (15 * 0.309);
    } else if (calefaccionOption === 'calefaccion50') {
      totalEmissions += (30 * 0.309);
    } else if (calefaccionOption === 'calefaccion50100') {
      totalEmissions += (100 * 0.309);
    } else if (calefaccionOption === 'calefaccion100') {
      totalEmissions += (150 * 0.309);
    }

    if (gascocinaOption === 'gascocina20') {
      totalEmissions += (15 * 0.3325);
    } else if (gascocinaOption === 'gascocina2050') {
      totalEmissions += (35 * 0.3325);
    } else if (gascocinaOption === 'gascocina50') {
      totalEmissions += (75 * 0.3325);
    }

    /////////////////////////////////////////////////// Calcular emisiones de Transporte 1/3
    totalEmissions += parseFloat(gasolinaValue) * 0.00218 * 1000 || 0;
    totalEmissions += parseFloat(dieselValue) * 0.002467 * 1000 || 0;
    totalEmissions += parseFloat(gasNaturalValue) * 0.000182 * 1000 || 0;

    // Emisiones reales por viaje para cada medio de transporte
    /*   busEmissionsPerTrip = 4; // kg CO2/viaje
      taxiEmissionsPerTrip = 10; // kg CO2/viaje */

    /////////////////////////////////////////////////// Calcular emisiones de Transporte 2/3
    totalEmissions += parseFloat(busValue * 2) * 4 * 4 || 0;
    totalEmissions += parseFloat(taxiValue * 2) * 10 * 4 || 0;
    /* totalEmissions += parseFloat(viajes * 2(ida y vuelta)) * kg/generadoxviaje * 4(semanas) || 0; */

    /////////////////////////////////////////////////// Calcular emisiones de Transporte 3/3
    totalEmissions += parseFloat(internacionalValue * 2) * 600 || 0; // Emisiones promedio por vuelo internacional en kg CO2 (ida y vuelta)
    totalEmissions += parseFloat(nacionalValue * 2) * 270 || 0; // Emisiones promedio por vuelo nacional en kg CO2 (ida y vuelta)

      // Simular un retraso de 3 segundos (3000 milisegundos)
      setTimeout(function () {

      // Ocultar el gif animado
      loadingGif.style.display = 'none';

      // Actualiza el contenido del elemento h2 con el valor calculado
      const emissionsResultElement = document.getElementById('emissionsResult');
      emissionsResultElement.textContent = `${totalEmissions.toFixed(2)} kg CO2`;

     
      function updateProgressBar() {
        const progressBar = document.getElementById('progress-bar');
        const progressBarText = document.getElementById('progress-bar-text');

        // Verificar si se ha ingresado un valor válido para la huella de carbono
        if (isNaN(totalEmissions) || totalEmissions < 0) {
            progressBar.style.width = '0%';
            progressBar.className = 'progress-bar bg-danger'; // Otra clase CSS que indique un error
            progressBarText.textContent = 'Valor inválido';
            return;
        }

        // Determinar el estilo y el ancho del progress bar según la cantidad de huella de carbono generada
        let estiloProgressBar = '';
        let anchoProgressBar = '';
        let textoProgressBar = '';

        if (totalEmissions <= 100) {
            estiloProgressBar = 'bg-success';
            anchoProgressBar = '25%';
            textoProgressBar = '¡Respetuoso con el Planeta. ¡Sigue así!';
        } else if (totalEmissions > 100 && totalEmissions <= 300) {
            estiloProgressBar = 'bg-info';
            anchoProgressBar = '50%';
            textoProgressBar = '¡El Esfuerzo Cuenta!';
        } else if (totalEmissions > 300 && totalEmissions <= 600) {
            estiloProgressBar = 'bg-warning';
            anchoProgressBar = '75%';
            textoProgressBar = '¡Tomemos medidas antes de que sea tarde!';
        } else {
            estiloProgressBar = 'bg-danger';
            anchoProgressBar = '100%';
            textoProgressBar = '¡Actúa ya! La Tierra te necesita!';
        }

        // Actualizar el estilo, el ancho y el texto del progress bar
        progressBar.className = `progress-bar ${estiloProgressBar}`;
        progressBar.style.width = anchoProgressBar;
        progressBarText.textContent = textoProgressBar;
    }

        updateProgressBar();

    },3300);
  });
  
});
});
