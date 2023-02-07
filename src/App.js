import { Component } from 'react';
import PostItem from './components/PostItem/PostItem';
import Input from './components/Input/Input';
import { getData, removePost, editPost } from './api/api';

export default class App extends Component {
  state = {
    postList: [],
    idPost: '',
    newTitle: '',
    modal: false,
  };

  componentDidMount() {
    (async () => {
      const { data } = await getData();
      this.setState({ postList: data });
    })();
  }

  removePost = (id) => {
    (async () => {
      await removePost(id);
    })();
    const newPostList = this.state.postList.filter((post) => post.id !== id);
    this.setState({ postList: newPostList });
  };

  editPost = () => {
    const id = this.state.idPost;
    const newTitle = this.state.newTitle;
    (async () => {
      await editPost(id, newTitle);
    })();
    const newPostList = this.state.postList.map((post) =>
      post.id === id ? { ...post, title: newTitle } : post,
    );
    this.setState({ postList: newPostList, newTitle: '' });
  };

  addModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  addNewTitle = (event) => {
    this.setState({
      newTitle: event.target.value,
    });
  };

  selectedPost = (id) => {
    this.setState({
      idPost: id,
    });
  };

  render() {
    const { postList, modal } = this.state;

    return (
      <>
        <ul className="PostList">
          {postList.map((post) => (
            <PostItem
              key={post.id}
              post={post}
              removePost={this.removePost}
              addModal={this.addModal}
              selectedPost={this.selectedPost}
            />
          ))}
        </ul>
        {modal ? (
          <Input
            addNewTitle={this.addNewTitle}
            editPost={this.editPost}
            addModal={this.addModal}
          />
        ) : null}
      </>
    );
  }
}
