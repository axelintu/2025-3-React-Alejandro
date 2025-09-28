export default function PhotoForm() {
  return(
    <div>
      <h3>Agregar nueva foto</h3>
      <form>
        <div>
          <label>
            <span>URL de la imagen</span>
            <div>
              <input 
                type="url" 
                id="imageUrl"
                name="imageUrl"
                placeholder="Escribe la URL de la imagen"
              />
            </div>
            </label>
            <label>
              <span>Título de la imagen</span>
            <div>
              <input 
                type="text" 
                id="imageTitle"
                name="imageTitle"
                placeholder="Ej. Parque"
              />
            </div>
            </label>
            <label>
              <span>Descripción:</span>
            <div>
              <textarea 
                type="text" 
                id="imageDescription"
                name="imageDescription"
                rows="3"
                placeholder="Describe la foto"
              />
            </div>
          </label>
          <label>
            <span>Ubicación:</span>
            <div>
              <input 
                type="text" 
                id="imageLocation"
                name="imageLocation"
                placeholder="Ej. AGS, MX"
              />
            </div>
            </label>
            <div>
              <button type="submit">Guardar Foto</button>
              <button type="button">Cancelar</button>
            </div>
        </div>
      </form>
    </div>
  );
}