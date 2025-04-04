
import { defineRouteConfig } from "@medusajs/admin-sdk"
import { ClockSolid } from "@medusajs/icons"
import { Text } from "@medusajs/ui"

const TestPage = () => {
  return (
    <Text>Test page</Text>
  )
}

export default TestPage

export const config = defineRouteConfig({
  label: "Test route",
  icon: ClockSolid,
})