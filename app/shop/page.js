import MainHeading from '../components/MainHeading'
import Product from '../components/Product'

export default function shop(){
    return(
        <>
        <div>
            <Product className="bg-gray-100 p-4" name="Product 1" src="/img1.avif" detail="This is product 1"/>
            <Product className="bg-gray-100 p-4" name="Product 2" src="/img2.avif" detail="This is product 2"/>
            <Product className="bg-gray-100 p-4" name="Product 3" src="/img3.avif" detail="This is product 3"/>
        </div>
        </>
    )
}



