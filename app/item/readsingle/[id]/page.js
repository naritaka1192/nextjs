const getSingleItem=async(id)=>{
  console.log(id)
  const response = await fetch(`http://localhost:3000/api/item/readsingle/${id}`)
  const jsonData= await response.json()
  console.log(jsonData)
}

const ReadSingleItem = (context) =>{
getSingleItem(context.params.id)
  return(
    <h1>個別アイテムページ</h1>
  )
}
export default ReadSingleItem
