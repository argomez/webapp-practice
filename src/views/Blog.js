import React from 'react';
import makeRequest from '../util/makeRequest';
import classes from './Blog.module.scss';
import BlogTitle from '../components/BlogTitle';
import BlogPost from '../components/BlogPost';

class Blog extends React.Component {
  state = {
    posts: [],
    dataLoaded: false,
    dataLoadedError: false,
  }

  fetchPosts = async () => {
    // fetch blog posts
    const url = 'https://jsonplaceholder.typicode.com/posts/'
    return makeRequest(url)
  }

  fetchComments = async () => {
    // fetch comments
    const url = 'https://jsonplaceholder.typicode.com/comments/'
    return makeRequest(url)
  }

  addCommentsToPosts = (posts, comments) => {
    // for each comment, add the object to the comment
    comments.forEach(comment => {
      const postIndex = comment.postId - 1;
      // index is id - 1
      let commentArray = posts[postIndex].comments;
      commentArray = commentArray ? [...commentArray, comment] : [comment];
      posts[postIndex].comments = commentArray;
    })
    return posts;
  }

  addCommentToPost = (postId, comment) => {
    console.log(postId, comment);
    this.setState(prevState => {
      const newPosts = JSON.parse(JSON.stringify(prevState.posts))
      const post = newPosts[postId -1];
      post.comments = [...post.comments, comment];
      return {
        posts: newPosts,
      }
    })
  }

  componentDidMount() {
    // fetch blog posts and comments
    const dataPromise = Promise.all([this.fetchPosts(), this.fetchComments()]);
    dataPromise.then(([posts, comments]) => {
      // add comments to post object
      const postsWithComments = this.addCommentsToPosts(posts, comments);
      this.setState({dataLoaded: true, posts: postsWithComments.slice(0, 10) });
    }).catch(err => {
      console.log(`Error fetching: ${err}`);
      this.setState({dataLoadedError: true});
    })
  }

  render() {
    return (
      <div className={classes.blogViewContainer}>
        <BlogTitle title={"My Blog"}/>
        {this.state.dataLoaded &&
          this.state.posts.map(post => (<BlogPost key={post.id} post={post} addCommentToPost={this.addCommentToPost}/>))
        }
      </div>
    )
  }
}

export default Blog;

