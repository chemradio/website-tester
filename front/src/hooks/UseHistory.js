import {NavLink} from "react-router-dom";

export const UseHistoryPath = ({path}) => {
  return (<NavLink to={path || '/'}/>)
}