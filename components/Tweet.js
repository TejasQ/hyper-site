import TweetEmbed from 'react-tweet-embed'
import Caption from './Caption'

const Tweet = ({ caption, ...props }) => (
  <div>
    <TweetEmbed {...props} />
    <Caption>{caption}</Caption>
    <style jsx>{`
      div {
        display: none;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 32px auto 0;
      }
      @media (min-width: 768px) {
        div {
          display: flex;
        }
      }
    `}</style>
  </div>
)

export default Tweet
