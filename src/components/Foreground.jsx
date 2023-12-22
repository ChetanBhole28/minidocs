import React, { useRef, useState } from "react";
import Card from "./Card";

function Foreground() {
  //const data = [
  //    desc, filesize, closeOrDownload, tagdetails
  //]
  const ref = useRef(null);
  const data = [
    {
      desc: "Monkey D. Luffy is the captain of the Straw Hat Pirates, and dreamt of being a pirate since childhood from the influence of his idol and mentor Red-Haired",
      filesize: "0.5kb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition, as well as to become Hokage, who is acknowledged ",
      filesize: "0.4kb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Gon to fulfill his dreams of becoming a legendary Hunter like his dad, a young boy must pass a rigorous examination and find his missing father.",
      filesize: "0.9kb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Two brothers search for a Philosopher's Stone after an attempt to revive their deceased mother goes awry and leaves them in damaged physical forms.",
      filesize: "0.9kb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Facing a world of stone and the total collapse of civilization, Senku makes up his mind to use science to rebuild the world. ",
      filesize: "0.9kb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "After being given a mysterious power to control others, an outcast prince becomes the masked leader of the rebellion against an all-powerful empire.",
      filesize: "0.9kb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Goku's a strange, bushy-tailed boy who spends his days hunting and eating - until he meets Bulma, a bossy beauty with boys on the brain.",
      filesize: "0.9kb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
  ];
  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5"
    >
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
