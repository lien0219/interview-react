import { create } from "zustand";

interface UserInfo {
  id: string;
  name: string;
  email: string;
}

interface UserState {
  user: UserInfo | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  updateProfile: (name: string) => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  isLoading: false,
  error: null,

  login: async (email, password) => {
    set({ isLoading: true, error: null });
    console.log(email, password);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      set({
        user: {
          id: "1",
          name: "张三",
          email,
        },
        isLoading: false,
      });
    } catch (err) {
      console.log(err);
      set({
        error: "登录失败，请检查邮箱和密码",
        isLoading: false,
      });
    }
  },

  logout: () => {
    set({ user: null });
  },

  updateProfile: async (name) => {
    set({ isLoading: true, error: null });

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      set((state) => ({
        user: state.user ? { ...state.user, name } : null,
        isLoading: false,
      }));
    } catch (err) {
      console.log(err);
      set({
        error: "更新失败，请稍后再试",
        isLoading: false,
      });
    }
  },
}));
