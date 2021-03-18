import React from "react";
import classes from "./Burger.css";
import BurgerIngrediants from "./BurgerIngrediants/BurgerIngrediants";

const Burger = (props) => {
let  trasnsformedIngrediants = Object.keys(props.ingrediants).map(
    (igKey) => {
      return [...Array(props.ingrediants[igKey])].map((_, i) => {
        return <BurgerIngrediants key={igKey + i} type={igKey} />;
      });
    }
  ).reduce((arr,el)=>{
      return arr.concat(el);
  },[]);
  if (trasnsformedIngrediants.length===0){
      trasnsformedIngrediants = <p>Please start adding ingrediants</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngrediants type="bread-top" />
      {trasnsformedIngrediants}
      <BurgerIngrediants type="bread-bottom" />
    </div>
  );
};

export default Burger;
