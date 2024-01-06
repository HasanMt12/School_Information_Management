import './marquee.css'
// eslint-disable-next-line react/prop-types
const Marquee = ({ text }) => {
  return (
    <div className="marquee-container  mx-1">
      <div className="marquee-content">
        <p className='lg:text-md md:text-sm text-sm font-semibold text-gray-700'>{text}</p>
      </div>
    </div>
  );
};

export default Marquee;