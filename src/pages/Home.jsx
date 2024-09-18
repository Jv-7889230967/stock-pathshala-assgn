import { useQuery } from "@tanstack/react-query"
import { getClasses } from "../utils/getliveClasses"

const Home = () => {
    const { isPending, isError, data, error } = useQuery({
        queryKey: ['classes'],
        queryFn: getClasses,
      })
      console.log(data)
  return (
    <div></div>
  )
}

export default Home