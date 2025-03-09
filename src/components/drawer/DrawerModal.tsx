import { Button } from '@/components/shared/Button'
import { Drawer, DrawerContent, DrawerTitle, DrawerHeader, DrawerDescription, DrawerBody, DrawerFooter, DrawerClose } from '../shared/Drawer';
import { PowerUsageProps } from '@/utils/types';
interface DrawerModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  data?: PowerUsageProps;
  className?: string;
}

export const DrawerModal = ({ isOpen, setIsOpen, className }: DrawerModalProps) => {
    return (
   <>
        <div className={`flex justify-center`}>
          <Drawer
            open={isOpen}
            onOpenChange={setIsOpen}
          >
            <DrawerContent className={`sm:max-w-lg ${className}`}>
              <DrawerHeader >
                <DrawerTitle className='text-gray-800'>Account Created Successfully</DrawerTitle>
              </DrawerHeader>
              <DrawerDescription className="mt-1 text-xs"> Your account has been created successfully. You can now login to
                your account. For more information, please contact us. Your account has been created successfully. You can now login to your account. For more information, please contact us.
              </DrawerDescription>
              <DrawerBody className='text-xs flex flex-col gap-4'>
                <div>
                  <p className="text-semibold font-bold text-pink-700">This is they body of the drawer, content goes here. </p>
                  This is they body of the drawer, content goes here. This is they body of the drawer, content goes here.
                </div>
                <div>
                  <p className="text-semibold font-bold text-pink-700">This is they body of the drawer, content goes here. </p>
                  This is they body of the drawer, content goes here. This is they body of the drawer, content goes here.
                </div>
                <div>
                  <p className="text-semibold font-bold text-pink-700">This is they body of the drawer, content goes here. </p>
                  This is they body of the drawer, content goes here. This is they body of the drawer, content goes here.
                </div>
              </DrawerBody>
        <DrawerFooter className="mt-6">
                <DrawerClose asChild>
                  <Button className="w-full sm:w-fit !bg-pink-700 rounded-3xl">Ok, got it!</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  </div>
  </>
    )
};
