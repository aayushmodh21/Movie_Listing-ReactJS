import React, { useState } from 'react'
import './Favourites.css'
import Modal from 'react-modal';

const IMG_API = "https://image.tmdb.org/t/p/w1280";

function Favourites(props) {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { favourites, removeCLick } = props;

    return (
        <>
        <div>
            <button className="btn" onClick={() => setModalIsOpen(true)}>Favourites</button>
        </div>

        <Modal isOpen={modalIsOpen} className="favourite_body">

            {
                favourites.length === 0 ? <h3>No Favourites</h3> :
                favourites.map((data) => 
                    <div className="fav_list">
                        <img className="img small" src={data.poster_path ? IMG_API + data.poster_path : "https://media.gettyimages.com/vectors/cinema-poster-with-cola-filmstrip-and-clapper-vector-vector-id1244034031?s=612x612"} alt={data.title} />
                        <p className="min-30">{data.original_title}</p>
                        <div onClick={() => removeCLick(data)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                            </svg>
                        </div>
                    </div>
                )
            }
                
            <button className="btn2" onClick={() => setModalIsOpen(false)}>Close</button>

        </Modal>

        </>
    )
}

export default Favourites
