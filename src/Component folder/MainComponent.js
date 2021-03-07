import React, { Component} from 'react'
import Header from './Header/Header'
import Body from './Body/Body'
import Footer from './Footer/Footer'

class MainComponent extends Component {

    render(){
        return(
            <div>
                <Header />
                <Body />
                <Footer />
            </div>
        )
    }
}

export default MainComponent