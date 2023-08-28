import React from "react";

class Profile extends React.Component {
    // State in Class Component
    constructor(props) {
        console.log("Child Constructor")
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy Name",
                bio: "BIO",
                location: "Dummy Locaiton",
                avatar_url: "dummy"
            }
        };
    }

    // API Calls
    async componentDidMount() {
        console.log("Child ComponentDidMount")

        // const response = await fetch("https://api.github.com/users/satishk2022")
        // const data = await response.json();
        // console.log(data)
        // this.setState({
        //     userInfo: data,
        // })

        this.timer = setInterval(() => {
            console.log("Learning React")
        }, 1000)
    }

    componentDidUpdate() {
        console.log("ComponentDidUpdate")
    }

    componentWillUnmount() {
        clearInterval(this.timer)
        console.log("ComponentWillUnmount")
    }

    render() {
        const { count } = this.state;
        console.log("Child Render")
        
        return (
        <>
            <h1>Profile Class Component</h1>
            <img src={this.state.userInfo.avatar_url}/>
            <h2>Name: {this.state.userInfo.name}</h2>
            <h3>BIO: {this.state.userInfo.bio}</h3>
            <h3>Location: {this.state.userInfo.location}</h3>
            <button
            onClick={() =>
                    // setState in Class Component
                    this.setState({
                    count: 1,
                    count2: 2
                })
            }
            >
            setCount
            </button>
        </>
        );
  }
}

/**
 * // Render Phase
 * Parent Constructor
 * Parent Render
 *      Child Constructor
 *      Child Render
 * 
 * // Commit Phase
 * DOM Updated
 * data logged in console
 *      Child ComponentDidMount
 * Parent ComponentDidMount
 */

export default Profile;
