import LoginLeft from "./LoginLeft";
import LoginRight from "./LoginRight";

/**
 * Layout principal del login con división diagonal
 */
export default function LoginPage() {
  return (
    <main className="relative w-full h-screen bg-diagonal-split flex overflow-hidden">
      <LoginLeft />
      <LoginRight />
    </main>
  );
}
