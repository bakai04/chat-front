import { LeftColumn, MainLayout, RightColumn } from "@/widgets"
import { useRouter } from "next/router"
import { useEffect } from "react"

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    const isAuth = localStorage.getItem("authKeys");
    if (!isAuth) router.push("/login");
  }, [router]);
  return (
    <MainLayout>
      <LeftColumn/>
      <RightColumn/>
    </MainLayout>
  )
}

export default Home;