import Image from "next/image"
import MeterIcon from "../../../public/assets/Bg.png";
const OfflineScreen = () => {
    return (
        <div className="w-full bg-white flex flex-col gap-2 items-center text-center p-6 pb-12">
            <Image
                src={MeterIcon}
                alt="meter_icon"
                height={180}
                className="bg-white w-fit"
            />
            <div className="p-4 flex flex-col gap-2">

                <p className="text- font-semibold">Sembra che la tua presa plus non sia connessa!</p>
                <p className="text-lg text-[#667790] font-thin">Il dispositivo non riesce a completare la connessione.</p>
            </div>

            <div className="flex flex-col gap-2 items-left w-full text-left">

                <p className="font-bold text-xl">Come posso risolvere il problema?</p>
                <p className="text-md text-[#667790] font-thin">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. </p>

                <div className="flex flex-col gap-2 p-2 bg-[#F7F8FB] rounded-[6px]">

                    <p className="text-lg font-semibold">1. {" "} Lorem ipsum dolor sit amet</p>
                    <p className="text-md font-thin text-[#667790]">
                        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem </p>
                </div>

                <div className="flex flex-col gap-2 p-2 bg-[#F7F8FB] rounded-[6px]">

                    <p className="text-lg font-semibold">2. {" "} Lorem ipsum dolor sit amet</p>
                    <p className="text-md font-thin text-[#667790]">
                        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem </p>
                </div>
                <div className="flex flex-col gap-2 p-2 bg-[#F7F8FB] rounded-[6px]">

                    <p className="text-lg font-semibold">3. {" "} Lorem ipsum dolor sit amet</p>
                    <p className="text-md font-thin text-[#667790]">
                        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem </p>
                </div>
            </div>

            <hr className="text-[#667790]" />

            <div className="flex flex-col gap-2 items-center">
                <p className="font-bold text-black">Non riesci a risolvere il problema? </p>
                <p className="font-thin text-black text-lg">Contatta l’assistenza cliccando sul
                    pulsante che si trova in alto a destra.</p>
            </div>

        </div>
    )
};

export default OfflineScreen;