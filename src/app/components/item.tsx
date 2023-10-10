interface ItemProps {
  title:string
}

export default function Item(props:ItemProps){
  return(
    <li className="p-1">
      {props.title}
    </li>
  )
}