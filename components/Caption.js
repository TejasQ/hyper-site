import React from 'react'

const Caption = ({ children, left }) => (
  <small>
    {children}
    <style jsx>
      {`
        small {
          color: #666;
          font-size: 0.9em;
          margin: 4px auto 32px;
          text-align: ${left ? 'left' : 'center'};
          display: block;
        }
      `}
    </style>
  </small>
)

export default Caption
