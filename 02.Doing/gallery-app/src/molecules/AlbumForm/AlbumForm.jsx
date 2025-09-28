export default function AlbumForm ({action, album, onSaveAlbum}) {
  return(
    <div>
      <h3>Crear nuevo álbum</h3>
      <form>
        <div>
          <label><span>Titulo del álbum</span>
            <input type="text" id="albumTitle" name="albumTitle" placeholder="Ej. City Night" />
          </label>
        </div>
        <div>
          <label><span>Descripción del álbum</span>
            <textarea 
              type="text" 
              id="albumDescription" 
              name="albumDescription" 
              row="3"
              placeholder="Describe el álbum" />
          </label>
        </div>
        {/* Imagenes */}
        <div>
          <label><span>Imágenes del álbum</span>
            <div>
              <input 
                type="url" 
                name="imageUrl" 
                id="imageUrl" 
                placeholder="URL de la imagen" 
              />
              <input 
                type="text" 
                name="imageTitle" 
                id="imageTitle" 
                placeholder="Nombre de la imagen" 
              />
              <button>+</button>
            </div>
          </label>

          <div>
            <button type="submit">Crear álbum</button>
            <button type="button">Cancelar</button>
          </div>
        </div>
      </form>
    </div>
  );
}