import React from 'react'

import Image from './Image'
import Categori from "../assets/feature-categori1.png"
import Flex from './Flex'
function ProductCategoris() {
    return (
        <div className='w-44 bg-white shadow-md py-4 rounded-md'>
            <Flex className="justify-center">
                <Image src={Categori} />
            </Flex>
            <p className='font-pop mt-2.5 text-base font-semibold text-primary text-center'>Home Appliances</p>
        </div>
    )
}

export default ProductCategoris