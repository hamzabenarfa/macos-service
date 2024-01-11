const Payment = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 md:flex-row">
      <p className="text-xl font-bold">Paiments sécurisés:</p>

      <div className="flex flex-row">
        <img src="/paypal.png" alt="paypal" className="w-12" />
        <img src="/visa.png" alt="paypal" className="w-12" />
        <img src="/mastercard.png" alt="paypal" className="w-12" />
        <img src="/g3.png" alt="paypal" className="w-12" />
      </div>
    </div>
  );
};

export default Payment;
