import classes from './UserCard.module.css'

interface Props {
  icon: JSX.Element
  value: string | number
  text: string
}

export const Item: React.FC<Props> = ({ icon, value, text }) => {
  return (
    <div className={classes.item}>
      {icon}
      <div>
        <p>{value}</p>
        <p style={{ color: '#909090' }}>{text}</p>
      </div>
    </div>
  )
}
