import React from "react";
import invariant from "tiny-invariant";
import { useTitle } from "../providers/TitleProvider";

type Service = {
  title: string;
  description: string;
};

function MyForm() {
  const [service, setService] = React.useState<Service | undefined>(undefined);
  const [error, setError] = React.useState<string | undefined>(undefined);
  const { title } = useTitle();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(undefined);
    setService(undefined);
    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    invariant(typeof name === "string", "name is not a string");
    const response = await fetch(`/api/test/${name}`);
    if (response.ok) {
      const reponseData = await response.json();
      setService(reponseData);
    } else {
      if (response.status === 404) {
        setError("Service not found");
      } else {
        setError("Error fetching data");
      }
    }
  };

  return (
    <>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Service name:
          <input type="text" name="name" />
        </label>
        <button type="submit" value="Submit">
          Search
        </button>
      </form>
      {error && <p role="alert">{error}</p>}
      {service && (
        <section aria-label="result">
          <h2>{service.title}</h2>
          <p>{service.description}</p>
        </section>
      )}
    </>
  );
}

export default MyForm;
