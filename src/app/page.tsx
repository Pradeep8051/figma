import TradingViewMarketQuotesWidget from "@/components/TradingViewMarketQuotesWidget";
import TradingViewWidget from "@/components/TradingViewWidget";
import Image from "next/image";
import logo from "../Images/Group 37.png"
export default function Home() {
  return (
    <div className="flex justify-around m-[30px ] bg-[#00090C]">

      <div className="w-[20%] h-screen ">
        <TradingViewMarketQuotesWidget />
      </div>

      <div className="w-[45%]">
        <div className="container h-[60%]" id="container">
          <div className="w-full d-flex justify-around bg-[#07303F]">
            <div className="d-flex text-white">
              <Image src={logo} alt="logo"/>
              TetherUS Usdt</div>
            <div className="">24 hrs High 89.06 24 hrs Low 87.77</div>
          </div>
          <TradingViewWidget />






          
        </div>
      </div>

      <div className="w-[25%] ">

      </div>
    </div>
  );
}

