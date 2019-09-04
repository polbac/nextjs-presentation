import React from 'react'
import 'isomorphic-fetch'

export default class  MainPage extends React.Component {
    state = {
        loaded: false
    }

    static async getInitialProps () {
        const res = await fetch('http://localhost:3000/api')
        const content = await res.json()
        return  { content }
    }

    componentDidMount() {
        setTimeout(() =>this.setState({
            loaded: true
        }), 4000)
        
    }

    render() {
        const { content } = this.props
        const { loaded } = this.state

        return <React.Fragment>
            {loaded ? <p>cargó :)</p> : <p>No cargó :(</p>}
            <ul>
                {content.titles.map(title => <li>{title}</li>)}
            </ul>
            
        </React.Fragment>
    }
    
}