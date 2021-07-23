import React, { useState, useEffect } from "react";
import './App.css'
import Home from './components/home'
import Header from './components/header'
import Form from './components/form'
import { Route, Switch } from 'react-router-dom'
import Schema from './components/schema'
import * as yup from 'yup'
import axios from 'axios'

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  olives: false,
  jalapenos: false,
  mushrooms: false,
  instructions: ''
}
const initialFormErrors = {
  name: 'Please provide a name',
  size: 'Please choose a size',
}

export default function App() {

  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(true)

  const createPizza = (pizza) => {
    axios
      .post("https://reqres.in/api/orders", pizza)
      .then((res) => {
        setPizzas([...pizzas, res.data]);
        setFormValues(initialFormValues);
        console.log(`New pizza`, pizza);
      })
      .catch((err) => {
        debugger;
        console.log(err);
      })
  };

  const inputChange = (name, value) => {
    yup.reach(Schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: '' })
      })
      .catch(err => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] })
      })
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const pizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      toppings: ['pepperoni', 'olives', 'sausage', 'mushrooms'].filter(topping => formValues[topping])
    }
    createPizza(pizza)
  }
  useEffect(() => {
    Schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <>
    <Switch>
        <Route path="/pizza">
          <Header />
          <Form
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            errors={formErrors}
            disabled={disabled} />
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </>
  )};