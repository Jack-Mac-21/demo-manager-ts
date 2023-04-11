import BasicTable from "components/BasicTable"
import WinningCard from "components/WinningCard"
import AddGameButton from "components/AddGameButton"
import AppBar  from "components/AppBar"


export default function LeaderboardPage() {
    return(
        <>
        <AppBar />
        <WinningCard />
        <AddGameButton />
        <BasicTable />
        </>
    )
}