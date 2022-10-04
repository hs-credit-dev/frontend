import src from "assets/svg/hsc-logo-no-text.svg";

const Logo = () => {
  return (
    <span className='flex items-center gap-2'>
      <img src={src} alt="logo" />
      <p className="font-bold text-3xl text-black">hs.credit</p>
    </span>
  );
};

export default Logo;
