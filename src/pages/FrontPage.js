import React from 'react'
import 'isomorphic-fetch';

class HelloMessage extends React.Component {

  constructor() {
  super();
  this.state = {};
}

  componentDidMount() {
    fetch('https://199911.github.io/blog-data/front-page.json')
      .then((res) => (res.json()))
      .then((posts) => {
        this.setState({
          posts
        });
      })
  }

  render() {
    const { posts } = this.state;
    if (posts) {
      return (
        <div>
          {
            posts.map((post) => {
              return (
                <div style={{ height: '300px', overflow: 'hidden' }}>
                  <h1>
                  {post.title}
                  </h1>
                  <div dangerouslySetInnerHTML={{ __html: post.__content }}>
                  </div>
                  <pre>
                    { JSON.stringify(post, null, 4) }
                  </pre>
                </div>
              );
            })
          }
        </div>
      )
    } else {
      return <div>Loading</div>;
    }
  }
}

export default HelloMessage
