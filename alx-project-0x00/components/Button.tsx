import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <div className={styles}>
      <p className=" text-sm ">{title}</p>
    </div>
  )
}

export default Button;