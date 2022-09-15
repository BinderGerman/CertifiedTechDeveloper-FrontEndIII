import React from 'react'; 
import Hijo from '../Hijo/index';

class Padre extends React.Component {
    state = {
        count: 0,
    } 

    sum = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    res = () => {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }

    render() {
        return (
            <div>
                <Hijo count={this.state.count} suma= {this.sum} resta= {this.res}/>
            </div>
        )
    }
}

export default Padre;