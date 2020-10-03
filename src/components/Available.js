import React from 'react'
import AvailablePill from './AvailablePill'

export default ({ availableFullTime, availableFreelance }) => (
  <div style={{ marginTop: '3rem', marginBottom: '2rem' }}>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}
    >
      <AvailablePill
        available={availableFullTime}
        label="Available for full-time remote work"
        style={{ marginRight: '1rem' }}
      />
      <AvailablePill
        available={availableFreelance}
        label="Available for freelance projects"
      />
    </div>
    <div>
      Connect for work:&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="mailto:mitesh@mokko.io" style={{ marginRight: '2rem' }}>
        mitesh@mokko.io
      </a>
      <a href="tel:(312) 409-1803" style={{ marginRight: '2rem' }}>
        text: (312) 409-1803
      </a>
    </div>
  </div>
)
