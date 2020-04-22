import React, { Component } from 'react'

const UserContext = React.createContext()

class UserProvider extends Component {
  // Context state
  constructor(props){
      super(props);
    this.state = {
        signed:false,
        user: {
            name:"vasavi"
        },
      }
      this.toogleAuth=this.toogleAuth.bind(this);
      this.setUser=this.setUser.bind(this);
  }
  
  toogleAuth()
  {
    this.setState({signed:!this.state.signed});
  }

  // Method to update state
  setUser(user) {
    this.setState({ user })
  }

  render() {
    // const { children } = this.props
    // const { user } = this.state
    // const { setUser } = this

    return (
      <UserContext.Provider
        value={{
          user:this.state.user,
          toogleAuth:this.state.toogleAuth,
          setUser:this.setUser,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

export default UserContext

export { UserProvider }