import Image from 'next/image';
import React from 'react';
import styles from '../styles/Character.module.css'

const CharacterList = ({ characters, currentPage, totalPages, onPageChange }) => {
    
    const pageInfo = `Página ${currentPage} de ${totalPages}`;

    return (
        <div className={styles.container}>
            <div className={styles.paginacion}>
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={styles.btn}
                >
                    Anterior
                </button>
                <p className={styles.pagina}>{pageInfo}</p>
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={styles.btn}
                >
                    Siguiente
                </button>
            </div>

            <div className={styles.grid}>
                {characters.map((character) => (
                    <div key={character.id} className={`sombra ${styles.card}`}>
                        <div>
                            <h2 className={styles.titulo}>{character.name}</h2>
                            <h3>Especie: {character.species}</h3>
                            <h3>Origen: {character.origin.name}</h3>
                            <h3>Estado: {character.status}</h3>
                        </div>
                        
                        <Image src={character.image} width={300} height={300} alt='' />
                    </div>

                ))}
            </div>
            <div className={styles.paginacion}>
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={styles.btn}
                >
                    Anterior
                </button>
                <p className={styles.pagina}>{pageInfo}</p>
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={styles.btn}
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
};

export default CharacterList;
