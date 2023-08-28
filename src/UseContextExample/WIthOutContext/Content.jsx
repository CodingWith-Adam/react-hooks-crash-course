import WelcomeMessage from "./WelcomeMessage";
import ArticleList from "./ArticleList";

function Content({ userName }) {
  return (
    <div>
      <WelcomeMessage userName={userName} />
      <ArticleList />
    </div>
  );
}

export default Content;
