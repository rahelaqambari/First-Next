 function Me() {
  return (
    <div className="h-screen w-full grid grid-cols-2 items-center justify-center gap-6 bg-linear-30 from-blue-900 to-white/45">
      <div className="flex items-center justify-center flex-col text-justify p-12 text-white gap-2">
        <h1 className="text-3xl font-bold bg-linear-30 from-blue-950 to-blue-600 bg-clip-text text-transparent">Salam ,</h1>
        <h1 className="text-2xl font-bold ">Iam <span className="text-3xl bg-linear-30 from-blue-950 to-blue-600 bg-clip-text text-transparent">Rahela Qambari</span> A Web Desinger </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ad incidunt quis molestiae voluptatem asperiores aliquid saepe, perferendis sit aspernatur quaerat assumenda autem placeat tenetur praesentium, at ea, impedit dolor?</p>
        <div className="flex items-center gap-4">
            <h1 className="text-xl hover:border-b hover:cursor-pointer font-serif">Instagrame</h1>
            <h1 className="text-xl hover:border-b hover:cursor-pointer font-serif">Feacbook</h1>
            <h1 className="text-xl hover:border-b hover:cursor-pointer font-serif">Linkden</h1>
        </div>
      </div>
      <div>
        <h1 className="text-9xl">🧑🏻‍💻</h1>
        {/* <Image src={} height={900} width={900} alt="Something went wrong !" /> */}
      </div>
    </div>
  )
}

export default Me
