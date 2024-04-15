import React from 'react';

interface Props {
  onClick: () => void;
}

const DeleteButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick}>Deletar</button>
  );
};

export default DeleteButton;
