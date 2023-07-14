import { useSearchParams } from "react-router-dom"

export default function Dashboard(){
    const [ searchParams ] = useSearchParams();
    const name = searchParams.get("name");
    const email = searchParams.get("email");

    return(
        <>
        <h2>Dashboard</h2>
        <header>
            <address>
                <p>{name}</p>
                <p>{email}</p>
            </address>
        </header>
        </>
    )
}