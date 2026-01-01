import { useMutation } from "@tanstack/react-query";

export const useRegisterUser = () => {
  return useMutation({
    queryKey: ["registerUser"],

    mutationFn: async (values) => {
      // fake register delay
      await new Promise((r) => setTimeout(r, 800));

      return {
        userEmail: values.email,
        password: values.password,
      };
    },

    onSuccess: (data) => {
      // 🔥 SAVE USER (FAKE DATABASE)
      localStorage.setItem("registeredUser", JSON.stringify(data));
    },
  });
};

export const useLoginUser = () => {
  return useMutation({
    queryKey: ["loginUser"],

    mutationFn: async (values) => {
      await new Promise((r) => setTimeout(r, 500));

      const savedUser = JSON.parse(localStorage.getItem("registeredUser"));

      if (!savedUser) {
        throw new Error("No account found");
      }

      if (
        savedUser.userEmail !== values.email ||
        savedUser.password !== values.password
      ) {
        throw new Error("Invalid email or password");
      }

      return {
        user: savedUser,
        token: "fake-auth-token",
      };
    },

    onSuccess: (data) => {
      // 🔐 LOGIN STATE
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("currentUser", JSON.stringify(data.user));
    },
  });
};
