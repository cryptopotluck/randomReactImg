import React, { Component } from 'react';



class Counter extends Component {
    state = {
        count: 200,
        imageUrl: 'https://picsum.photos/200',
        tags: ['tag1', 'tag2', 'tag3']
    };

    handleIncrement  = () => {
        this.setState({ count: this.state.count +1 })
    }

    handleSubtractIncrement  = () => {
        this.setState({ count: this.state.count -1 })
    }

    handlePictureChange = () => {
        this.setState({imageUrl: 'https://picsum.photos/' + this.state.count })
    }

    //constructor() {
   //     super();
    //    this.handleIncrement = this.handleIncrement.bind(this)
    //}

    renderTags() {
        if (this.state.tags.length === 0) return <p>Their are no tags!</p>

        return <ul>
                    { this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}
                </ul>
    }


    render() {
        return (
            <div className='container'>
                <br/>
                <div className='card'>
            <center>
                <br/>
                <img src={this.state.imageUrl}  className='img-thumbnail' alt=""/>
                <br/>
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <br/>
                <div>
                {this.state.tags.length ===0 && "Please create a new tag!"}
                </div>
                <br/>
                <div className="row">
                    <div className="col-2">

                    </div>
                    <div className="col">
                        <button onClick={ this.handleIncrement} className="btn btn-warning">Add</button>
                    </div>
                    <div className="col">
                        <button onClick={this.handleSubtractIncrement} className="btn btn-primary">subtract</button>
                    </div>
                    <div className="col-2">

                    </div>
                </div>
                <p>
                    Load a picture {this.state.count}px - {this.state.count}px
                </p>
                <div className="row">
                    <div className="col-4">

                    </div>
                    <div className="col-4">
                    <button onClick={this.handlePictureChange} className="btn btn-success">change picture</button>
                    </div>
                    <div className="col-4">
                    </div>
                </div>
            </center>
            </div>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }

}

export default Counter;