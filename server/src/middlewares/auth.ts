import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'
import User from "../entities/User";

export default async (req: Request, res: Response, next: NextFunction) => {
    try{
        const user: User | undefined = res.locals.user;

        if(!user) throw new Error ("Unauthenticated");

        return next();
    }catch(error){
        console.error(error);
        return res.status(400).json({error: "Unauthenticated"});
    }
}