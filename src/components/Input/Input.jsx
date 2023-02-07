import { PureComponent } from 'react';
import './Input.scss';
import Button from '../Button/Button';
import { toast } from 'react-toastify';

export default class Input extends PureComponent {
  render() {
    const { addNewTitle, addModal, editPost } = this.props;

    return (
      <div className="PostItem_modal">
        <input
          type="text"
          onChange={addNewTitle}
          className="PostItem_modal-input"
          placeholder="Enter a new title"
          autoFocus={true}
        />
        <Button
          value={'Ready'}
          onClick={() => {
            editPost();
            toast.success('Operation completed successfully!');
            addModal();
          }}
        />
      </div>
    );
  }
}
