// components/Navbar.js
const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-between items-center bg-white shadow p-6 z-10">
      <div className="flex items-center">
        <img src="/brand-logo.png" alt="Logo" className="w-12 h-12 mr-2" /> 
        <span className="text-xl font-bold">Whatbytes</span>
      </div>
      <div className="flex items-center">
        <img src="/profile-pic.jpg" alt="Profile" className="w-10 h-10 rounded-full mr-2" />
        <span>Silas Tyokaha</span>
      </div>
    </div>
  );
};

export default Navbar;
