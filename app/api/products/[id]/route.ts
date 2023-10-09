import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

type ParamsType = {
    params: {id: string}
}

export async function DELETE (request:Request, {params}:ParamsType){
    try {
        const id = Number(params.id);
            const deleted = await prisma.product.delete({where: {id:id}});
            if(deleted){
                return NextResponse.json({deleted,message: "Product deleted"})
            }else{
                return NextResponse.json({message:"product not found"},{status:404})
            }
    } catch (err) {
        const error = err as { message: string };
        return NextResponse.json({error: error.message},{status:500})
    }
}

export async function PUT (request:Request, {params}:ParamsType){
    try {
        const {name,description} = await request.json();

        const id = Number(params.id);

        const updated = await prisma.product.update({
            where: {id: id},
            data:{
                name,
                description
            }
        });

        if(updated){
            return NextResponse.json(updated);
        }else{
            return NextResponse.json({message:"product not found"},{status: 404})
        }
    } catch (err) {
        const error = err as { message: string };
        return NextResponse.json({error: error.message},{status:500})
    }
}