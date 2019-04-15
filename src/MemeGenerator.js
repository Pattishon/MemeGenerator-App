import React, {Component} from 'react'

class MemeGenerator extends Component {
    constructor(){
        super()
        this.state ={
            topText: '',
            bottomText: '',
            randomImgSrc: 'https://i.imgflip.com/1bij.jpg',
            randomImages: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit(event){
        event.preventDefault()
        const i = Math.floor(Math.random() * this.state.randomImages.length),
              memes = this.state.randomImages[i].url
        console.log(memes)
        this.setState({
            randomImgSrc: memes
        })
    }
    componentDidMount(){
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(response => {
                this.setState({
                    randomImages: response.data.memes
                })            
            })
        
    }
    render() {
        return(
            <div className='meme-generator'>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='topText' value={this.state.topText} placeholder='Enter top text' onChange={this.handleChange} />
                    <input type='text' name='bottomText' value={this.state.bottomText} placeholder='Enter bottom text' onChange={this.handleChange} />
                    <button>Go!</button>
                </form>
                <div className='meme-container'>
                    <h2 className='meme-text top-text'>{this.state.topText}</h2>
                    <h2 className='meme-text bottom-text'>{this.state.bottomText}</h2>
                    <img src={this.state.randomImgSrc} alt='' />
                </div>
            </div>
        )
    }
}

export default MemeGenerator