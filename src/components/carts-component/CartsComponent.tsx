import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ICart} from "../../moduls/ICart.ts";
import {ICartResponseModel} from "../../moduls/ICartResponseModel.ts";
import {cartService} from "../../services/api.service.ts";

export const CartsComponent = () => {
    const {id} = useParams();
    const [carts, setCarts] = useState<ICart[]>([])
    useEffect(() => {
      if (id){
          cartService.getCartsOfUser(id)
              .then(({carts}: ICartResponseModel) => {
                  setCarts(carts);
              });
      }
    }, [id])
    return (
        <div>
            {
                 carts.map((cart: ICart) => (
                     <div>
                         {cart.total}asd
                     </div>
                 ))
            }
        </div>
    );
};