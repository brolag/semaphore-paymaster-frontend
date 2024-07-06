import Button from "./Button";

interface LoginProps {
    isLoggingIn: boolean;
    isRegistering: boolean;
    handleLogin: () => void;
    handleRegister: () => void;
}

export default function Login({
  isLoggingIn,
  isRegistering,
  handleLogin,
  handleRegister,
}: LoginProps) {
  return (
    <div className="flex flex-col space-y-2 mb-4">
        <div>
        <Button
            color="blue"
            isLoading={isRegistering || isLoggingIn}
            handleRegister={handleRegister}
            label="Register"
        />
        </div>
        <div className="h-full flex flex-col justify-end">
            <Button
                color="pink"
                isLoading={isLoggingIn || isRegistering}
                handleRegister={handleLogin}
                label="Login"
            />
      </div>
    </div>
  );
}