import React from "react";
import { User } from "@/shared/types/user";
import { FormikAddUserForm } from "../formik-add-user-from";
import { FormikUpdateUserForm } from "../formik-update-user-form";

type Props = AddProps | UpdateProps;

type AddProps = {
  type: 'add';
  handleAdd: (newUser: User) => void;
};

type UpdateProps = {
  type: 'update';
  user: User;
  onCancel: () => void;
  onUpdate: (updatedUser: User) => void;
};

export const ManageUserForm = (props: Props) => {
  return (
    <>
      {props.type === 'add' ? (
        <FormikAddUserForm {...(props as AddProps)} />
      ) : (
        <FormikUpdateUserForm {...(props as UpdateProps)} />
      )}
    </>
  );
}
