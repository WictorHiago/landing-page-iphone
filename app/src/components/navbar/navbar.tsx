import logo from "../../assets/apple-grey.png";
export default function Navbar() {
  return (
    <>
      <nav className="flex w-full justify-center p-4 gap-4 sm:gap-20">
        <div className="flex gap-4 items-center">
          <img className="h-6 w-5 " src={logo} alt="" />
          <a href="">
            <h1 className="text-white text-3xl font-bold hidden sm:block">Wic Store</h1>
          </a>
        </div>

        <ul className="flex gap-6">
          <li className="flex items-center rounded-full transition delay-75 duration-300 hover:opacity-50">
            <a
              className="text-white transition duration-300 delay-50 ease-in-out hover:cursor-pointer hover:text-white/50"
              href=""
            >
              Iphone 13
            </a>
          </li>
          <li className="flex items-center rounded-full transition delay-75 duration-300 hover:opacity-50">
            <a
              className="text-white transition duration-300 delay-50 ease-in-out hover:cursor-pointer hover:text-white/50"
              href=""
            >
              Iphone 14 Pro
            </a>
          </li>
          <li className="flex items-center rounded-full transition delay-75 duration-300 hover:opacity-50">
            <a
              className="text-white transition duration-300 delay-50 ease-in-out hover:cursor-pointer hover:text-white/50"
              href=""
            >
              Iphone 15 Pro
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
