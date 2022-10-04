export function Posts(props) {
  console.log(props);
  return (
    <div>
      <header>
        <h1>Bem vindo, {props.author}</h1>
      </header>

      <section>{props.content}</section>
    </div>
  );
}
