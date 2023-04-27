import { PureComponent } from 'react';
import Button from '../Button/Button';
import './PostItem.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class PostItem extends PureComponent {
  render() {
    const { removePost, addModal, selectedPost } = this.props;
    const { id, title, body } = this.props.post;

    return (
      <li className="PostItem">
        <span className="PostItem_id">Post #{id}</span>
        <div className="PostItem_btns">
          <Button
            value={'Edit Post'}
            onClick={() => {
              addModal();
              selectedPost(id);
            }}
          />
          <Button
            value={'Delete Post'}
            onClick={() => {
              removePost(id);
              toast.success(
                `Operation completed successfully! You deleted the post #${id}`,
              );
            }}
          />
        </div>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          pauseOnHover={false}
          theme="dark"
        />
        <img
          className="PostItem_img"
          src="https://picsum.photos/150/150"
          alt="Random"
        />
        <h3 className="PostItem_title">{title}</h3>
        <p className="PostItem_body">{body}</p>
      </li>
    );
  }
}
