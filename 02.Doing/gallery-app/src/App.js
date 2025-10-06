import { useState, useEffect } from 'react';
import './App.css';
import Layout from './layout/Layout';
import Albums from './pages/Albums';
import AlbumCarousel from "./pages/AlbumCarousel";
import Photos from './pages/Photos';
import EditPhoto from './pages/EditPhoto';
import EditAlbum from './pages/EditAlbum';
import ConfirmDialog from './molecules/ConfirmDialog';
import albumsData from './data/albumsData';
import photosData from './data/photosData';
import './utils/localStorage';
import { getFromStorage, saveToStorage } from './utils/localStorage';

function App() {
  const [currentView, setCurrentView] = useState('albums');
  // Get data for albums and photos from localStorage or from files
  const [albums, setAlbums] = useState(
    () => getFromStorage('gallery-albums', albumsData) 
  );
  const [photos, setPhotos] = useState(
    () => getFromStorage('gallery-photos', photosData)
  );
  
  // const handleViewChange = (newView) => {
  //   // Si es una acción de crear/editar, abrir modal en lugar de cambiar vista
  //   if (newView === "newAlbum") {
  //     setAlbumModalAction("create");
  //     setSelectedAlbum(null);
  //     setIsAlbumModalOpen(true);
  //   } else if (newView === "newPhoto") {
  //     setPhotoModalAction("create");
  //     setSelectedPhoto(null);
  //     setIsPhotoModalOpen(true);
  //   } else {
  //     setCurrentView(newView);
  //   }
  // };
  // Estado para el dialog de confirmacion de eliminacion de album
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(null);

  const [albumToDelete, setAlbumToDelete] = useState(null);
  const [photoToDelete, setPhotoToDelete] = useState(null);

  // Estado para el modal del carrusel de álbum
  const [isCarouselModalOpen, setIsCarouselModalOpen] = useState(false);
  const [carouselAlbum, setCarouselAlbum] = useState([]);

  const handlePlayAlbum = (album) => {
    setIsCarouselModalOpen(true);
    setCarouselAlbum(album);
    console.log('clicked play', album);
  }
  const handleCloseCarousel = () => {
    setIsCarouselModalOpen(false);
    setCarouselAlbum([]);
  }
  
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
        return (
        <Albums
          albums={albums}
          onPlayAlbum={handlePlayAlbum}
          setCurrentAlbum={setCarouselAlbum}
        />
      );
      case 'photos':
        return <Photos />;
      case 'newPhoto':
        return <EditPhoto />;
      case 'newAlbum':
        return <EditAlbum />;
      default:
        return (
        <Albums
          albums={albums}
          onPlayAlbum={handlePlayAlbum}
          setCurrentAlbum={setCarouselAlbum}
        />
      );
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
      <AlbumCarousel 
        isOpen={isCarouselModalOpen}
        album={carouselAlbum}
        onClose={handleCloseCarousel}
      />
    </div>
  );
}

export default App;
