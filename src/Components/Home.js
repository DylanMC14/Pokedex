import React from "react";
import "../Styles/Home.css";
import PokeInfo from "./PokeInfo";
import Header from "./Header";
import PokeCarousel from "./PokeCarousel";

function Home() {
  return (
    <div className="boxHome">
      <div className="home-Header">
        <Header />
      </div>

      <div className="box-games">
        <div className="images-Games">
          <div id="font">
            <h1 id="titles-Home">What is the history of pokemon?</h1>
            <p id="paragraphs-Home">
              The story of Pokémon (short for Pocket Monsters) begins in Japan,
              a country where a video game lover named Satoshi Tajiri, at just
              25 years old, had the idea of designing a system in which several
              players could interact in a shared world. It was an ambitious idea
              for 1990, but it was the seed of what years later would become a
              worldwide success. Tajiri was lucky enough to work under the
              direction of the legendary Shigeru Miyamoto (father of Mario Bros)
              on several video games and after years of developing the idea, he
              presented his first Pokémon for the Game Boy portable console in
              February 1996.
            </p>
            <h3 id="title-Games">
              These are some of the many pokemon games that exist.
            </h3>
            <PokeCarousel />
            <h1 id="titles-Home">What is a pokemon?</h1>
            <p id="paragraphs-Home">
              The central creatures of this universe are, obviously, Pokémon.
              Initially there were 150 and the vast majority of them presented
              some type of special power or ability (such as fire, water or
              electricity). Several of these beings are mainly docile and do not
              show signs of aggression, which makes them a perfect pet species
              (of course, that does not mean that there are some that are more
              aggressive, or that prefer wildlife).
            </p>
            <div id="pokemon">
              <p>⭐</p>
            </div>
            <h1 id="titles-Home">
              What happened after the release of the first game?
            </h1>
            <p id="paragraphs-Home">
              With the success of the first video game, in April 1997, the first
              chapter of the animated series premiered in Japan. The fiction
              tells the story of Ash, a boy who loves the universe of Pokémon
              and who wants to become the absolute master of fighting. When the
              time comes to receive his first creature, he gets a Pikachu, a
              small yellow animal whose power is electricity. Accompanied by his
              friends, Ash becomes the central protagonist of the series, always
              fighting to obtain as many Pokémon as possible to train and evolve
              them.
            </p>
            <div id="ash">
              <p>⭐</p>
            </div>
          </div>
          <h1 id="titles-Home">More information coming soon ...</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
