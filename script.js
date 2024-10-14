let selectedModel = '';
let selectedMaterial = '';
let personalization = '';
let motor = '';
function añadirPedido() {
    // Lógica para añadir el pedido
    alert("Pedido añadido");
}
function startCustomization() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('step1').classList.add('active');
}

function selectModel(model) {
    selectedModel = model;
    document.getElementById('step1').classList.remove('active');
    document.getElementById('step2').classList.add('active');
}

function selectMaterial(material) {
    selectedMaterial = material;
    document.getElementById('step2').classList.remove('active');
    document.getElementById('step3').classList.add('active');
}

function selectPersonalization(choice) {
    personalization = choice;
    if (choice === 'si') {
        document.getElementById('upload-image').classList.remove('hidden');
    } else {
        document.getElementById('step3').classList.remove('active');
        document.getElementById('step4').classList.add('active');
    }
}

function skipUpload() {
    document.getElementById('step3').classList.remove('active');
    document.getElementById('step4').classList.add('active');
}

function selectMotor(choice) {
    motor = choice;
    document.getElementById('step4').classList.remove('active');
    calcularPrecio();
    document.getElementById('step5').classList.add('active');
}

function calcularPrecio() {
    let precioMaterial = selectedMaterial.includes('Cartón') ? 2 : selectedMaterial.includes('Papel Kraft') ? 3 : 11;
    let precioMotor = motor === 'si' ? 88 : 0;  // 40 motor + 30 LSP32 + 3 pilas + 15 llantas
    let manoDeObra = motor === 'si' ? 30 : 20;
    let precioTotal = precioMaterial + manoDeObra + precioMotor;
    document.getElementById('precio-total').innerText = `${precioTotal} Bs`;
}

function addOrder() {
    alert('Tu pedido ha sido añadido. Proceso de pago a continuación.');
    // Aquí redirigirías a la página de pago
}
