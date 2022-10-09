import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";

const repository = {
  name: "unform",
  description: "description",
  link: "https://github.com/vaahxx",
};

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Repository List</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
