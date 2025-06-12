import { IoPersonOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { useState, useMemo } from 'react';
import { useNotificationPoll } from '../hooks/useNotificationPoll'; // update path

interface Notification {
  message: string;
}

function Navbar() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useNotificationPoll("123", (newMessages) => {
    setNotifications(prev => [...prev, ...newMessages.map(msg => ({ message: msg }))]);
  });
  
  const hasUnseenNotification = useMemo(() => {
    return notifications.length > 0;
  }, [notifications]);



  const handleNotificationClick = () => {
    setNotifications([]); 
  };

  return (
    <div className='w-screen flex justify-center items-center absolute top-0'>
      <div className='w-11/12 flex h-14 lg:h-20 justify-between items-center'>
        <h1 className="text-[30px] font-semibold text-white">Logo</h1>
        <div className='flex justify-around lg:gap-8 gap-4 items-center'>
          <div className='p-1 rounded-full border border-white hover:bg-black/80 hover:border-none'>
            <NavLink to="/login">
              <IoPersonOutline size={20} color='white' className='cursor-pointer' />
            </NavLink>
          </div>

          <div
            className='p-1 rounded-full border border-white relative hover:bg-black/80 hover:border-none'
            onClick={handleNotificationClick}
          >
            {hasUnseenNotification && (
              <div className='absolute h-2 w-2 rounded-full bg-red-600 top-1 right-2'></div>
            )}
            <IoIosNotificationsOutline size={20} color='white' className='cursor-pointer' />
          </div>

          <div className='p-1 rounded-full border border-white hover:bg-black/80 hover:border-none'>
            <CiMenuFries size={20} color='white' className='cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
