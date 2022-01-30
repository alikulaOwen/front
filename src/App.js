import Left from "./components/left";
import Right from "./components/Right";

export default function App() {
  return <div className="flex h-full w-full bg-gradient-to-r from-cyan-500 to-blue-500 overflow-hidden">
    <Left/>
    <Right/>
 </div>   
}