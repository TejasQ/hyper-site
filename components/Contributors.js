import React from 'react'

const contributorAvatarSize = 32
const Contributors = ({ people }) => (
  <ul>
    {people.map(({ name, link, photoURL }) => (
      <a key={link} href={link} target="_blank">
        <div className="contributor">
          <div
            className="avatar"
            style={{ backgroundImage: `url(${photoURL})` }}
          />
          {name}
        </div>
      </a>
    ))}

    <style jsx>
      {`
        ul {
          padding: 0;
          margin: 64px auto 32px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 16px;
        }
        .contributor {
          align-items: center;
          flex-wrap: wrap;
          text-align: center;
          font-size: 0.9em;
        }
        .avatar {
          flex: 0 0 ${contributorAvatarSize}px;
          width: ${contributorAvatarSize}px;
          height: ${contributorAvatarSize}px;
          border-radius: 50%;
          background-size: cover;
          display: block;
          margin: 0 auto 8px;
        }
        @media (min-width: 768px) {
          .contributor {
            display: flex;
            text-align: center;
          }
          .avatar {
            margin-left: 0;
            margin-right: 8px;
          }
          .avatar + .avatar {
            margin-left: 8px;
          }
        }
      `}
    </style>
  </ul>
)

export default Contributors
