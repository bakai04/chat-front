import { LeftColumn, MainLayout, RightColumn } from "@/widgets"
import { Divider } from "@mui/material"

export default function Home() {
  return (
    <MainLayout>
      <LeftColumn></LeftColumn>
      <Divider orientation="vertical" flexItem />
      <RightColumn>s</RightColumn>
    </MainLayout>
  )
}
