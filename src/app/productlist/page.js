'use client'
import { useEffect, useState } from "react"

export default function page() {
    const [productData, setProductData] = useState();
    useEffect(() => {
        async function fetchData() {
            try {
                const result = await fetch('https://dummyjson.com/products');
                const data = await result.json();
                console.log("Data", data);
                setProductData(data);
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [])
    return (
        <div>
            <h2 className="font-bold text-[14px]">ProductList</h2>
            {
                productData?.products?.map((item) => (
                    <p key={item.id}><strong>Name : </strong>{item.title}, <strong>Category : </strong>{item.category}</p>
                ))
            }
        </div>
    )
}
