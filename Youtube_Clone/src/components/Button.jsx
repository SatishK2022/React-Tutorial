const Button = () => {
    const buttonList = ["Mixes", "Music", "Javascript", "Live", "Movies", "Comedy", "Ai", "Gadgets", "Songs", "Bollywood Songs", "Indian popup music", "Gaming", "Trending", "Ind vs Pak"]

  return (
    <div className="flex gap-2 mx-6 py-2 px-5 fixed ml-20 top-16 z-10 bg-white whitespace-nowrap no-scrollbar overflow-x-scroll shadow-lg">
      <button className="px-4 py-2 text-sm bg-black text-white rounded-md hover:bg-gray-800">All</button>
        <div className="flex gap-2">
            {buttonList.map((text, id) => <button className="px-4 py-2 text-sm bg-gray-100 rounded-md hover:bg-gray-200" key={id}>{text}</button>)}
        </div>
    </div>
  )
}

export default Button