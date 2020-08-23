import '../css/componentes.etiqueta.css';
export const crearEtiqueta = (Texto) => {
    console.log("Si funciona!");
    const etiqueta = document.createElement("h1");
    etiqueta.innerText = Texto;
    document.body.append(etiqueta);
}