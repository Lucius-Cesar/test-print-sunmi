"use client"
import { useRef, useEffect, useState } from "react";
import html2canvas from 'html2canvas';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import DeliveryIcon from './ui/icons/DeliveryIcons';


const OrderPrintTicket = ({order, restaurant}) => {

  const componentRef = useRef(null);

  const handleCaptureClick = async () => {
      if (!componentRef.current) return;

      console.log("héhé")

      const canvas = await html2canvas(componentRef.current);
      const imgData = canvas.toDataURL('image/jpeg');

      const link = document.createElement('a');
      link.href = imgData;
      link.download = 'composant.jpg';

  };

  useEffect(() => {
          order && restaurant && handleCaptureClick();
      
  }, [order]); 


 


  function formatCreationDate(creationDate) {
    creationDate = new Date(creationDate)
    const options = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return creationDate.toLocaleDateString('fr-BE', options);
  }

  function formatEstimatedArrivalDate(estimatedArrivalDate) {
    estimatedArrivalDate = new Date(estimatedArrivalDate);
    const options = {
      hour: '2-digit',
      minute: '2-digit'
    };
    return estimatedArrivalDate.toLocaleTimeString('fr-BE', options);
  }

  const switchPaymentMethodLabel = (paymentMethod) => {
    switch (paymentMethod) {
      case "cash":
        return "Commande à payer en cash"
        break
      case "bancontact":
        return "Commande à payer via bancontact"
        break
      case "online":
        return "Commande payée en ligne"
      default:
      // code to be executed if paymentMethod is different from 'method1' and 'method2'
    }
  }
  
 
      return(
        <div ref = {componentRef} className="flex flex-col items-center justify-start bg-white space-y-8 text-black w-full">
            <div className = "flex flex flex-col  items-start w-full">
            <img className = "self-center" src = "images/foodswip-logo-print.png"/>
        <p className = "text-lg text-black self-center">{restaurant.address.street} {restaurant.address.postCode} {restaurant.address.city}</p>
        <p className = "text-lg font-bold self-center"> Commande #{order.orderNumber}</p>
        <p className ="text-lg self-center">{formatCreationDate(order.creationDate)}</p>
        <div className = "flex flex-col justify-center items-center w-full ">
        {order.orderType === 0 ? <div className = "align-middle	flex flex-row  justify-center items-center self-center gap-2"><div className = "mt-8"><DeliveryIcon height = {44} width = {44} color = "black"/></div> <p className ="text-4xl font-bold self-center"> Livraison</p></div> : order.orderType === 1 ?  <div className = "flex flex-row justify-center items-center self-center gap-2 mt-2"><div className = "mt-6"><ShoppingBagIcon className = " text-black h-10 w-10"/> </div> <p className ="text-4xl font-bold self-center"> À emporter</p></div> : null}
        </div>
        <p className = "text-4xl font-bold self-center pb-1">{formatEstimatedArrivalDate(order.estimatedArrivalDate)}</p>

            </div>


            <div className = "font-semibold text-2xl border-t border-b border-black w-full pb-5">
                Liste des articles
            </div>
            <div className = "flex flex-col justify-start items-start w-full border-black">
              {order.formattedArticlesList.map(((element,i) => {
                return(<div className =" w-full" key = {i}>
                  <p className = "text-2xl font-extrabold">{element.categoryTitle}</p>
                  <div className = "ps-6 py-2 w-full">{element.articles.map((article,j) => {
                    return(<div className = "py-2"key = {j}><div className = "flex flex-row justify-between text-2xl font-semibold w-full pe-2"> <div className = "flex flex-row gap-4"><p className = "font-extrabold">{article.quantity}</p> <p>X</p><div className = "flex flex-col"><p>{article.food.value}</p> {article.options.map((option, k) => {
                      let formattedOption = option.value
                      if(!option.isNeededInOrder){
                        formattedOption = ""
                      }
                      else if(option.isSupplement){
                        formattedOption = `+${option.value}`
                      }
                     return(<p className = "font-normal">{formattedOption}</p>)
                    })}</div> </div> <p>{article.sum} €</p></div>  </div>)

                  })}</div>       <div className = "self-start font-semibold text-2xl pb-2 w-full">
              </div>
                </div>)

              }))}

            </div>
            <div className = "w-full">
            { order.orderType === 0 ?
            <div className = "flex flex-row justify-between font-semibold text-2xl  border-t  border-black pb-5 w-full pe-2">
                <p>Frais de livraison</p> <p>{order.deliveryFees} €</p>
            </div> : null
}

<div className = "flex flex-row justify-between font-semibold text-2xl border-b border-t border-black w-full pb-5 pe-2">
                <p  >Montant Total</p> <p>{order.totalSum} €</p>
            </div>
            </div>
       {order.note && <p>Note de commande: {order.note} </p>}
       <div className = "text-4xl font-extrabold text-center">{switchPaymentMethodLabel(order.paymentMethod)}</div>
       <table class="min-w-full bg-white border border-gray-200">
      <thead>
  
      </thead>
      <tbody class="text-2xl font-semibold">
        <tr>
          <td class="py-2 px-4 border border-black font-normal pb-8">Nom</td>
          <td class="py-2 px-4 border border-black  pb-8">{order.customer.firstname} {order.customer.lastname}</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border border-black font-normal  pb-8">Adresse</td>
          <td class="py-2 px-4 border border-black pb-8">{order.customer.address.street}, {order.customer.address.streetNumber}</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border border-black font-normal pb-8">Ville</td>
          <td class="py-2 px-4 border border-black pb-8">{order.customer.address.postCode} {order.customer.address.city}</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border border-black font-normal pb-8">Numéro de téléphone</td>
          <td class="py-2 px-4 border border-black">{order.customer.phoneNumber}</td>
        </tr>
      </tbody>
    </table>
        </div>
        
      )

}

export default OrderPrintTicket