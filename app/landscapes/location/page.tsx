import Brands from "@/components/brands";
import Image from "next/image";
import React from "react";
import map from "@/public/map.png";

type Props = {};

const Location = (props: Props) => {
  return (
    <div className="relative">
      <div className="px-4 space-y-3 text-left">
        <h1 className="text-left text-4xl mt-6">Tour Plan</h1>
        <p className="text-sm">
          Qui tempore voluptate qui quia commodi rem praesentium alias et
          voluptates officia sed molestiae sint et voluptas quos. Qui harum
          repudiandae galisum dolorem Hic deleniti officiis est sapiente
          explicabo non eaque corporis aut voluptatum iusto At facere enim id
          voluptas reprehenderit. Ut voluptas laudantium
        </p>
        <div className="w-full h-full">
          <iframe
            className="w-full h-[500px]"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
          ></iframe>
        </div>
        <p>
          Sit quasi soluta non temporibus voluptas non necessitatibus tempore
          sit deleniti praesentium aut velit nostrum ut itaque atque ad expedita
          veniam. Hic deleniti officiis est sapiente explicabo non eaque
          corporis aut voluptatum iusto At facere enim id voluptas
          reprehenderit. Ut voluptas laudantium et molestias voluptatem ex
          doloremque omnis est ipsum nihil.
        </p>
        <p className="relative">
          Sit quasi soluta non temporibus voluptas non necessitatibus tempore
          sit deleniti praesentium aut velit nostrum ut itaque atque ad expedita
          veniam. Hic deleniti officiis est sapiente explicabo non eaque
          corporis aut voluptatum iusto.
        </p>
      </div>
    </div>
  );
};

export default Location;
