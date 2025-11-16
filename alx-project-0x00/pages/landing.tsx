import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button styles="text-white flex justify-center  items-center bg-[#F9F9F9] px-3 w-auto h-[27px] rounded-sm" title="Small"/>
      <Button styles="text-white flex justify-center  items-center bg-[#F9F9F9] px-3 w-auto h-[27px] rounded-md" title="Medium"/>
      <Button styles="text-white flex justify-center  items-center bg-[#F9F9F9] px-3 w-auto h-[27px] rounded-full" title="Large"/>
    </div>
  )
}

export default Landing