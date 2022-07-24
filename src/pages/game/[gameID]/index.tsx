import { useRouter } from "next/router"
import React from "react"

const GamePage: React.FC = () => {
    const router = useRouter()
    const { gameID } = router.query

    return <h1>{gameID}</h1>
}

export default GamePage
