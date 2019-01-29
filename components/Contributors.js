import React from 'react'

const contributorAvatarSize = 32
const Contributors = ({ people }) => (
  <ul>
    {people.map(({ name, link, photoURL }) => (
      <a href={link} target="_blank">
        <div className="contributor" key={link}>
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
          margin: 64px auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 16px;
        }
        .contributor {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
        }
        .contributor {
        }
        .avatar {
          flex: 0 0 ${contributorAvatarSize}px;
          width: ${contributorAvatarSize}px;
          height: ${contributorAvatarSize}px;
          border-radius: 50%;
          background-size: cover;
          margin-right: 8px;
        }
        .avatar + .avatar {
          margin-left: 8px;
        }
      `}
    </style>
  </ul>
)

export default Contributors
