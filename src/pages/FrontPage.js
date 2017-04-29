import React from 'react'
import { Link } from 'react-router-dom'
import 'isomorphic-fetch';

class FrontPage extends React.Component {

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
                <Link key={ post.slug } style={{ display: 'block', height: '300px', overflow: 'hidden' }} to={ post.slug }>
                  <h1>
                  {post.title}
                  </h1>
                  <div dangerouslySetInnerHTML={{ __html: post.__content }}>
                  </div>
                  <pre>
                    { JSON.stringify(post, null, 4) }
                  </pre>
                </Link>
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

export default FrontPage
