import React, { useState } from 'react'
import './MovieList.css'
import Modal from 'react-modal';
import LabelImportantIcon from "@material-ui/icons/LabelImportant";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

function MovieList(props) {

    const { data, favouriteClick } = props;

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
        <div className="movieList">
            <img onClick={() => setModalIsOpen(true)} src={data.poster_path ? IMG_API + data.poster_path : "https://media.gettyimages.com/vectors/cinema-poster-with-cola-filmstrip-and-clapper-vector-vector-id1244034031?s=612x612"} alt={data.title} />
            <div className="movieList_info">
                <h3>{data.original_title}</h3>
                <div className="fav_icon" onClick={favouriteClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                    </svg>
                    
                </div>
            </div>
        </div>

        <Modal isOpen={modalIsOpen} className="movieList_body">

                <div className="movieList_bodyHeader">
                    <h1>{data.original_title}</h1>
                    
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="language">
                        <p>(<strong>lang: </strong>{data.original_language}) {}</p>
                    </div>
                    <p className="movieList_time">[{data.release_date}]</p>
                </div>
                <div className="movieList_message">
                    <img className="img" src={data.poster_path ? IMG_API + data.poster_path : "https://media.gettyimages.com/vectors/cinema-poster-with-cola-filmstrip-and-clapper-vector-vector-id1244034031?s=612x612"} alt={data.title} />
                    <div className="text">
                        <p>
                            <strong>Overview: </strong><br /><br />
                            {data.overview}
                        </p>
                        <p>
                            <strong>Ratings: </strong>{data.vote_average} 
                        </p>
                        <p>
                            <strong>Votes: </strong>{data.vote_count}
                        </p>
                        <p>
                            <strong>Popularity: </strong>{data.popularity}
                        </p>
                    </div>
                </div>
                <button className="btn" onClick={() => setModalIsOpen(false)}>Close</button>

        </Modal>

        </>
    )
}

export default MovieList
