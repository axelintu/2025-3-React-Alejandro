import { useState } from 'react';
import './App.css';
import Layout from './layout/Layout';
import Albums from './pages/Albums';
import Photos from './pages/Photos';
import EditPhoto from './pages/EditPhoto';
import EditAlbum from './pages/EditAlbum';
import ConfirmDialog from './molecules/ConfirmDialog';
import albumsData from './data/albumsData';
import photosData from './data/photosData';

function App() {
  const [currentView, setCurrentView] = useState('photos');
  const getFromStorage = (key,defaultValue) => {
    try {
      const item = localStorage.getItem(key);
      console.log(item ? JSON.parse(item) : defaultValue);
      return item ? JSON.parse(item) : defaultValue;      
    } catch (error) {
      console.error(error);
      return defaultValue;
    }
  }
  
  const [albums, setAlbums] = useState( () => getFromStorage('gallery-albums', albumsData) );
  const [photos, setPhotos] = useState( () => getFromStorage('gallery-photos', photosData) );
  // Estado para el dialog de confirmacion de eliminacion de album
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(null);
  const [albumToDelete, setAlbumToDelete] = useState(null);
  const [photoToDelete, setPhotoToDelete] = useState(null);
  
  const handleConfirmDeleteAlbum = () => {
    if (albumToDelete) {
      const updatedAlbums = albums.filter(
        (a) => a.id !== albumToDelete.id
      );
      setAlbums(updatedAlbums);
      console.log('Album eliminado: ', albumToDelete);
      console.log('Albums restantes: ', updatedAlbums.length);
    }
  }
  const handleCancelDeleteAlbum = () => {
    setIsConfirmDialogOpen(false);
    setAlbumToDelete(null);
  }
  const handleConfirmDeletePhoto = () => {
    if (photoToDelete) {
      const updatedPhotos = photos.filter(
        (a) => a.id !== photoToDelete.id
      );
      setPhotos(updatedPhotos);
      console.log('Foto eliminada: ', photoToDelete);
      console.log('Fotos restantes: ', updatedPhotos.length);
    }
  }
  const handleCancelDeletePhoto = () => {
    setIsConfirmDialogOpen(false);
    setPhotoToDelete(null);
  }
  const renderCurrentView = () => {
    switch (currentView) {
      case 'albums':
        return <Albums />;
      case 'photos':
        return <Photos />;
      case 'newPhoto':
        return <EditPhoto />;
      case 'newAlbum':
        return <EditAlbum />;
      default:
        return <Photos />;
    }
  };
  
  return (
    <div className="App">
      <h1>Gallery App</h1>
      <Layout currentView={currentView} onViewChange={setCurrentView}>
        {renderCurrentView()}
      </Layout>
      {/* Dialogo para confirmar eliminacion de album */}
      <ConfirmDialog 
        isOpen={isConfirmDialogOpen} 
        type='danger'
        title="Eliminar Album"
        message={`¿Estas seguro que quieres eliminar el album?\n\nEsta acción no puede deshacerse.`}
        confirmText='Eliminar'
        cancelText={"Cancelar"}
        onConfirm={handleConfirmDeleteAlbum}
        onCancel={handleCancelDeleteAlbum}
      ></ConfirmDialog>
      <ConfirmDialog 
        isOpen={isConfirmDialogOpen} 
        type='danger'
        title="Eliminar Foto"
        message={`¿Estas seguro que quieres eliminar la foto?\n\nEsta acción no puede deshacerse.`}
        confirmText='Eliminar'
        cancelText={"Cancelar"}
        onConfirm={handleConfirmDeletePhoto}
        onCancel={handleCancelDeletePhoto}
      ></ConfirmDialog>
    </div>
  );
}

export default App;
