import Modal from "@/app/Components/Modal";
import wondersImages, { WonderImage } from "@/app/lib/photoLib";
import Image from "next/image";

export default async function PhotoModal({params}: {params: Promise<{id: string}>;}){
    const {id} = await params;
    const photo: WonderImage = wondersImages.find((p) =>p.id === id)!;
    return(
        <Modal>
            <Image className="w-full object-cover aspect-square rounded-sm "
            alt={photo.name}
            width={1000}
            height={1000}
            src={photo.src}
            />
            <div className="bg-stone-50 py-3 flex ">
                <h3 className="text-2xl text-amber-900 font-bold">Photographer : </h3>
                <h3 className="text-2xl text-gray-600 font-bold"> {photo.photographer}</h3>
            </div>
            <div className="bg-stone-50 flex ">
                <h3 className="text-2xl text-amber-900 font-bold">Location : </h3>
                <h3 className="text-2xl text-gray-600 font-bold"> {photo.location}</h3>
            </div>
            </Modal>
         
  );
}