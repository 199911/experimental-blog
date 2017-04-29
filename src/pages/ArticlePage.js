import React from 'react'
import 'isomorphic-fetch';

class ArticlePage extends React.Component {

  constructor() {
  super();
  this.state = {};
}

  componentDidMount() {
    const { postSlug } = this.props.match.params;
    fetch(`https://199911.github.io/blog-data/posts/${postSlug}.json`)
      .then((res) => (res.json()))
      .then((post) => {
        this.setState({
          post
        });
      })
  }

  render() {
    const { post } = this.state;
    if (post) {
      return (
        <div>
          <h1>
            { post.title }
          </h1>
          <div dangerouslySetInnerHTML={{ __html: post.__content }}>
          </div>
          <pre>
            { JSON.stringify(post, null, 4) }
          </pre>
        </div>
      )
    } else {
      return <div>Loading</div>;
    }
  }
}

export default ArticlePage
