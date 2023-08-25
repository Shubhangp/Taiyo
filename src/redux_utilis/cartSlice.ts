import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Contacts {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  status: string;
}

interface ContactState {
  contact: Contacts[];
}

const initialState: ContactState = {
  contact: [],
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContacts: (state, action: PayloadAction<Contacts>) => {
      state.contact.push(action.payload);
    },
    editContacts: (state, action: PayloadAction<Contacts>) => {
      const editedContactsIndex = state.contact.findIndex(contact => contact.id === action.payload.id);
      if (editedContactsIndex !== -1) {
        state.contact[editedContactsIndex] = action.payload;
      }
    },
    deleteContacts: (state, action: PayloadAction<number>) => {
      state.contact = state.contact.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContacts, editContacts, deleteContacts } = contactSlice.actions;

export default contactSlice.reducer;