import { useGetPendingBookingDetailsQuery } from "../../api/carApiSlice"

const AllUserRequest = () => {
    const id =1
    const pageNo = 0
    const {data,isLoading,isError,isFetching} = useGetPendingBookingDetailsQuery(id,pageNo)
  console.log(data)
    return (
    <div>
      <p style={{border:"2px solid"}}>All user request</p>
      <p >All user request</p>
      <p >All user request</p>
    </div>
  )
}

export default AllUserRequest
