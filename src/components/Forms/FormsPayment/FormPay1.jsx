import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { checkout, updatePack, getInfoPack } from "../../../api/api";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const stripePromise = loadStripe("pk_test_51MsvOdAbbMzh5r4qGVRNAvvx3G1tAWDIRqR2IqHrxWxjD7gY6nLoHFGD4p22Ewuba5YtaFRVjxo2YeNEbdnZ6AdY00YpLBMeEn")

const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)

  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    });

    if (!error) {
      console.log(paymentMethod);
      const { id } = paymentMethod
      try {
        setLoading(true)
        const { data } = await checkout({
          id,
          amount: 1000000,
          paquete: "paquete1"
        })
        console.log(data);
        if (data == "confirm") {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "pago realizado",
            showConfirmButton: false,
            timer: 1500,
            iconColor : "#064663",
            backdrop : "white",
            padding : "3em",
            color: "#064663",
            customClass : "border", 
          });
          const result = await updatePack({ pack: 1 })
          console.log(result.data.data);
          if (result.data.data == "update pack") {
            navigate('/catalogue')
          }

        } else {
          Swal.fire({
            position: "center",
            icon: "warning",
            title: "hubo un error con el pago",
            showConfirmButton: false,
            timer: 1500,
            iconColor : "#064663",
            backdrop : "white",
            padding : "3em",
            color: "#064663",
            customClass : "border", 
          });
          elements.getElement(CardElement).clear()
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false)
    }
  }
  return (<>
    {buttonChange ? <form >
      <h2>Face-job</h2>
      <h3>Paquete 1</h3>
      <CardElement className="inputPayment" />
      <button> comprado
      </button>

    </form> :
      <form onSubmit={handleSubmit}>
        <h2>Face-job</h2>
        <h3>Paquete 1</h3>
        <CardElement className="inputPayment" />
        <button disabled={!stripe}>{loading ? "cargando..." : "comprar"}
        </button>

      </form>
    }
  </>)
}

const FormPay1 = () => {

  return (
    <section className="container-formPay">
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </section>
  )

}

export default FormPay1