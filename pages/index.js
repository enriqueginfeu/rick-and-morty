import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../components/layout'
import CharacterList from '../components/characterList';

const API_URL = 'https://rickandmortyapi.com/api/character';

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const response = await axios.get(API_URL, {
          params: { page: currentPage },
        });

        const { results, info } = response.data;
        setCharacters(results);
        setTotalPages(info.pages);
      } catch (error) {
        console.error('Error fetch:', error);
      }
    }

    fetchCharacters();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      scrollToTopSmoothly();
    }
  };

  const scrollToTopSmoothly = () => {
    window.scrollTo({
      top: 450,
      behavior: 'smooth', // Aplica un desplazamiento suave
    });
  };

  return (
    <Layout>
      <div className='contenedor'>
        <h1 className='heading'>
          Personajes de Rick and Morty
        </h1>
        <CharacterList
          characters={characters}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </Layout>
  );
};

export default Home;
