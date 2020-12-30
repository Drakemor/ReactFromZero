import { useParams } from "react-router-dom";

export default function Page(props) {
  let { id } = useParams();
  if (!id) return <div>Provide Params</div>;

  return (<div>{id} {props.children}</div>);
}
