export function dataform() {
  console.log('la data esta ejecutandose');
  document.querySelector("#loginform").addEventListener("submit", (event) => {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(event.target));
    console.log(data);
    alert("Datos ingresados: " + JSON.stringify(data));

    localStorage.setItem('formData', JSON.stringify(data));
    
    console.log('Datos guardados:', localStorage.getItem('formData'));

    window.location.href = "listaContactos.html";
  });
}
