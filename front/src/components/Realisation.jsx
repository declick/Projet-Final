//import de module

import React from "react"
import axios from 'axios'
import { BASE_URL, BASE_IMG } from '../config.js'

const Realisation = () => {

    const [image, setImage] = React.useState([])

    // Affichage Image
    React.useEffect(() => {

        axios.get(`${BASE_URL}/Realisation`)

            .then((res) => {
                setImage(res.data.SQL)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])




    return (

        <React.Fragment>

            <div className="container">

                <div className="text_intro">
                    <h1>Mes réalisations</h1>
                </div>

                <div className="container_realisation">
                    <div className="gallery">
                        {image.map((e, i) => {
                            return (
                                <div className="gallery_item" key={i}>
                                    <img className="gallery_image" src={`${BASE_IMG}/${e.image}`} alt="my little lashes" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Realisation