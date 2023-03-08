import logo from './assest/logo.jpg'
const Nav = () => {
    return (
        <nav className="h-20 w-full fixed">
            <input type="checkbox" id="check" hidden/>
            <label for="check" className="float-right text-black leading-[80px] text-3xl mr-10 lg:hidden">
                <i class="fas fa-bars"></i>
            </label>
            {/* <label className="text-white leading-[80px] pl-12 md:pl-24  md:text-4xl text-3xl  ">Navigation</label> */}
            <div className="h-20  inline-flex">
                <img src={logo} alt="logo"/>
                </div>
            <ul className="float-right mr-10 lg:flex leading-[80px] space-x-4 text-black uppercase rounded fixed lg:relative h-[100vh] lg:h-0 w-[100%] lg:w-fit top-20 lg:top-0 left-[-100%] lg:left-0 transition-all duration-300 lg:transition-none text-center bg-white">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            
        </nav>
      
    );
}

export default Nav;
