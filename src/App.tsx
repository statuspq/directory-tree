import MenuList from "./compoents/MenuList";
import { MENU_LIST } from "./constants";

function App() {
  return (
    <>
      <div className="flex bg-green-300 w-[100vw] h-[100vh] items-center justify-center">
        <div className="flex flex-col w-1/2 max-w-md h-1/2 bg-gray-800 rounded-md overflow-scroll p-8">
          <MenuList menuList={MENU_LIST} />
        </div>
      </div>
    </>
  );
}

export default App;
