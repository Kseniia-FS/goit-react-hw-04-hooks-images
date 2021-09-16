import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import fetchImages from "./ApiService/fetchImages";
import { toast } from "react-toastify";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGalerry from "./components/ImageGallery/ImageGallery";
import { Modal } from "./components/Modal/Modal";
import LoaderIcon from "./components/Loader/Loader";
import Button from "./components/Button/Button";

export const App = () => {
  const [query, setQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    const getImages = () => {
      setIsLoading(true);

      fetchImages(query, page)
        .then((data) => {
          if (data.hits.length === 0) {
            toast.error(`Ooops, we cant't find such query! Try again.`);
            return;
          }

          setImages((prevState) => [...prevState, ...data.hits]);
        })
        .then(handleScroll)
        .catch((error) => console.log(error.message))
        .finally(() => setIsLoading(false));
    };

    getImages();
  }, [query, page]);

  const handleSelectedImage = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleClick = () => {
    setPage((prevState) => prevState + 1);
  };

  const handleSubmit = (NewQuery) => {
    if (NewQuery === query) {
      return;
    }
    setQuery(NewQuery);
    setPage(1);
    setImages([]);
  };

  const handleScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const notLastPage = images.length / page === 12;
  const showBtn = images.length > 0 && notLastPage;
  return (
    <>
      <Searchbar handleSubmit={handleSubmit} />
      <ImageGalerry images={images} onSelect={handleSelectedImage} />
      {selectedImage && (
        <Modal src={selectedImage} closeModal={handleCloseModal} />
      )}
      {isLoading && <LoaderIcon />}
      {showBtn && <Button handleClick={handleClick} />}

      <ToastContainer autoClose={3000} />
    </>
  );
};
