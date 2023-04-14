import BasicTable from "components/BasicTable"
import WinningCard from "components/WinningCard"
import AppBar  from "components/AppBar"
import InputGamePage from "./InputGamePage"


export default function LeaderboardPage() {
    return(
        <>
        <AppBar />
        <WinningCard />
        <InputGamePage />
        <BasicTable />
        </>
    )
}