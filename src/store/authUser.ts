import { create } from "zustand";

export const useAuthUserStore = create<any>((set) => {
  return {
    isLoggedIn: false,
    user: null,
    setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
    setUser: (user: any) => set({ user }),
  };
});
