import React,{useState,useEffect} from 'react';

const Hero = () => {

    const [loopNum,setLoopNum] = useState(0);
    const [isDeleting,setIsDeleting] = useState(false);
    const [text,setText] = useState('');
    const [delta,setDelta] = useState(300 - Math.random() * 100);
    const [index,setIndex] = useState(1);
    const toRotate = ["B2B","B2C","SaSS"];
    const peroid = 200;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();

        },delta);
        return () => {clearInterval(ticker)};
    },[text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1);

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta /2);
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(peroid);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setIndex(1);
            setDelta(500);
        }else{
            setIndex(prevIndex => prevIndex+1);
        }
    }
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                
                <p className='uppercase text-[#00df9a] font-bold p-2'>Grow with data analytics</p>
                
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
                
                <div className='flex justify-center py-2'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Fast, flexible and financing for </p>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-500 md:pl-4 pl-2'>{text}</p>
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500 pt-2'>Monitor your data analytics tp increase revenue for B2C, B2C, SaSS</p>

                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Get Started</button>
            </div>

        </div>
    )
}

export default Hero;