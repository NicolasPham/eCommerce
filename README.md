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

# STRAPI

```sql
- Install strapi:
    > npx create-strapi-app@latest .
    > yarn develop (remember to reconfigure mysql installer-community - authentication to be able to run)

- In Strapi Dashboard:
    > Content-type Builder: create collection types (categories, products, subcategories,etc.)
    > Create relationship between those table
    > Create API token in Setting
- Store Strapi_API_Token and API_URL in .env file
- Use "axios" to get data
    - When performing a request to Strapi's REST API, the API token should be added to the request's Authorization header with the following syntax: 
        > "bearer " +  process.env.API_TOKEN



2:00

```