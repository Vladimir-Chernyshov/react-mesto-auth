import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateUser }) {
  const avatarRef = React.useRef();
  const [link, setLink] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      avatar: avatarRef.current.value
    });
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  React.useEffect(() => {
    setLink('');
  }, [isOpen]); 

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="url"
        className="popup__input popup__input_el_image popup__input_el_image-avatar"
        id="avatar-input"
        name="link"
        placeholder="Ссылка на картинку"
        defaultValue=""
        required
        ref={avatarRef}
        onChange={handleChangeLink}
        value={link || ''}
      />
      <span className="avatar-input-error popup__input-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
