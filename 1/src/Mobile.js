import React from 'react'
import MobileList from './MobileList'

const product = [{
    img: "https://rukminim2.flixcart.com/image/312/312/xif0q/dslr-camera/i/o/c/eos-r100-24-1-eos-r100-kit-canon-original-imagqeydhsxgacxp.jpeg?q=70",
    name: "Canon Camera",
    price: "Rs 5,00,000"
},
{
    img: "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/p/r/z/enco-buds-2-oppo-original-imagh9frfp7gxdb3.jpeg?q=70&crop=false",
    name: "Earphones",
    price: "Rs 5,000"
}]

export default function Mobile() {
    return (
        <div>
            {product.map((ele)=>{
                return <MobileList 
                img={ele.img} 
                name={ele.name} 
                price={ele.price} 
                />
            })}
            

        </div>
    )
}
