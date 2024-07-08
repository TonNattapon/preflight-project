import LoginCard from "./components/LoginCard";

export default function App() {
  return (
    <div
      className="h-screen grid grid-rows-2 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1719917226565-d66c05937ba2?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="flex justify-center items-center"></div>
      <div className="flex justify-center items-center">
        <LoginCard />
      </div>
    </div>
  );
}
