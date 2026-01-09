import React from "react";

export default function Task3() {
  const card = [
    {
      image:
        "https://img.freepik.com/free-photo/stylish-girl-walking-through-her-school-s-campus_1157-17420.jpg",
      name: "",
      text: "Bold, passionate, and never afraid to chase her dreams.🔥🚀",
    },
    {
      image:
        "https://img.freepik.com/free-photo/tender-lady-walking-along-street-with-handbag-cup-coffee_231208-3263.jpg?t=st=1759600519~exp=1759604119~hmac=d86a090cfb7c56f72cb9011a34ffde3074081d060bc8fb55c989f907f77714fe&w=1480",
      name: "Aarohi ",
      text: "Always brings a rhythm of joy wherever she goes.🎶",
    },
    {
      image:
        "https://img.freepik.com/free-photo/selective-focus-shot-handsome-man_181624-51446.jpg",
      name: "",
      text: "A blend of beauty and strength, calm yet confident.🌸",
    },
    {
      image:
        "https://img.freepik.com/premium-photo/portrait-woman-wearing-jacket-standing-street-city_1048944-13531748.jpg",
      name: "",
      text: "Shines bright with creativity and kindness in her heart.a 💫",
    },
    {
      image:
        "https://img.freepik.com/free-photo/young-beautiful-girl-posing-black-leather-jacket-park_1153-8101.jpg?t=st=1759600906~exp=1759604506~hmac=47721d52dcbd0bd7838af54aec88be75c43329d9400c0dcbf8f9f386fdfe389d&w=740",
      name: "",
      text: "Grounded like the earth, caring and full of warmth.🌍",
    },
  ];

  return (
    <div
      className="h-screen w-full flex justify-center gap-2 items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/spooky-tree-against-big-moon_1048-2912.jpg?t=st=1759601252~exp=1759604852~hmac=d8e7b7a3f6af9a10ee98092cb8e1a9b3b0bf95e1e94baaac4bcaf582dde29e51&w=1480')",
      }}
    >
      {card.map((data, index) => {
        return (
          <div
            key={index}
            className="bg-white h-[450px] w-[300px] rounded-2xl overflow-hidden relative"
          >
            <img
              src={data.image}
              alt=""
              className="h-full w-full object-cover"
            />

            <div
              className="absolute bottom-0 w-full h-[60%] 
          [mask-image:linear-gradient(to_top,white,transparent)] 
          backdrop-blur-[12px]"
            ></div>

            <div className="text-white absolute bottom-0 p-4">
              <p className="text-2xl font-bold">{data.name}</p>
              <p>{data.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
