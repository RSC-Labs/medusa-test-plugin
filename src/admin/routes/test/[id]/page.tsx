import { useParams } from "react-router-dom"

import { Text } from "@medusajs/ui"

const TestIdPage = () => {
  const { id } = useParams()
  return (
    <Text>Test page with ID {id}</Text>
  )
}

export default TestIdPage