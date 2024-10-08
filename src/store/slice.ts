import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type TMemberData = {
  id: string;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  avatar?: string;
};

export type MembersState = {
  members: TMemberData[];
};

const initialState = {
  members: [
    {
      id: "sfjflsjflsj",
      name: "Emma",
      lastName: "Stone",
      phone: "+380981234567",
      email: "emma@provider.com",
    },
    {
      id: "sfjflsjflojslfjslsj",
      name: "John",
      lastName: "Doe",
      phone: "+380992345678",
      email: "john@provider.com",
    },
    {
      id: "sdjsojffjflsjflsj",
      name: "Sophia",
      lastName: "Williams",
      phone: "+380973456789",
      email: "sophia@provider.com",
    },
    {
      id: "sfjflsjfjjfjflsj",
      name: "Michael",
      lastName: "Brown",
      phone: "+380964567890",
      email: "michael@provider.com",
    },
    {
      id: "sfjflsjfooofjlsj",
      name: "Olivia",
      lastName: "Johnson",
      phone: "+380955678901",
      email: "olivia@provider.com",
    },
    {
      id: "sfjflsjfosofjosflsj",
      name: "Daniel",
      lastName: "Smith",
      phone: "+380946789012",
      email: "daniel@provider.com",
    },
    {
      id: "sfjflsjfjfjfj999lsj",
      name: "Ava",
      lastName: "Davis",
      phone: "+380937890123",
      email: "ava@provider.com",
    },
    {
      id: "sfjflsjlsjlsi88jflsj",
      name: "James",
      lastName: "Garcia",
      phone: "+380928901234",
      email: "james@provider.com",
    },
    {
      id: "sfjflsjflfjlsjf9977sj",
      name: "Isabella",
      lastName: "Martinez",
      phone: "+380919012345",
      email: "isabella@provider.com",
    },
    {
      id: "sfjfls8888sjsjjflsj",
      name: "Liam",
      lastName: "Lopez",
      phone: "+380909123456",
      email: "liam@provider.com",
    },
  ],
} satisfies MembersState as MembersState;

const membersSlice = createSlice({
  name: "members",
  initialState,
  reducers: {
    addMember: (state, actions: PayloadAction<Omit<TMemberData, "id">>) => {
      state.members.push({ ...actions.payload, id: crypto.randomUUID() });
    },

    updateMember: (
      state,
      actions: PayloadAction<Partial<TMemberData> & { id: string }>,
    ) => {
      const { id, ...data } = actions.payload;
      const index = state.members.findIndex((m) => m.id === id);

      if (index !== -1 && state.members[index]) {
        const newData = { ...state.members[index], ...data };
        state.members[index] = newData;
      }
    },

    deleteMember: (state, actions: PayloadAction<{ phone: string }>) => {
      state.members = state.members.filter(
        (m) => m.phone !== actions.payload.phone,
      );
    },
  },
});

export const { addMember, updateMember, deleteMember } = membersSlice.actions;
export default membersSlice.reducer;
