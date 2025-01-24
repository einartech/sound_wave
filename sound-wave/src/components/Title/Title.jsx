import titleStyle from './Style.module.css'

export default function Title({text}) {
  return (
    <h1 className={titleStyle.title}>{text}</h1>
  )
}
