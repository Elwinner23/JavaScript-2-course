import React from 'react';

class Card extends React.Component{
    render(){
        return(
            <div>
                <div className='flex flex-col justify-center gap-[20px] border-2 border-cyan-700 rounded-md px-[40px] py-[20px]'>
                    <div className='flex flex-col gap-1'>
                    <span className='font-bold '>Номер карты:</span>
                    <input className='h-[35px] w-[300px] indent-[10px] border-cyan-700 rounded-md border-2' placeholder='0000 0000 0000 0000'/>
                    </div>
                <div className='flex items-center justify-center gap-[10px]'>
                    <span className='text-right font-bold'>Срок<br/>действия:</span>
                    <input className='h-[40px] w-[40px] border-2 text-center rounded border-cyan-700' placeholder='01'/> <p className='text-xl font-bold'>/</p> <input className='h-[40px] w-[40px] border-2 text-center rounded border-cyan-700' placeholder='24'/>
                </div>
                <div className='flex flex-col'>
                    <span className='font-bold'>Имя владельца и CVV/CVC:</span>
                    <div className='flex gap-[20px]'>
                        <input className='border-2 rounded border-cyan-700 indent-[10px] h-[35px] w-[250px]' placeholder='OLEG FOMIN'/>
                        <div className='flex flex-col'>
                            <input className='border-2 rounded border-cyan-700 w-[50px] h-[35px] text-center' placeholder='000'/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Card