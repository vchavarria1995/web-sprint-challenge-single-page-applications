import React from 'react';

export default function PizzaForm(props) {
    const { values, submit, change, errors, disabled } = props
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = event => {
        const { name, value, type, checked } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }
    return (
        <div className='pizzaFormDiv' id='pizza-form'>
            <h1>Order Now</h1>
            <img src='../Assets/Pizza.jpg' alt='pizza'></img>
            <form onSubmit={onSubmit}>
                <div className='errors'>
                    <p>{errors.name}</p>
                    <p>{errors.size}</p>
                </div>

                <label>
                    <h3>Name</h3>
                    <input
                        name='name'
                        type='text'
                        value={values.name}
                        onChange={onChange}
                        id='name-input'
                    />
                </label>

                <label>
                    <h3>Pizza Size</h3>
                    <select
                        id='size-dropdown'
                        onChange={onChange}
                        value={values.size}
                        name='size'>
                        <option value=''>---Size---</option>
                        <option value='personal'>Personal</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </label>

                <label>
                    <h3>Toppings</h3>
                    <h4>Select Toppings</h4>
                    <label>Pepperoni
                    <input
                            type='checkbox'
                            name='pepperoni'
                            onChange={onChange}
                        />
                    </label>

                    <label>Olives
                    <input
                            type='checkbox'
                            name='olives'
                            onChange={onChange}
                        />
                    </label>

                    <label>Sausage
                    <input
                            type='checkbox'
                            name='sausage'
                            onChange={onChange}
                        />
                    </label>

                    <label>Mushrooms
                    <input
                            type='checkbox'
                            name='mushrooms'
                            onChange={onChange}
                        />
                    </label>
                </label>

                <label>
                    <h3>Special Instructions (Optional)</h3>
                    <input
                        id='special-text'
                        style={{ width: '90%', marginLeft: '4%' }}
                        name='instructions'
                        type='text'
                        onChange={onChange}
                        value={values.instructions}
                    />
                </label>

                <button id="submit" disabled={disabled}>Place Order</button>

            </form>
        </div>
    )
} 