import React from 'react'

import ParallaxTile from './ParallaxTile'

const techStack = [
  {
    id: '1',
    name: 'React',
    color: '#61dafb',
    bg: '#222',
    logo: require('../img/react-icon.svg')
  },
  {
    id: '2',
    name: 'React Native',
    color: '#61dafb',
    bg: '#222',
    logo: require('../img/react-icon.svg')
  },
  {
    id: '3',
    name: 'Node.js',
    bg: '#026e00',
    logo: require('../img/nodejs-icon.svg')
  },
  {
    id: '4',
    name: 'MongoDB',
    bg: '#13aa52',
    logo: require('../img/mongodb-icon.svg')
  },
  {
    id: '5',
    name: 'Express',
    bg: '#eeeeee',
    color: 'black'
  },
  {
    id: '6',
    name: 'Expo',
    bg: '#4630eb',
    logo: require('../img/expo-icon.svg')
  }
]

export default () => (
  <div>
    <h2 style={{ marginBottom: '1rem' }}>Technologies</h2>

    <div className="columns is-multiline">
      {techStack.map(t => (
        <div key={t.id} className="column is-4">
          <ParallaxTile
            label={t.name}
            color={t.color}
            bg={t.bg}
            logo={t.logo}
          />
        </div>
      ))}
    </div>
  </div>
)
