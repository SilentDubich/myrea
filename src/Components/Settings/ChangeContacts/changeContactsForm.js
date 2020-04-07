import React from "react";
import {reduxForm} from "redux-form";
import ChangeContacts from "./changeContacts";




export const ChangeContactsForm = reduxForm({ form: 'contacts', enableReinitialize : true})(ChangeContacts)
