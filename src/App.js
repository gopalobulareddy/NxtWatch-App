import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'

import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Gaming from './components/Gaming'
import Trending from './components/Trending'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

import ThemeContext from './context/ThemeContext'

import './App.css'

class App extends Component {
  state = {
    activeTheme: 'light',
    savedVideos: [],
  }

  onChangeTheme = activeTheme => {
    // console.log(activeTheme)
    this.setState({activeTheme})
  }

  onAddSavedVideos = async data => {
    const {savedVideos} = this.state
    if (savedVideos.length > 0) {
      const checkSavedVideos = savedVideos.filter(item => item.id === data.id)
      if (checkSavedVideos.length === 0) {
        await this.setState({
          savedVideos: [...savedVideos, data],
        })
      }
    } else {
      await this.setState({
        savedVideos: [...savedVideos, data],
      })
    }
  }

  render() {
    const {activeTheme, savedVideos} = this.state
    return (
      <ThemeContext.Provider
        value={{
          activeTheme,
          savedVideos,
          changeTheme: this.onChangeTheme,
          addSavedVideos: this.onAddSavedVideos,
        }}
      >
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute path="/trending" component={Trending} />
          <ProtectedRoute path="/gaming" component={Gaming} />
          <ProtectedRoute path="/videos/:id" component={VideoItemDetails} />
          <ProtectedRoute path="/saved-videos" component={SavedVideos} />
          <Route component={NotFound} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}
export default App
