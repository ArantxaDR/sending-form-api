# Mediasmart challenge

Thwe task is to create a form that sends data to a database through an API.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Quick Start Guide :computer:

If you have decided to clone this repo,:
1. **Open a terminal** in the root folder of your repository.
1. **Install the local dependencies** by executing the following command in the terminal:

```bash
npm install
```
### To start the project:

Once we have installed the dependencies, run the following command in the terminal:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project decision :notebook_with_decorative_cover:

The app has been organized in two parts:

* A **API** wich connects to a [MongoDB](https://www.mongodb.com/)
* A **form** where you fill up the fields and send the data.

I've use this [youtube tutorial](https://www.youtube.com/watch?v=SiUM8vYeuu0) to learn how to create the database and connect it with the API.
Due to the schema needing an unique key, I've used [uuid](https://www.npmjs.com/package/uuid) to generete a random one everytime the date is sent to the database.

