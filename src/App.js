import React, { Component } from 'react'
import { InstantSearch, Configure, SearchBox } from 'react-instantsearch-dom'
import { GoogleMapsLoader } from 'react-instantsearch-dom-maps'
import Stats from './Stats'
import Content from './Content'
import Geo from './Geo'
import './App.css'

class App extends Component {
  render() {
    return (
      <InstantSearch
        appId="P5J7LV85BK"
        apiKey="53bb626187096f4bd90c3f82e2b6a032"
        indexName="events_data"
      >
        <Configure
          hitsPerPage={6}
          getRankingInfo
          aroundLatLngViaIP
          typoTolerance="min"
        />
        <main className="search-container">
          <div className="right-panel">
            <div id="map">
              <div style={{ height: '100%' }}>
                <GoogleMapsLoader apiKey="AIzaSyBawL8VbstJDdU5397SUX7pEt9DslAwWgQ">
                  {google => <Geo google={google} />}
                </GoogleMapsLoader>
              </div>
            </div>
            <div id="searchbox">
              <SearchBox
                translations={{
                  placeholder: 'Search events...'
                }}
              />
            </div>
            <div id="stats">
              <Stats />
            </div>
          </div>
          <div className="left-panel">
            <div id="hits">
              <Content />
            </div>
          </div>
        </main>
      </InstantSearch>
    )
  }
}

export default App
