import express from "express";
import form from "./formRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Backend"})
    })

    app.use(
        express.json(),
        form,
    )
}

export default routes