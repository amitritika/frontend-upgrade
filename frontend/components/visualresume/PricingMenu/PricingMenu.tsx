import PricingMenu from "../../common/PricingMenu/PricingMenu"
import { mockPricingOptions } from "../../common/PricingMenu/mockupData"
import {useEffect, useState} from 'react'
import { payButtons} from '../../../actions/payUMoney';
import { signout, isAuth } from '../../../actions/auth';

const Pricing = () => {
  
    const [fresher,  setFresher] = useState({
          button: "",
          discount: 0,
          price: 250
      });
    const [pro,  setPro] = useState({
          button: "",
          discount: 0,
          price: 500
      })
    const [expert,  setExpert] = useState({
          button: "",
          discount: 0,
          price: 1000
      })
    
    useEffect(()=>{
      let price =0
      payButtons("fresher").then( data=>{
              if(data.error){
                  console.log(data.error)
              }else{
                  if(data.discount !== 0){
                      price = 250 - (250 * (data.discount)/100);
                      setFresher({button: data.button, price: price, discount: data.discount})
                  }else{
                      setFresher({button: data.button, price: 250, discount: data.discount})
                  }
                  
        }
          })
      
      payButtons("pro").then( data=>{
              if(data.error){
                  console.log(data.error)
              }else{
                  if(data.discount !== 0){
                      price = 500 - (500 * (data.discount)/100);
                      setPro({button: data.button, price: price, discount: data.discount})
                  }else{
                      setPro({button: data.button, price: 500, discount: data.discount})
                  }
        }
          })
      
       payButtons("expert").then( data=>{
              if(data.error){
                  console.log(data.error)
              }else{
                  if(data.discount !== 0){
                      price = 1000 - (1000 * (data.discount)/100);
                      setExpert({button: data.button, price: price, discount: data.discount})
                  }else{
                      setExpert({button: data.button, price: 1000, discount: data.discount})
                  }
        }
          })
      
      
      
    }, [])
    return(
        <div className="flex flex-wrap container">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
                <PricingMenu 
                    title={mockPricingOptions[0].title}
                    imageSrc={mockPricingOptions[0].imageSrc}
                    discount={fresher.discount}
                    price={fresher.price}
                    isAuth={isAuth() ? true : false} 
                    features={mockPricingOptions[0].features} 
                    purchaseLink={mockPricingOptions[0].purchaseLink} 
                    resumeBuilderLink={mockPricingOptions[0].resumeBuilderLink}            
                    />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
                <PricingMenu 
                    title={mockPricingOptions[1].title}
                    imageSrc={mockPricingOptions[1].imageSrc}
                    discount={pro.discount}
                    price={pro.price}
                    isAuth={isAuth() ? true : false} 
                    features={mockPricingOptions[1].features} 
                    purchaseLink={mockPricingOptions[1].purchaseLink} 
                    resumeBuilderLink={mockPricingOptions[1].resumeBuilderLink}
                    classSelected = {true}            
                    />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
                <PricingMenu 
                    title={mockPricingOptions[2].title}
                    imageSrc={mockPricingOptions[2].imageSrc}
                    discount={expert.discount}
                    price={expert.price}
                    isAuth={isAuth() ? true : false} 
                    features={mockPricingOptions[2].features} 
                    purchaseLink={mockPricingOptions[2].purchaseLink} 
                    resumeBuilderLink={mockPricingOptions[2].resumeBuilderLink}            
                    />
            </div>
        </div>          
        
    )
}

export default Pricing;