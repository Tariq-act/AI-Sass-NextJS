'use client';

import { Menu } from 'lucide-react';

import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import Sidebar from './sidebar';
import { useEffect, useState } from 'react';

const MobileSidebar = () => {
  // Hydration ERROR resolve with this approach
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <div className='md:hidden'>
          <Button variant={'ghost'} size={'icon'}>
            <Menu />
          </Button>
        </div>
      </SheetTrigger>
      <SheetContent side={'left'} className='p-0'>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
