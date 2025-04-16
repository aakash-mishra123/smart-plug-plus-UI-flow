import { Button } from "@/components/shared/Button";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerHeader,
  DrawerDescription,
  DrawerBody,
  DrawerFooter,
  DrawerClose,
} from "../shared/Drawer";
import { MdOutlineWatchLater } from "react-icons/md";
import { DrawerModalProps } from "@/utils/types";

const DrawerModal = ({ isOpen, setIsOpen, className }: DrawerModalProps) => {
  return (
    <>
      <div className={`flex justify-center rounded-t-[12px] !overflow-y-scroll`} style={{ overflowY: 'scroll', maxHeight: '70%'}}>
        <Drawer open={isOpen} onOpenChange={setIsOpen} >
          <DrawerContent className={`w-full ${className}`}>
            <DrawerHeader>
              <DrawerTitle className="text-gray-800 text-md my-2 font-bold">
                Come funziona la tariffa a fasce?
              </DrawerTitle>
            </DrawerHeader>
            <DrawerDescription className="mt-4 text-sm xsm:text-sm xs:text-base text-md font-thin">
              {" "}
              Le tariffe di consumo a fasce si basano sulla suddivisione della
              giornata in diversi periodi orari (detti fasce) &apos; con costi
              variabili a seconda della fascia oraria in cui si utilizza l
              $apos; energia. Ecco le principali distinzioni:
            </DrawerDescription>
            <DrawerBody className="text-xs flex flex-col gap-4 pb-4">
              <div className="flex flex-col py-0">
                <p className="text-lg font-bold text-pink-700">
                  Fascia F1 (ore di punta){" "}
                </p>
                <div className="flex flex-row gap-2 mb-1 mt-1 items-center">
                  <MdOutlineWatchLater className="text-md font-semibold text-gray-800" />

                  <p className="text-sm font-bold text-black font-bold text-black">
                    Dal lunedì al venerdì, dalle 8:00 alle 19:00.
                  </p>
                </div>
                <DrawerDescription className="text-[#667790] text-sm xsm:text-sm xs:text-base text-md ">
                  Tariffa più alta, poiché corrisponde ai momenti di maggior
                  richiesta energetica.
                </DrawerDescription>
              </div>
              <div className="flex flex-col">
                <p className="text-lg font-bold text-pink-700">
                Fascia F2 (ore intermedie){" "} 
                </p>
                <div className="flex flex-row gap-1 mb-1 mt-1 items-center">
                  <MdOutlineWatchLater className="text-lg min-w-6 font-semibold text-gray-800" />

                  <p className="text-sm font-bold text-black font-bold text-black">
                    Dal lunedì al venerdì, dalle 7:00 alle 8:00 e dalle 19:00
                    alle 23:00; il sabato dalle 7:00 alle 23:00.
                  </p>
                </div>
                <DrawerDescription className="text-[#667790] text-sm xsm:text-sm xs:text-base text-md">
                Tariffa intermedia, con un costo più basso rispetto alla F1 ma più alto della F3.
                </DrawerDescription>
              </div>
              <div className="flex flex-col">
                <p className="text-lg font-bold text-pink-700">
                  Fascia F3 (ore fuori punta)
                </p>
                <div className="flex flex-row gap-1 mb-1 mt-1 items-center">
                  <MdOutlineWatchLater className="text-lg min-w-6 font-semibold text-gray-800" />

                  <p className="text-sm font-bold text-black">
                    Dal lunedì al sabato, dalle 23:00 alle 7:00; domenica e
                    festivi tutto il giorno.
                  </p>
                </div>
                <DrawerDescription className="text-[#667790] text-sm xsm:text-sm xs:text-base text-md">
                Tariffa più economica, poiché la domanda di energia è più bassa.
                </DrawerDescription>
              </div>
            </DrawerBody>
            <DrawerFooter className="pt-4">
              <DrawerClose asChild>
                <Button className="w-full h-12 sm:w-fit !bg-pink-700 rounded-full">
                  Ok, ho capito!
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};

export default DrawerModal;
