import HeaderSection from "./components/HeaderSection";
import InputSection from "./components/InputSection";
import TaskSection from "./components/TaskSection";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-50 flex flex-col justify-center items-center text-gray-800">
      <div className="container mx-auto flex-1 flex flex-col gap-[1.6vw] md:gap-[1vw] p-[1.6vw] md:p-[1vw]">
        <HeaderSection />
        <InputSection />
        <TaskSection />
      </div>
    </div>
  );
}

export default App;
