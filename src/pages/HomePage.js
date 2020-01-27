import React from "react";
import Article from "../components/Article";
const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun",
    author: "Jan Nowak",
    text:
      "111Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, quo animi distinctio ipsum aspernatur officiis saepe impedit voluptatem ab unde. Repudiandae laborum culpa dolorum quisquam impedit alias velit animi quia. "
  },
  {
    id: 3,
    title: "Czym jest paradoks fermiego",
    author: "Jan Nowak",
    text:
      "222Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, quo animi distinctio ipsum aspernatur officiis saepe impedit voluptatem ab unde. Repudiandae laborum culpa dolorum quisquam impedit alias velit animi quia. "
  },
  {
    id: 3,
    title: "Ciemna materia i ciemna energia?",
    author: "Jan Nowak",
    text:
      "333Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, quo animi distinctio ipsum aspernatur officiis saepe impedit voluptatem ab unde. Repudiandae laborum culpa dolorum quisquam impedit alias velit animi quia. "
  }
];
const HomePage = () => {
  const artList = articles.map(article => (
    <Article key={article.id} {...article} />
  ));
  return <div className="home">{artList}</div>;
};

export default HomePage;
