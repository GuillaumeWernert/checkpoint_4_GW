import React from "react";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="bg">
          <img
            className="w-full"
            src="\src\assets\equipe2_fcd.jpg"
            alt="equipe_2"
          />
        </div>
        <h1 className="text-center font-bold">HISTOIRE DU CLUB</h1>
        <p className="history text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error magni
          itaque odit cupiditate, assumenda nesciunt, minus libero provident
          facilis repellat, suscipit deserunt. Perferendis maiores vitae
          explicabo facilis, tempora nobis labore iste sint laudantium
          repellendus necessitatibus aspernatur possimus ut voluptates in sed?
          Provident repellendus pariatur excepturi reiciendis quisquam enim quos
          aspernatur. Distinctio culpa id corporis. Cum tempora repellendus
          placeat assumenda eaque, doloribus voluptatum ipsum vero soluta sit
          sed neque maxime, quasi illo aliquam aut expedita nobis incidunt ipsa
          culpa! Earum sit ipsam dolor consequuntur libero soluta obcaecati
          magni accusamus aperiam ea, impedit, nihil odio sed ex adipisci cum
          dicta expedita. Excepturi, est? Impedit rem corporis totam sequi ullam
          repudiandae quo natus perferendis earum neque, doloribus vel qui, quae
          dolorum quidem necessitatibus cumque porro nulla. Doloremque, magni
          modi accusamus adipisci quasi beatae aliquam sequi minus iste
          consequatur! Rerum, iste perferendis! Alias odio delectus dolorem
          maxime possimus at, vero quia, a eius sed expedita exercitationem
          ducimus consectetur corporis assumenda voluptatem ipsam atque quis
          voluptate labore quaerat eaque neque earum. Consequatur, harum culpa.
          Sit quidem inventore fugiat ea deleniti nisi illum sed, incidunt unde,
          velit praesentium a hic quo? Maxime, voluptatem nemo corrupti
          voluptatum corporis qui repellendus asperiores, iure fugiat quaerat
          quas quibusdam. Soluta.
        </p>
        <h1 className="text-center font-bold">LES EMBLEMES DU CLUB</h1>
        <div className="emblemes md:flex md:m-2">
          <div>
            <h3>Arsène Wenger</h3>
            <img
              className="mb-2 md:w-11/12"
              src="\src\assets\arsene1.jpg"
              alt="arsène"
            />
          </div>
          <div>
            <h3>Lulu</h3>
            <img
              className="mb-2 md:w-11/12"
              src="\src\assets\lulu.jpg"
              alt="lulu"
            />
          </div>
          <div>
            <h3>Théo</h3>
            <img
              className="mb-2 md:w-12/12"
              src="\src\assets\théo.jpg"
              alt="théo"
            />
          </div>
        </div>
        <h1 className="text-center font-bold">LES AUTRES EQUIPES</h1>
        <div className="md:flex md:justify-between md:m-2">
          <img
            className="mb-2 md:w-3/12"
            src="\src\assets\equipe1_fcd.jpg"
            alt="équipe_1"
          />
          <img
            className="mb-2 md:w-3/12"
            src="\src\assets\fem.jpg"
            alt="féminines"
          />
          <img
            className="mb-2 md:w-3/12"
            src="\src\assets\vet21_2.jpg"
            alt="vétérans"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
