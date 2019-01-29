import React from 'react'

const Caption = ({ children }) => (
  <small>
    {children}
    <style jsx>
      {`
        small {
          color: #666;
          font-size: 0.9em;
          margin: 4px auto 32px;
          text-align: center;
          display: block;
        }
      `}
    </style>
  </small>
)

export default Caption
