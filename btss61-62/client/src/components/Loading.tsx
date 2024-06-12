import ReactLoading from 'react-loading';

export default function Loading() {
  return (
    <div className='z-[999] w-[100%] h-[100vh] absolute top-0 left-0 bg-[#00000080] flex justify-center items-center'>
        <ReactLoading type='spin' color='white' height={'5%'} width={'5%'}></ReactLoading>
    </div>
  )
}
