import DocsContent from "../../components/DocsContent";
import TitleContent from "../../components/Title/TitleContent";
import Layout from "../../layout";

export default () => {
  return (
    <Layout>
      <div>
        <TitleContent title="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
        <DocsContent
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, mattis neque eu dictum neque urna. Id fermentum, porttitor mauris mauris scelerisque ut nunc, pharetra. Amet amet, lobortis nulla arcu, ac suscipit pellentesque id viverra. Et aenean sit neque pretium lorem velit est arcu, in. Consectetur ipsum ut ut vehicula tempor urna, enim justo, molestie. Eget id malesuada commodo suspendisse odio amet condimentum lacus. Posuere donec suspendisse eget quis. Egestas diam, sed sed ornare. "
          urlVideo="https://www.youtube.com/watch?v=fLexgOxsZu0"
        />
      </div>
    </Layout>
  );
};
