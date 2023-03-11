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

# MYSQL

```sql
- Install strapi:
    > npx create-strapi-app@latest .
    > yarn develop (remember to reconfigure mysql installer-community - authentication to be able to run)

- In Strapi Dashboard:
    > Content-type Builder: create collection types (categories, products, subcategories,etc.)
    > Create relationship between those table
    > Create API token in Setting




```