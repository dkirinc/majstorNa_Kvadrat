import React, { useRef } from 'react'

const Hamburger = (ref) => {


    const toContact = () => {

        ref.ref[0].refContact.current?.scrollIntoView({
            behavior: 'smooth'
        })
    }

    const toGallery = () => {
        ref.ref[0].refGallery.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        })
    }

    const toHero = () => {
        ref.ref[0].refHero.current?.scrollIntoView({
            behavior: 'smooth'
        })
    }

    const toServices = () => {
        ref.ref[0].refServices.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        })
    }

    const toAbout = () => {
        ref.ref[0].refAbout.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        })
    }


    return (
        <div className="menu-wrap">
            <input type="checkbox" className="toggler"></input>
            <div className="hamburger"><div></div></div>
            <div className="menu">
                <div>
                    <div>
                        <ul>
                            <li onClick={toHero}><button>Početak</button></li>
                            <li onClick={toServices}><button>Usluge</button></li>
                            <li onClick={toAbout}><button>O nama</button></li>
                            <li onClick={toGallery}><button>Galerija</button></li>
                            <li onClick={toContact}><button>Kontakt</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hamburger