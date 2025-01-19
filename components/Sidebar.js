// components/Sidebar.js
import { useRouter } from 'next/router';
import { FaTachometerAlt, FaClipboardCheck, FaUserGraduate } from 'react-icons/fa';

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className="mt-20 w-64 h-screen bg-white shadow">
      <div className="p-6">
        <div className="flex flex-col items-center">
          <div className="w-full mb-4">
            <div
              className="flex items-center cursor-pointer p-3 hover:bg-gray-200 text-xl font-semibold"  /* Changed font weight */
              onClick={() => router.push('/dashboard')}>
              <FaTachometerAlt className="mr-3" />
              Dashboard
            </div>
          </div>
          <div className="w-full mb-4">
            <div className="flex items-center cursor-pointer p-3 hover:bg-gray-200 text-xl font-semibold"  /* Changed font weight */
              onClick={() => router.push('/skilltest')}>
              <FaClipboardCheck className="mr-3" />
              Skill Test
            </div>
          </div>
          <div className="w-full mb-4">
            <div className="flex items-center cursor-pointer p-3 hover:bg-gray-200 text-xl font-semibold"  /* Changed font weight */
              onClick={() => router.push('/internshiplist')}>
              <FaUserGraduate className="mr-3" />
              Internship
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
