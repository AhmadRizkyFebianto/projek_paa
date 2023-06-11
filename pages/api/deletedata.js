import prisma from "@/lib/prisma";
export default async function handler(req,res){
    if(req.method === "POST"){
        const {id} = req.body;
        if(!id){
            return res.status(400).json({message:"data tidak boleh kosong"})
        }
        const getdata = await prisma.data.delete({where:{id}})
        return res.status(200).json({message:"Berhasil menghapus data!"})
    }
}