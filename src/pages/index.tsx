import { useRouter } from "next/router"
import React from "react"

import createGameAndGetNumber from "@/api/createGame"
import { Meta } from "@/layouts/Meta"
import { Main } from "@/templates/Main"

const Index: React.FC = () => {
    const router = useRouter()

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        const target = e.target as typeof e.target & {
            name: { value: string }
        }

        const number = createGameAndGetNumber(target.name.value)

        number
            .then((gameId) => router.push("/game/[gameID]", `/game/${gameId}`))
            .catch((error) => console.log("oops something messed up"))
    }

    return (
        <Main
            meta={
                <Meta
                    title="Conquerors of Splatan"
                    description="Play a rip off of Settlers of Catan with your friends"
                />
            }>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold">Conqeurors of Splatan</h1>
                <p className="text-2xl">Create a game below to play with your friends</p>
                <form
                    className="mb-4 rounded bg-gray-100 px-8 pt-6 pb-8 shadow-md"
                    onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="mb-2 block font-bold text-gray-700" htmlFor="Name">
                            Name
                        </label>
                        <input
                            className="w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                            id="Name"
                            type="text"
                            placeholder="Name"
                            name="name"
                        />
                    </div>
                    <div className="mb-4 flex justify-center rounded-md bg-blue-200 p-2 shadow-xl">
                        <button type="submit" className="w-full">
                            Start Game
                        </button>
                    </div>
                </form>
            </div>
        </Main>
    )
}

export default Index
