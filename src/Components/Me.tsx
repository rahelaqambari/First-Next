import { imageConfigDefault } from "next/dist/shared/lib/image-config"
import Image from "next/image"

 function Me() {
  return (
    <div className="h-screen w-full grid grid-cols-2 items-center justify-center ">
      <div>
        <h1>Salam , Iam Rahela Qambari A Web Desinger </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ad incidunt quis molestiae voluptatem asperiores aliquid saepe, perferendis sit aspernatur quaerat assumenda autem placeat tenetur praesentium, at ea, impedit dolor?</p>
      </div>
      <div>
        <h1 className="text-9xl">🧑🏻‍💻</h1>
        {/* <Image src={} height={900} width={900} alt="Something went wrong !" /> */}
      </div>
    </div>
  )
}

export default Me
