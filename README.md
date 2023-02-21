# Setting up environment

```python
> npx create-next-app .
> npm install -legacy-peer-deps 
> npm install -g @sanity/cli
> cd sanity_ecommrce
> sanity run dev

> What are libraries used?
- @sanity/client, @sanity/image-url
- stripe, @stripe/stripe-js, canvant-confetti
- next, next-sanity-image
- react, react-dom, react-host-toast, react-icons

```

# Create Schemas in sanity_ecommerce

```python
import banner from './banner'
import product from './product'

export const schemaTypes = [product, banner]



```