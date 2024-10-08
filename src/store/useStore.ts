import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User, UserStore } from "./@types.store";

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      login: (user: User) => set({ user }),
      logout: () => set({ user: null }),
      set: (user: User) => set({ user }),
    }),
    {
      name: "user-storage",
      getStorage: () => localStorage,
    }
  )
);