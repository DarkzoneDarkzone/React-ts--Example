import UserAll from "./UserAll"

export const Greet = (props: any) => {
    return (
        <div>
            <UserAll data={props.data}/>
        </div>
    )
}