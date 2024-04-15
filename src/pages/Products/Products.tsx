import React from 'react';
import { Create,
  SimpleForm,
  Edit,
  TextInput
} from "react-admin";

const validateNumber = (value) => {
  if (!value || !/^\d+$/.test(value)) {
    return 'Apenas números são permitidos.';
  }
  return undefined;
};

const validateDescription = (value) => {
  if (value && value.length > 25) {
    return 'A descrição deve ter no máximo 25 caracteres.';
  }
  return undefined;
};

const validateName = (value) => {
  if (!value || typeof value !== 'string') {
    return 'O nome deve ser uma string válida.';
  }
  if (!/^[A-Za-zÀ-ÿ\s]+$/.test(value)) {
    return 'O nome deve conter apenas letras.';
  }
  return undefined;
};

export const ProductCreate: React.FC = () => (
  <Create>
      <SimpleForm>
          <TextInput source="id" disabled />
          <TextInput source="nome" validate={validateName}/>
          <TextInput source="descricao" validate={validateDescription}/>
          <TextInput source="preco" validate={validateNumber} />
          <TextInput source="quantidade" validate={validateNumber}/>
      </SimpleForm>
  </Create>
);

export const ProductEdit: React.FC = () => (
  <Edit>
      <SimpleForm>
          <TextInput source="id" disabled />
          <TextInput source="nome" validate={validateName}/>
          <TextInput source="descricao" validate={validateDescription}/>
          <TextInput source="preco" validate={validateNumber}/>
          <TextInput source="quantidade" validate={validateNumber}/>
      </SimpleForm>
  </Edit>
);
