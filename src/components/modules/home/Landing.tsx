import { Input } from "@nextui-org/input";
import { SearchIcon } from "../../icons";

const Landing = () => {
  return (
    <div
      className="h-full bg-cover bg-center"
      style={{ backgroundImage: "url('https://i.ibb.co/VWjzKXP/OIP.jpg')" }}
    >
      <div className="pt-32 max-w-xl flex-1 mx-auto">
        <form className="flex-1">
          <Input 
          aria-label="search"
          classNames={{
            inputWrapper: "bg-default-100",
            input: "text-sm",
          }}
          labelPlacement="outside"
          placeholder="Search..."
          type="search"
          size="lg"
          startContent={
            <SearchIcon className="pointer-events-none flex-shrink-0 text-default" />
          }
          />
        </form>
      </div>
    </div>
  );
};

export default Landing;
