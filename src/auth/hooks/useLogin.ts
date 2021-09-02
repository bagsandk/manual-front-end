import axios from "axios";
import { stringify } from "querystring";
import { useMutation } from "react-query";

const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<string> => {
  const { data } = await axios.post(
    "http://localhost:8080/public/signin",
    stringify({ Email: email, Password: password }),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        // "Access-Control-Allow-Origin" : "localhost:3000"
      },
    }
  );
  return data;
};

export function useLogin() {
  const { isLoading, mutateAsync } = useMutation(login);

  return { isLoggingIn: isLoading, login: mutateAsync };
}
