"use client"
import { useRef, useEffect, useState } from "react";
import html2canvas from 'html2canvas';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import DeliveryIcon from './ui/icons/DeliveryIcons';

const OrderPrintTicket = () => {

  const componentRef = useRef(null);

  const handleCaptureClick = async () => {
      if (!componentRef.current) return;

      const canvas = await html2canvas(componentRef.current);
      const imgData = canvas.toDataURL('image/jpeg');

      const link = document.createElement('a');
      link.href = imgData;
      link.download = 'composant.jpg';
      link.click();

  };

  useEffect(() => {
          handleCaptureClick(); // Appel de handleCaptureClick seulement si alreadyDownloaded est false
      
  }, []); 


    const restaurant = {
        name: "Dodopizza",
        address: {
            street: "Avenue des dodos 7130 Binche",
            postCode: 7134,
            city: "Binche"
        }
    };

    const order = {
      _id: {
        $oid: "66741749f8cf387099dc4ecf"
      },
      orderNumber: 233485,
      customer: {
        firstname: "Lucien",
        lastname: "Delgrange",
        mail: "luciendelgrange5@gmail.com",
        phoneNumber: "0498089362",
        address: {
          street: "Rue du bout de la Haut",
          streetNumber: "8",
          postCode: "7390",
          city: "Quaregnon"
        },
        ip: "::1"
      },
      articles: [
        {
          food: {
            value: "Pizza Margherita",
            description: "Sauce tomate, Mozzarella, Basilic",
            price: 10.99,
            display: true,
            categoryNumber: 0,
            categoryTitle: "Pizza",
            tva: 6,
            _id: {
              $oid: "6637e51442bab015bccf1843"
            }
          },
          options: [
            {
              value: "Taille S",
              price: 0,
              isSupplement: false,
              display: true,
              isNeededInOrder: true,
              _id: {
                $oid: "6637e51242bab015bccf181d"
              }
            },
            {
              value: "Croûte normale",
              price: 0,
              isSupplement: false,
              display: true,
              isNeededInOrder: true,
              _id: {
                $oid: "6637e51342bab015bccf1826"
              }
            }
          ],
          quantity: 1,
          price: 10.99,
          sum: 10.99
        },
        {
          food: {
            value: "Pizza Pepperoni",
            description: "Sauce tomate, Mozzarella Pepperoni, Poivrons",
            price: 11.99,
            display: true,
            categoryNumber: 0,
            categoryTitle: "Pizza",
            tva: 6,
            _id: {
              $oid: "6637e51542bab015bccf1852"
            }
          },
          options: [
            {
              value: "Taille S",
              price: 0,
              isSupplement: false,
              display: true,
              isNeededInOrder: true,
              _id: {
                $oid: "6637e51242bab015bccf181d"
              }
            },
            {
              value: "Croûte normale",
              price: 0,
              isSupplement: false,
              display: true,
              isNeededInOrder: true,
              _id: {
                $oid: "6637e51342bab015bccf1826"
              }
            }
          ],
          quantity: 1,
          price: 11.99,
          sum: 11.99
        },
        {
          food: {
            value: "Fettuccine Alfredo",
            description: "Sauce Alfredo, Poulet grillé, Parmesan; Persil",
            price: 11.99,
            display: true,
            categoryNumber: 1,
            categoryTitle: "Pâtes",
            tva: 6,
            _id: {
              $oid: "6637e52042bab015bccf18e6"
            }
          },
          options: [
            {
              value: "Pâtes blanches",
              price: 0,
              isSupplement: false,
              display: true,
              isNeededInOrder: true,
              _id: {
                $oid: "6637e51f42bab015bccf18cd"
              }
            }
          ],
          quantity: 1,
          price: 11.99,
          sum: 11.99
        },
        {
          food: {
            value: "Bruschetta",
            description: "Tomates, Ail, Basilic, Pain grillé",
            price: 6.99,
            display: true,
            categoryNumber: 2,
            categoryTitle: "Entrées",
            tva: 6,
            _id: {
              $oid: "6637e52642bab015bccf1928"
            }
          },
          options: [],
          quantity: 2,
          price: 6.99,
          sum: 13.98
        },
        {
          food: {
            value: "Fondant au chocolat",
            description: "Chocolat noir, Beurre, Oeufs, Sucre, Farine",
            price: 8.99,
            display: true,
            categoryNumber: 3,
            categoryTitle: "Desserts",
            tva: 6,
            _id: {
              $oid: "6637e52742bab015bccf193c"
            }
          },
          options: [],
          quantity: 3,
          price: 8.99,
          sum: 26.97
        },
        {
          food: {
            value: "Tiramisu",
            description: "Biscuits à la cuillère, Café, Mascarpone, Cacao",
            price: 7.99,
            display: true,
            categoryNumber: 3,
            categoryTitle: "Desserts",
            tva: 6,
            _id: {
              $oid: "6637e52742bab015bccf193a"
            }
          },
          options: [],
          quantity: 1,
          price: 7.99,
          sum: 7.99
        }
      ],
      articlesSum: 83.91,
      deliveryFees: 2.5,
      totalSum: 86.41,
      note: "",
      orderType: 1,
      paymentMethod: "online",
      creationDate: "2024-06-20T11:49:28.976Z"
      ,
      lastUpdate: {
        $date: "2024-06-20T11:49:28.976Z"
      },
      transactionFees: {
        platformCommission: 0,
        onlinePayment: 1.86,
        total: 1.86
      },
      estimatedArrivalDate: "2024-06-20T17:00:00.000Z"
      ,
      status: "paymentPending",
      statusHistory: [
        {
          status: "paymentPending",
          date: {
            $date: "2024-06-20T11:49:28.976Z"
          }
        }
      ],
      restaurant: {
        $oid: "66145f2db84fa2b61c6acb85"
      },
      slug: "dodopizza",
      restaurantInfo: {
        name: "Dodopizza",
        phoneNumber: "+3288997766",
        address: {
          street: "Rue des Dodos",
          streetNumber: "5",
          postCode: "1000",
          city: "Bruxelles"
        },
        website: "www.dodopizza.com",
        privateSettings: {
          orderMailReception: {
            enabled: true,
            mail: "dodopizza.order@gmail.com"
          }
        }
      },
      formattedArticlesList: [
        {
          categoryTitle: "Pizza",
          categoryNumber: 0,
          articles: [
            {
              food: {
                value: "Pizza Margherita",
                description: "Sauce tomate, Mozzarella, Basilic",
                price: 10.99,
                display: true,
                categoryNumber: 0,
                categoryTitle: "Pizza",
                tva: 6,
                _id: {
                  $oid: "6637e51442bab015bccf1843"
                }
              },
              options: [
                {
                  value: "Taille S",
                  price: 0,
                  isSupplement: false,
                  display: true,
                  isNeededInOrder: true,
                  _id: {
                    $oid: "6637e51242bab015bccf181d"
                  }
                },
                {
                  value: "Croûte normale",
                  price: 0,
                  isSupplement: false,
                  display: true,
                  isNeededInOrder: true,
                  _id: {
                    $oid: "6637e51342bab015bccf1826"
                  }
                }
              ],
              quantity: 1,
              price: 10.99,
              sum: 10.99
            },
            {
              food: {
                value: "Pizza Pepperoni",
                description: "Sauce tomate, Mozzarella Pepperoni, Poivrons",
                price: 11.99,
                display: true,
                categoryNumber: 0,
                categoryTitle: "Pizza",
                tva: 6,
                _id: {
                  $oid: "6637e51542bab015bccf1852"
                }
              },
              options: [
                {
                  value: "Taille S",
                  price: 0,
                  isSupplement: false,
                  display: true,
                  isNeededInOrder: true,
                  _id: {
                    $oid: "6637e51242bab015bccf181d"
                  }
                },
                {
                  value: "Croûte normale",
                  price: 0,
                  isSupplement: false,
                  display: true,
                  isNeededInOrder: true,
                  _id: {
                    $oid: "6637e51342bab015bccf1826"
                  }
                }
              ],
              quantity: 1,
              price: 11.99,
              sum: 11.99
            }
          ]
        },
        {
          categoryTitle: "Pâtes",
          categoryNumber: 1,
          articles: [
            {
              food: {
                value: "Fettuccine Alfredo",
                description: "Sauce Alfredo, Poulet grillé, Parmesan; Persil",
                price: 11.99,
                display: true,
                categoryNumber: 1,
                categoryTitle: "Pâtes",
                tva: 6,
                _id: {
                  $oid: "6637e52042bab015bccf18e6"
                }
              },
              options: [
                {
                  value: "Pâtes blanches",
                  price: 0,
                  isSupplement: false,
                  display: true,
                  isNeededInOrder: true,
                  _id: {
                    $oid: "6637e51f42bab015bccf18cd"
                  }
                }
              ],
              quantity: 1,
              price: 11.99,
              sum: 11.99
            }
          ]
        },
        {
          categoryTitle: "Entrées",
          categoryNumber: 2,
          articles: [
            {
              food: {
                value: "Bruschetta",
                description: "Tomates, Ail, Basilic, Pain grillé",
                price: 6.99,
                display: true,
                categoryNumber: 2,
                categoryTitle: "Entrées",
                tva: 6,
                _id: {
                  $oid: "6637e52642bab015bccf1928"
                }
              },
              options: [],
              quantity: 2,
              price: 6.99,
              sum: 13.98
            }
          ]
        },
        {
          categoryTitle: "Desserts",
          categoryNumber: 3,
          articles: [
            {
              food: {
                value: "Fondant au chocolat",
                description: "Chocolat noir, Beurre, Oeufs, Sucre, Farine",
                price: 8.99,
                display: true,
                categoryNumber: 3,
                categoryTitle: "Desserts",
                tva: 6,
                _id: {
                  $oid: "6637e52742bab015bccf193c"
                }
              },
              options: [],
              quantity: 3,
              price: 8.99,
              sum: 26.97
            },
            {
              food: {
                value: "Tiramisu",
                description: "Biscuits à la cuillère, Café, Mascarpone, Cacao",
                price: 7.99,
                display: true,
                categoryNumber: 3,
                categoryTitle: "Desserts",
                tva: 6,
                _id: {
                  $oid: "6637e52742bab015bccf193a"
                }
              },
              options: [],
              quantity: 1,
              price: 7.99,
              sum: 7.99
            }
          ]
        }
      ],
    paymentIntentId: "pi_3PTjUbP4PUdMZVTS0AEvYHyk",
    __v: 0
  };


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
            <div className = "flex flex flex-col  items-start space-y-2 w-full">
            <img className = "self-center" src = "images/foodswip-logo-print.png"/>
        <p className = "text-xs text-black self-center">{restaurant.address.street} {restaurant.address.postCode} {restaurant.address.city}</p>
        <p className = "text-sm font-bold self-center"> Commande #{order.orderNumber}</p>
        <p className ="text-sm self-center">{formatCreationDate(order.creationDate)}</p>
                    
        {order.orderType === 0 ? <div className = "flex flex-row self-center gap-2"><DeliveryIcon height = {44} width = {44} color = "black"/> <p className ="text-4xl font-bold self-center"> Livraison</p></div> : order.orderType === 1 ?  <div className = "flex flex-row self-center gap-2"><ShoppingBagIcon className = "text-black h-9 w-9"/> <p className ="text-4xl font-bold self-center"> À emporter</p></div> : null}
        <p className = "text-4xl font-bold self-center pb-1">Heure confirmée → {formatEstimatedArrivalDate(order.estimatedArrivalDate)}</p>

            </div>


            <div className = "self-start font-semibold text-xl border-t border-b border-black py-2 w-full">
                Liste des articles
            </div>
            <div className = "flex flex-col justify-start items-start w-full border-black">
              {order.formattedArticlesList.map(((element,i) => {
                return(<div className =" w-full" key = {i}>
                  <p className = "text-xl font-extrabold">{element.categoryTitle}</p>
                  <div className = "ps-10 py-2 w-full">{element.articles.map((article,j) => {
                    return(<div className = "py-2"key = {j}><div className = "flex flex-row justify-between text-xl font-semibold w-full"> <div className = "flex flex-row gap-4"><p className = "font-extrabold">{article.quantity}</p> <p>X</p><div className = "flex flex-col"><p>{article.food.value}</p> {article.options.map((option, k) => {
                      let formattedOption = option.value
                      if(!option.isNeededInOrder){
                        formattedOption = ""
                      }
                      else if(option.isSupplement){
                        formattedOption = `+${option.value}`
                      }
                     return(<p className = "font-normal">{formattedOption}</p>)
                    })}</div> </div> <p>{article.sum} €</p></div>  </div>)

                  })}</div>       <div className = "self-start font-semibold text-xl pb-2 w-full">
              </div>
                </div>)

              }))}

            </div>
            <div className = "w-full">
            { order.orderType === 0 ?
            <div className = "flex flex-row justify-between font-semibold text-xl  border-t border-b  border-black py-2 w-full">
                <p>Frais de livraison</p> <p>{order.deliveryFees} €</p>
            </div> : null
}

<div className = "flex flex-row justify-between font-semibold text-xl border-b  border-black w-full py-2">
                <p>Montant Total</p> <p>{order.totalSum} €</p>
            </div>
            </div>
       {order.note && <p>Note de commande: {order.note} </p>}
       <div className = "text-4xl font-extrabold">{switchPaymentMethodLabel(order.paymentMethod)}</div>
       <table class="min-w-full bg-white border border-gray-200">
      <thead>
  
      </thead>
      <tbody class="text-xl font-semibold">
        <tr>
          <td class="py-2 px-4 border border-black font-normal">Nom</td>
          <td class="py-2 px-4 border border-black">{order.customer.firstname} {order.customer.lastname}</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border border-black font-normal">Adresse</td>
          <td class="py-2 px-4 border border-black">{order.customer.address.street}, {order.customer.address.streetNumber}</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border border-black font-normal">Ville</td>
          <td class="py-2 px-4 border border-black">{order.customer.address.postCode} {order.customer.address.city}</td>
        </tr>
        <tr>
          <td class="py-2 px-4 border border-black font-normal">Numéro de téléphone</td>
          <td class="py-2 px-4 border border-black">{order.customer.phoneNumber}</td>
        </tr>
      </tbody>
    </table>
        </div>
        
      )

}

export default OrderPrintTicket