import {Component} from 'react'
import BrowserHistoryItem from './components/BrowserHistoryItem'

import './App.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]
class App extends Component {
  state = {
    searchInput: '',
    BrowserHistoryDetails: initialHistoryList,
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onDeleteItem = id => {
    const {BrowserHistoryDetails} = this.state
    const filteredItem = BrowserHistoryDetails.filter(
      eachItem => eachItem.id !== id,
    )
    this.setState({BrowserHistoryDetails: filteredItem})
  }

  renderList = () => {
    const {searchInput, BrowserHistoryDetails} = this.state
    let message
    const searchResults = BrowserHistoryDetails.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    if (searchResults.length > 0) {
      message = (
        <div className="bg-container">
          <ul>
            {searchResults.map(eachItem => (
              <BrowserHistoryItem
                BrowserHistoryDetails={eachItem}
                key={eachItem.id}
                onDeleteItem={this.onDeleteItem}
              />
            ))}
          </ul>
        </div>
      )
    } else {
      message = (
        <div className="message-container">
          <p className="message">There is no history to show</p>
        </div>
      )
    }
    return message
  }

  render() {
    const {searchInput} = this.state
    const requiredList = this.renderList()

    return (
      <div className="app-container">
        <div className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="history-logo"
          />
          <div className="search-area">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Search History"
              className="input-area"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
          </div>
        </div>
        {requiredList}
      </div>
    )
  }
}

export default App
