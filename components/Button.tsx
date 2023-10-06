"use client";

const Button = (props: {
  function: "Delete";
  productId: Number;
  data?: {};
}) => {
  const functionallity = async () => {
    await fetch("/api/products", {
      method: "DELETE",
      body: JSON.stringify(props.productId),
    });
    window.location.reload();
  };

  return <button onClick={functionallity}>{props.function}</button>;
};

export default Button;
