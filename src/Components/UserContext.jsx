import React, { Component } from 'react'

const UserContext = React.createContext()

class UserProvider extends Component {
  // Context state
  constructor(props) {
    super(props);
    this.state = {
      signed: true,
      name: "vasavi",
      user: {
        name: 'Vasavi',
        mail: '',
        number: '',
        age: '',
        gender: '',
        photo: ''

      },
    }
    this.toggleAuth = this.toggleAuth.bind(this);
    this.setUser = this.setUser.bind(this);
  }

  toggleAuth() {
    this.setState({ signed: !this.state.signed });
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
          signed: this.state.signed,
          user: this.state.user,
          toggleAuth: this.toggleAuth,
          setUser: this.setUser,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

export default UserContext

export { UserProvider }