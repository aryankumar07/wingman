import { assets } from "../../assets/assets";

interface LogoProps {
  asset? : string,
  name? : string,
  height? : number,
  width? : number
}


const LogoIcon : React.FC<LogoProps> = ({
  asset : _asset,
  height : _height,
  width : _width,
})=>{
  return (
    <>
      {_asset ? (
        <img className="w-36" src={_asset} alt="logo" />
      ) : (
        <div>
          <img className="w-36" src={assets.no_logo} alt="logo" />
        </div>
      )}
    </>
  );
}

export default LogoIcon