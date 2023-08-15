import Image from 'next/image';

function Status({status, img, cor, bg, value}) {
  return (
    <div className={`flex justify-between items-center w-full sm:w-[250px] ${bg} rounded-lg p-3 my-4 font-bold`}>
      <div className='flex justify-center items-center'>
        <Image src={img} alt='Reaction' width={18} height={18} />
      </div>
      <span className={`w-[130px] ${cor}`} >{status}</span>
      <div className=' font-extrabold'>
        <span>{value}</span>
        <span className='text-lightLavender'> / 100</span>
      </div>
    </div>
  );
}

export default Status;